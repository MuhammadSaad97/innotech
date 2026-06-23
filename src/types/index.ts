export type ProjectCategory =
  | 'architecture'
  | 'interior'
  | 'construction'
  | 'renovation'
  | 'office'
  | 'media';

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  year: number;
  coverImage: string;
  gallery?: string[];
  description: string;
  featured?: boolean;
  area?: string;
  duration?: string;
  client?: string;
  serviceType?: string;
  mediaType?: 'image' | 'video';
};

export type Service = {
  id: string;
  title: string;
  description: string;
  label: string;
  features?: string[];
};

export type GoogleReview = {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTimeDescription: string;
  time: number;
};

export type ContactDocument = {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  createdAt: string;
  updatedAt: string;
};

export type SiteProfile = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  googleBusinessUrl: string;
  socials: {
    instagram: string;
    facebook: string;
  };
};
