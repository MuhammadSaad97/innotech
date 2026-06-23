import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ali-residence',
    slug: 'ali-residence',
    title: 'Ali Residence',
    subtitle: 'Contemporary residential exterior with layered massing and warm facade detailing.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/ali-residence.jpeg',
    gallery: [
      '/projects/ali-residence.jpeg',
      '/projects/ali-residence-02.jpeg',
      '/projects/ali-residence-03.jpeg',
      '/projects/ali-residence-04.jpeg'
    ],
    description:
      'A refined residential concept balancing clean geometry, privacy, and a strong first impression from the street.',
    featured: true,
    serviceType: 'Architectural Design',
    mediaType: 'image'
  },
  {
    id: 'usama-residence',
    slug: 'usama-residence',
    title: 'Usama Residence',
    subtitle: 'Modern villa render focused on proportion, light, and material contrast.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/usama-residence.jpg',
    gallery: [
      '/projects/usama-residence.jpg',
      '/projects/usama-residence-02.jpg',
      '/projects/usama-residence-03.jpg',
      '/projects/usama-residence-04.jpg'
    ],
    description:
      'A crisp exterior study designed to communicate scale, entrance sequence, and premium residential character.',
    featured: true,
    serviceType: 'Architectural Design',
    mediaType: 'image'
  },
  {
    id: 'bilal-residence',
    slug: 'bilal-residence',
    title: 'Bilal Residence',
    subtitle: 'Premium facade concept with bold volumes and elegant landscape framing.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/bilal-residence.png',
    gallery: [
      '/projects/bilal-residence.png',
      '/projects/bilal-residence-02.png',
      '/projects/bilal-residence-03.png',
      '/projects/bilal-residence-04.png'
    ],
    description:
      'A residential visualization package shaped around elegant curb appeal and practical build expression.',
    featured: true,
    serviceType: 'Architecture & Visualization',
    mediaType: 'image'
  },
  {
    id: 'kaiser-villa',
    slug: 'kaiser-villa',
    title: 'Kaiser Villa',
    subtitle: 'Architectural concept with a polished residential presentation style.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/kaiser-villa.png',
    gallery: [
      '/projects/kaiser-villa.png',
      '/projects/kaiser-villa-02.png',
      '/projects/kaiser-villa-03.png',
      '/projects/kaiser-villa-04.png'
    ],
    description:
      'A visual design exploration for a private villa, emphasizing symmetry, facade depth, and premium finishes.',
    featured: false,
    serviceType: 'Architectural Design',
    mediaType: 'image'
  },
  {
    id: 'qazi-asifuddin-residence',
    slug: 'qazi-asifuddin-residence',
    title: 'Qazi Asifuddin Residence',
    subtitle: 'Residential render with a composed facade and modern family-home language.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2025,
    coverImage: '/projects/qazi-asifuddin-residence.jpg',
    gallery: [
      '/projects/qazi-asifuddin-residence.jpg',
      '/projects/qazi-asifuddin-residence-02.jpg',
      '/projects/qazi-asifuddin-residence-03.jpg',
      '/projects/qazi-asifuddin-residence-04.jpg'
    ],
    description:
      'A facade-focused project created to refine exterior identity and communicate the final build direction.',
    featured: false,
    serviceType: 'Exterior Design',
    mediaType: 'image'
  },
  {
    id: 'mumtaz-residence',
    slug: 'mumtaz-residence',
    title: 'Mumtaz Residence',
    subtitle: 'Residential visualization set with multiple facade and exterior views.',
    category: 'architecture',
    location: 'Pakistan',
    year: 2025,
    coverImage: '/projects/mumtaz-residence.jpg',
    gallery: [
      '/projects/mumtaz-residence.jpg',
      '/projects/mumtaz-residence-02.jpg',
      '/projects/mumtaz-residence-03.jpg',
      '/projects/mumtaz-residence-04.jpg'
    ],
    description:
      'A residential design presentation showing the project from several angles for clearer client review.',
    featured: false,
    serviceType: 'Architectural Visualization',
    mediaType: 'image'
  },
  {
    id: 'interior-suite-01',
    slug: 'interior-suite-01',
    title: 'Interior Suite 01',
    subtitle: 'Warm interior concept with premium lighting, finishes, and calm spatial flow.',
    category: 'interior',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/interior-suite-01.jpeg',
    gallery: [
      '/projects/interior-suite-01.jpeg',
      '/projects/interior-suite-01-02.jpeg',
      '/projects/interior-suite-01-03.jpeg',
      '/projects/interior-suite-03.jpeg'
    ],
    description:
      'A refined interior visualization showing material harmony, lighting mood, and high-end residential comfort.',
    featured: true,
    serviceType: 'Interior Design',
    mediaType: 'image'
  },
  {
    id: 'interior-suite-02',
    slug: 'interior-suite-02',
    title: 'Interior Suite 02',
    subtitle: 'Contemporary interior render built around comfort, storage, and finish detail.',
    category: 'interior',
    location: 'Pakistan',
    year: 2026,
    coverImage: '/projects/interior-suite-02.jpeg',
    gallery: [
      '/projects/interior-suite-02.jpeg',
      '/projects/interior-suite-02-02.jpeg',
      '/projects/interior-suite-02-03.jpeg'
    ],
    description:
      'A design package for a polished interior space, balancing visual richness with practical everyday use.',
    featured: false,
    serviceType: 'Interior Design',
    mediaType: 'image'
  }
];

export const projectCategories: { id: Project['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'interior', label: 'Interiors' },
  { id: 'construction', label: 'Construction' },
  { id: 'renovation', label: 'Renovation' },
  { id: 'office', label: 'Office' }
];
