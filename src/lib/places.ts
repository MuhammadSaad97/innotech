import { reviews, siteProfile } from '@/data/site';

export async function fetchPlaceData() {
  return {
    reviews,
    rating: 5,
    userRatingCount: reviews.length,
    formattedAddress: siteProfile.address,
    nationalPhoneNumber: siteProfile.phone
  };
}
