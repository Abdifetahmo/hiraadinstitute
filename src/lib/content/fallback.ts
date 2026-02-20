import type { HomeContent, NewsItem, PageContent, Publication, SiteSettings } from '@/src/lib/types';

export const fallbackSiteSettings: SiteSettings = {
  name: 'Hiraad Public Policy Studies Institute',
  tagline: 'Independent. Non-partisan. Evidence-first.',
  description:
    'Hiraad is a Somali Region-based think tank advancing evidence-based policymaking through rigorous research, dialogue, and community-grounded analysis.',
  contactEmail: 'info@hiraadinstitute.com',
  contactLocation: 'Jigjiga, Somali Region, Ethiopia',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/about' },
    { label: 'What We Do', href: '/work' },
    { label: 'Publications', href: '/publications' },
    { label: 'News & Events', href: '/news' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/contact' }
  ]
};

export const fallbackHome: HomeContent = {
  heroTitle: 'Policy Insight Rooted in Somali Realities',
  heroSubtitle: 'Hiraad Public Policy Studies Institute',
  heroDescription:
    'We produce independent, high-quality policy research and convene inclusive dialogue to help Ethiopia\'s Somali Region design practical, evidence-based solutions.',
  primaryCta: {
    label: 'Explore Our Work',
    href: '/work'
  },
  secondaryCta: {
    label: 'Read Publications',
    href: '/publications'
  },
  highlights: [
    {
      title: 'Locally Anchored Research',
      description:
        'Our analysis begins with field engagement, community realities, and policy needs in the Somali Region.'
    },
    {
      title: 'Decision-Maker Usability',
      description:
        'We translate evidence into actionable recommendations for government, civil society, and development actors.'
    },
    {
      title: 'Inclusive Public Dialogue',
      description:
        'Forums, seminars, and consultations connect policymakers, youth, researchers, and community leaders.'
    },
    {
      title: 'Regional and National Lens',
      description:
        'Our work links local priorities to Ethiopia\'s federal context and broader Horn of Africa dynamics.'
    }
  ],
  stats: [
    { value: '2024', label: 'Year Established' },
    { value: '8', label: 'Core Thematic Areas' },
    { value: '15+', label: 'Public Dialogues in 2024-2025' }
  ],
  featuredThemes: [
    'Peace, conflict, and social cohesion',
    'Governance and institutional accountability',
    'Pastoralism, agriculture, and livelihoods',
    'Climate resilience and adaptation',
    'Economic development and transformation',
    'History, heritage, and collective memory'
  ]
};

export const fallbackPages: Record<string, PageContent> = {
  'who-we-are': {
    slug: 'who-we-are',
    title: 'Who We Are',
    subtitle: 'Institutional Identity and Positioning',
    lead: 'Hiraad is an independent, non-partisan, and non-profit policy institute established in June 2024 in Ethiopia\'s Somali Region.',
    sections: [
      {
        title: 'Our Institutional Role',
        text:
          'Hiraad was founded to fill a structural gap in policy knowledge by generating rigorous, locally grounded evidence and connecting it to actionable policymaking at regional and federal levels.'
      },
      {
        title: 'Mission',
        text:
          'Advance evidence-based policymaking in the Somali Region through independent research, inclusive policy dialogue, and institutional capacity strengthening.'
      },
      {
        title: 'Vision',
        text:
          'A Somali Region where public policy is informed by evidence, communities shape their futures, and local knowledge contributes to national and global policy debates.'
      },
      {
        title: 'Core Values',
        text: 'Our institutional principles define how we work and who we serve.',
        bullets: [
          'Intellectual independence and non-partisanship',
          'Contextual integrity and local relevance',
          'Inclusivity across women, youth, pastoralists, and remote communities',
          'Transparency, accountability, and public trust',
          'Policy impact through practical recommendations'
        ]
      },
      {
        title: 'Constituencies',
        text: 'We support policymaking and public discourse across multiple stakeholders.',
        bullets: [
          'Federal, regional, and local government institutions',
          'Civil society organizations and development partners',
          'Private sector and economic actors',
          'Communities, media, and public audiences'
        ]
      }
    ],
    cta: {
      label: 'See What We Do',
      href: '/work'
    }
  },
  'what-we-do': {
    slug: 'what-we-do',
    title: 'What We Do',
    subtitle: 'Research, Advisory, and Public Engagement',
    lead: 'Hiraad connects research, dialogue, and advisory services through a policy impact cycle designed for practical outcomes.',
    sections: [
      {
        title: 'Research and Analysis',
        text:
          'We produce applied policy research, thematic diagnostics, and multidisciplinary studies on governance, conflict, livelihoods, climate, and economic development.'
      },
      {
        title: 'Consulting and Advisory Services',
        text:
          'We support institutions through policy advisory, strategy design, governance reform inputs, monitoring frameworks, and conflict-sensitive analysis.'
      },
      {
        title: 'Training and Capacity Building',
        text:
          'Our programs equip officials, civil society actors, and emerging researchers with practical skills in policy analysis, data methods, and accountability frameworks.'
      },
      {
        title: 'Dialogue and Convenings',
        text:
          'Through forums, policy seminars, and public discussions, we create neutral spaces for informed debate and cross-sector collaboration.'
      },
      {
        title: 'Our Thematic Scope',
        text: 'All work is structured across interconnected domains.',
        bullets: [
          'Peace, conflict, and social cohesion',
          'Governance and institutional accountability',
          'Pastoralism, agriculture, and livelihoods',
          'Social services and human development',
          'Climate change and environmental resilience',
          'Economic development and structural transformation',
          'Religion, culture, and social values',
          'History, heritage, and collective memory'
        ]
      }
    ],
    cta: {
      label: 'Read Publications',
      href: '/publications'
    }
  },
  'get-involved': {
    slug: 'get-involved',
    title: 'Get Involved',
    subtitle: 'Partnership, Collaboration, and Participation',
    lead: 'Sustainable policy impact requires collaboration. Hiraad provides multiple ways for institutions and individuals to contribute.',
    sections: [
      {
        title: 'Institutional Partnerships',
        text:
          'We collaborate with public institutions, CSOs, academia, media, and development partners through joint research, dialogue platforms, and strategic technical support.'
      },
      {
        title: 'Research Collaboration',
        text:
          'Researchers and academic institutions can partner with us on research design, fieldwork, peer review, and co-publication aligned with ethical and contextual standards.'
      },
      {
        title: 'Policy Engagement and Advisory',
        text:
          'We work directly with policy actors on briefs, consultation facilitation, strategy support, and evidence-informed institutional reform processes.'
      },
      {
        title: 'Youth, Volunteers, and Internships',
        text:
          'Students and early-career professionals can contribute to research assistance, event documentation, policy writing, and outreach while building practical policy skills.'
      },
      {
        title: 'Ways to Engage',
        text: 'You can support Hiraad through multiple channels.',
        bullets: [
          'Co-designing policy studies and dialogue events',
          'Funding research and capacity-building programs',
          'Joining volunteer and internship opportunities',
          'Collaborating on media and public awareness initiatives'
        ]
      }
    ],
    cta: {
      label: 'Contact Our Team',
      href: '/contact'
    }
  }
};

export const fallbackNews: NewsItem[] = [
  {
    title: 'Hiraad Annual Dialogue Forum (HADAF) 2025',
    slug: 'hadaf-2025',
    date: '2025-07-10',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Governance, Public Policy, and Multi-Stakeholder Collaboration',
    excerpt:
      'Hiraad convened policymakers, researchers, civil society, and community actors to examine institutional reform, service delivery, peacebuilding, climate risks, and development pathways.'
  },
  {
    title: 'Somali Regional Youth Forum 2025',
    slug: 'somali-regional-youth-forum-2025',
    date: '2025-06-01',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Youth Leadership, Innovation, and Civic Engagement',
    excerpt:
      'In partnership with regional youth institutions, the forum elevated youth voices in policy discussions around governance participation, employment, and leadership development.'
  },
  {
    title: 'Who Shapes the Narrative of the Somali Regional State?',
    slug: 'who-shapes-the-narrative',
    date: '2025-06-01',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Media, Narrative, and Governance',
    excerpt:
      'A public panel explored how state communication, journalism, and digital platforms shape public trust, representation, and policy legitimacy in the region.'
  },
  {
    title: 'Forum on Media, Journalism, and Peacebuilding in the Digital Age',
    slug: 'media-journalism-peacebuilding-forum',
    date: '2025-08-15',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Media Literacy, Conflict Prevention, and Peacebuilding',
    excerpt:
      'Participants discussed misinformation risks, ethical journalism practices, and cross-sector approaches to building healthier information ecosystems.'
  },
  {
    title: 'Public Discussion on Federalism and Political Identity in Ethiopia',
    slug: 'federalism-and-political-identity',
    date: '2025-05-12',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Federalism, Identity, and Governance',
    excerpt:
      'Scholars and practitioners examined how federal arrangements influence autonomy, institutional performance, and social cohesion in the Somali Region.'
  },
  {
    title: 'Establishment and Launch of Hiraad Institute',
    slug: 'establishment-and-launch',
    date: '2024-11-20',
    location: 'Jigjiga, Somali Region, Ethiopia',
    theme: 'Institutional Development',
    excerpt:
      'Hiraad was publicly introduced as an independent think tank dedicated to evidence-based policy research, inclusive dialogue, and local knowledge production.'
  }
];

export const fallbackPublications: Publication[] = [
  {
    title: 'Policy Brief Series: Governance Reform in the Somali Region',
    slug: 'governance-reform-policy-brief-series',
    type: 'Policy Brief',
    summary:
      'Action-oriented briefs focused on transparency, service delivery, and accountable regional governance under Ethiopia\'s federal framework.',
    tags: ['Governance', 'Institutional Accountability', 'Policy Reform']
  },
  {
    title: 'Research Report: Pastoral Mobility and Livelihood Resilience',
    slug: 'pastoral-mobility-and-livelihood-resilience',
    type: 'Research Report',
    summary:
      'Field-based analysis of pastoral systems, mobility constraints, and policy options to strengthen climate-resilient livelihoods.',
    tags: ['Pastoralism', 'Livelihoods', 'Climate Adaptation']
  },
  {
    title: 'Analytical Commentary Series on Media and Public Narratives',
    slug: 'media-and-public-narratives-series',
    type: 'Commentary',
    summary:
      'Evidence-informed commentary addressing media representation, narrative contestation, and implications for governance legitimacy.',
    tags: ['Media', 'Narrative', 'Public Discourse']
  },
  {
    title: 'Forum Proceedings: Hiraad Annual Dialogue Forum (HADAF) 2025',
    slug: 'hadaf-2025-forum-proceedings',
    type: 'Forum Report',
    summary:
      'A structured record of dialogue outcomes, priority recommendations, and cross-sector consensus points from Hiraad\'s flagship annual convening.',
    tags: ['Dialogue', 'Multi-stakeholder', 'Policy Recommendations']
  },
  {
    title: 'Issue Paper: Climate Vulnerability and Local Adaptation Pathways',
    slug: 'climate-vulnerability-and-local-adaptation',
    type: 'Issue Paper',
    summary:
      'A focused synthesis on drought and flood risks, adaptation capacity, and integrated policy responses for vulnerable communities.',
    tags: ['Climate Change', 'Resilience', 'Disaster Risk Reduction']
  },
  {
    title: 'Technical Note: Research Methods for Inclusive Policy Consultation',
    slug: 'inclusive-policy-consultation-methods',
    type: 'Technical Note',
    summary:
      'Methodological guidance for designing community-centered consultations and incorporating marginalized voices into policy design.',
    tags: ['Methodology', 'Participation', 'Policy Design']
  }
];
