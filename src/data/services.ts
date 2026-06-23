import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'construction',
    title: 'Turnkey Construction',
    label: 'Build',
    description:
      'Complete residential and commercial construction delivery with disciplined planning, site coordination, and finish quality.',
    features: ['Site execution', 'Material coordination', 'Quality supervision']
  },
  {
    id: 'architecture',
    title: 'Architectural Design',
    label: 'Design',
    description:
      'Concept planning and architectural visualization for villas, homes, commercial spaces, and mixed-use developments.',
    features: ['Concept layouts', 'Exterior renders', 'Design documentation']
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    label: 'Interiors',
    description:
      'Premium interior concepts, space planning, and material direction for refined homes and workspaces.',
    features: ['Mood boards', '3D renders', 'Finish selection']
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    label: 'Renew',
    description:
      'Thoughtful upgrades for existing spaces, from structural improvements to modern interior transformations.',
    features: ['Space upgrades', 'Adaptive reuse', 'Phased renovation']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    label: 'Manage',
    description:
      'Transparent schedules, procurement support, vendor coordination, and budget oversight from kickoff to handover.',
    features: ['Timeline control', 'Vendor coordination', 'Progress reporting']
  },
  {
    id: 'consultation',
    title: 'Design & Build Consultation',
    label: 'Advise',
    description:
      'Early-stage guidance for feasibility, scope, cost expectations, and practical execution routes.',
    features: ['Feasibility review', 'Cost guidance', 'Build readiness']
  }
];
