import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const projectId = 'innotech-d856e';
const preferredBuckets = ['innotech-site-media-d856e'];
const mediaDir = path.join(process.cwd(), 'public', 'media');

const files = [
  'architecture-interiors.mp4',
  'client-review.mp4',
  'client-review-02.mp4',
  'construction-progress-01.mp4',
  'construction-progress-02.mp4',
  'construction-progress-03.mp4'
];

function getAccessToken() {
  const output = execFileSync('cmd.exe', ['/c', 'npx.cmd', 'firebase-tools', 'login:list', '--json'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });
  const parsed = JSON.parse(output);
  const token = parsed?.result?.[0]?.tokens?.access_token;
  if (!token) {
    throw new Error('Could not read Firebase CLI access token.');
  }
  return token;
}

async function findBucket(accessToken) {
  for (const bucket of preferredBuckets) {
    const response = await fetch(`https://storage.googleapis.com/storage/v1/b/${bucket}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.ok) {
      return bucket;
    }
  }

  const createResponse = await fetch(
    `https://storage.googleapis.com/storage/v1/b?project=${projectId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: preferredBuckets[0],
        location: 'US',
        storageClass: 'STANDARD',
        iamConfiguration: {
          uniformBucketLevelAccess: {
            enabled: true
          }
        }
      })
    }
  );

  if (!createResponse.ok) {
    throw new Error(`Bucket creation failed: ${createResponse.status} ${await createResponse.text()}`);
  }

  return preferredBuckets[0];
}

async function makeBucketPublic(accessToken, bucket) {
  const policyUrl = `https://storage.googleapis.com/storage/v1/b/${bucket}/iam`;
  const getResponse = await fetch(policyUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!getResponse.ok) {
    throw new Error(`Bucket IAM read failed: ${getResponse.status} ${await getResponse.text()}`);
  }

  const policy = await getResponse.json();
  const bindings = policy.bindings || [];
  const existing = bindings.find((binding) => binding.role === 'roles/storage.objectViewer');

  if (existing) {
    existing.members = Array.from(new Set([...(existing.members || []), 'allUsers']));
  } else {
    bindings.push({
      role: 'roles/storage.objectViewer',
      members: ['allUsers']
    });
  }

  const setResponse = await fetch(policyUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...policy,
      bindings
    })
  });

  if (!setResponse.ok) {
    throw new Error(`Bucket IAM update failed: ${setResponse.status} ${await setResponse.text()}`);
  }
}

async function uploadFile(accessToken, bucket, fileName) {
  const objectName = `site-media/${fileName}`;
  const filePath = path.join(mediaDir, fileName);
  const body = readFileSync(filePath);

  const uploadUrl = new URL(`https://storage.googleapis.com/upload/storage/v1/b/${bucket}/o`);
  uploadUrl.searchParams.set('uploadType', 'media');
  uploadUrl.searchParams.set('name', objectName);

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'video/mp4',
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
    body
  });

  if (!uploadResponse.ok) {
    throw new Error(`${fileName} upload failed: ${uploadResponse.status} ${await uploadResponse.text()}`);
  }

  return {
    fileName,
    objectName,
    downloadUrl: `https://storage.googleapis.com/${bucket}/${objectName}`
  };
}

const accessToken = getAccessToken();
const bucket = await findBucket(accessToken);
await makeBucketPublic(accessToken, bucket);
const results = [];

for (const file of files) {
  console.log(`Uploading ${file}...`);
  results.push(await uploadFile(accessToken, bucket, file));
}

const outputPath = path.join(process.cwd(), 'storage-video-urls.json');
writeFileSync(outputPath, JSON.stringify({ projectId, bucket, videos: results }, null, 2));
console.log(`Wrote ${outputPath}`);
