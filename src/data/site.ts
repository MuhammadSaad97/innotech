import { GoogleReview, SiteProfile } from '@/types';

export const siteProfile: SiteProfile = {
  name: 'Innotech Construction',
  legalName: 'Innotech Construction Private Limited',
  tagline: 'Building Excellence, Defining Spaces',
  description:
    'Premium construction, architectural design, interiors, renovation, and project management services for discerning residential and commercial clients.',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '0312 8583667',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'innotechconstructionpk@gmail.com',
  address:
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
    'Office: 09 Hazro Arcade, Block B Multi Gardens B-17, Islamabad',
  city: 'Islamabad',
  country: 'Pakistan',
  googleBusinessUrl:
    'https://www.google.com/search?q=innotech+construction',
  socials: {
    instagram: 'https://www.instagram.com/innotechconstructionpk/',
    facebook: 'https://www.facebook.com/innotechconstructionpk/'
  }
};

export const stats = [
  { label: 'Clients', value: '25+' },
  { label: 'Houses Delivered', value: '20+' },
  { label: 'Star Rating', value: '5' }
];

export const processSteps = [
  {
    title: 'Consult',
    description:
      'We clarify goals, site realities, budget expectations, design taste, and practical delivery needs.'
  },
  {
    title: 'Design',
    description:
      'Our team turns requirements into architectural direction, renders, interior concepts, and scope clarity.'
  },
  {
    title: 'Build',
    description:
      'Execution is managed through coordinated teams, quality checks, procurement planning, and regular updates.'
  },
  {
    title: 'Handover',
    description:
      'We close with finishing details, walkthroughs, documentation, and a space ready for use.'
  }
];

export const reviews: GoogleReview[] = [
  {
    authorName: 'Ali Ahmed',
    rating: 5,
    text:
      "Well we recently worked with 'INNOTECH CONSTRUCTION' for our project and the results exceeds our expectations. The team is very hardworking and professional towards their work stunning details almost realistic design perfectly showcasing everything. I would like to tell the best part is their communication and attention to every details which makes the whole process seamless. They captured our vision exactly and even added thoughtful touches we hadn't considered. I highly recommend 'INNOTECH CONSTRUCTION' for anyone who is looking for something extraordinary or professional high quality architectural work.",
    relativeTimeDescription: '10 months ago',
    time: 1730246400
  },
  {
    authorName: 'Usman Zulfiqar',
    rating: 5,
    text:
      'Early last year, we engaged InnoTech Construction Company for the design and grey structure construction of our house at Faisal Hills. From start to finish, the team demonstrated exceptional professionalism and commitment. Mr. Raza was highly cooperative during the design phase, ensuring our requirements were fully incorporated. During construction, Mr. Fahd and Mr. Mohsin maintained a strong focus on quality, conducted regular site visits, and upheld a customer-centric approach throughout the project. We are extremely satisfied with their work and would highly recommend this young, dynamic company with an energetic and dedicated team.',
    relativeTimeDescription: '5 months ago',
    time: 1740182400
  },
  {
    authorName: 'Javeria Awan',
    rating: 5,
    text:
      'I had a great experience with Innotech Construction for the design of my house. Their team was very professional and cooperative throughout the process. They not only understood my requirements but also guided me with creative suggestions. I am especially impressed with the front elevation design - it turned out modern, stylish, and exactly how I envisioned it. Thank you to the entire Innotech team for their efforts and dedication. I would definitely recommend their services to anyone looking for quality design.',
    relativeTimeDescription: '9 months ago',
    time: 1732924800
  },
  {
    authorName: 'Warda Usman',
    rating: 5,
    text:
      'Incredibly impressed by the whole team. Professionalism, punctuality, customer service, most important budget adherence - all 10 on 10. They went above and beyond to ensure our satisfaction. Thank you Innotech Team.',
    relativeTimeDescription: '5 months ago',
    time: 1740182400
  },
  {
    authorName: 'Wazeem Tahir',
    rating: 5,
    text: 'A customer centric professional team.',
    relativeTimeDescription: '11 months ago',
    time: 1727568000
  },
  {
    authorName: 'Usman Dastgir',
    rating: 5,
    text:
      "Exemplary craftsmanship, impeccable attention to detail, and outstanding customer service. This company exceeded all my expectations! Efficient, reliable, and delivered on time. I couldn't be happier with the quality of work provided.",
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Saad Rehman',
    rating: 5,
    text:
      'Best construction pros in the town. Very professional boys. If you want an all in one package for your projects from A-Z without any quality compromises, this is the place to go without any hassle. Good work boys.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Ehtesham Khan',
    rating: 5,
    text:
      'I must appreciate your work you guys really know the work from design to finishing everything was perfect and secure. And it was all done under my giving budget.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Dr Muhammad Hashim Khan',
    rating: 5,
    text: 'One of the best team in twin cities. Hard working, experienced and friendly.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Ahsan Zubair',
    rating: 5,
    text: 'Nice and professional behaviour. Have great knowledge of upcoming development of real estate.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Zainab Ali Khan',
    rating: 5,
    text: 'Great Experience.',
    relativeTimeDescription: '5 months ago',
    time: 1740182400
  },
  {
    authorName: 'Mohsin AhmAd',
    rating: 5,
    text: 'Professional working with strong customer care and feedback.',
    relativeTimeDescription: 'Edited a year ago',
    time: 1714521600
  },
  {
    authorName: 'Saif Ali',
    rating: 5,
    text: 'Great working experience.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'raees printers',
    rating: 5,
    text: 'Good work.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'zohaib hassan',
    rating: 5,
    text: 'Complete with customer values.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'qasim chaudry',
    rating: 5,
    text: 'Positive review on Google.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  },
  {
    authorName: 'Shahid Ali Khan',
    rating: 5,
    text: 'Rated 5 stars on Google.',
    relativeTimeDescription: '3 years ago',
    time: 1627344000
  }
];

export const googleReviewSummary = {
  rating: 5,
  reviewCount: 17,
  label: 'INNOTECH CONSTRUCTION (Pvt.) Ltd.'
};

export const testimonialVideos = [
  {
    title: 'Client Testimonial 01',
    description: 'A client-facing video review from Innotech project work.',
    src: 'https://storage.googleapis.com/innotech-site-media-d856e/site-media/client-review.mp4',
    poster: '/brand/innotech-logo-full.jpg'
  },
  {
    title: 'Client Testimonial 02',
    description: 'Additional testimonial media from the Innotech client review archive.',
    src: 'https://storage.googleapis.com/innotech-site-media-d856e/site-media/client-review-02.mp4',
    poster: '/brand/innotech-logo-full.jpg'
  }
];

export const constructionVideos = [
  {
    title: 'Site Progress 01',
    description: 'On-site construction progress footage showing active execution and coordination.',
    src: 'https://storage.googleapis.com/innotech-site-media-d856e/site-media/construction-progress-01.mp4',
    poster: '/projects/bilal-residence.png'
  },
  {
    title: 'Site Progress 02',
    description: 'Field media from ongoing construction work and practical site delivery.',
    src: 'https://storage.googleapis.com/innotech-site-media-d856e/site-media/construction-progress-02.mp4',
    poster: '/projects/usama-residence.jpg'
  },
  {
    title: 'Site Progress 03',
    description: 'Construction-stage video showing the build process beyond finished renders.',
    src: 'https://storage.googleapis.com/innotech-site-media-d856e/site-media/construction-progress-03.mp4',
    poster: '/projects/ali-residence.jpeg'
  }
];
