'use client';

import { useEffect } from 'react';
import { initializeFirebaseAnalytics } from '@/lib/firebase';

export default function FirebaseAnalytics() {
  useEffect(() => {
    initializeFirebaseAnalytics().catch(() => null);
  }, []);

  return null;
}
