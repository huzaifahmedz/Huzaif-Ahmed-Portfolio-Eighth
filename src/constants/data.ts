// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string
  name: string
  initials: string
  avatar?: {
    asset?: {
      url?: string
    }
  }
  description?: string
  summary?: string
  location?: string
  skills?: string[]
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
    youtube?: string
    email?: string
  }
}

export interface Project {
  _id: string
  title: string
  description: string
  shortDescription: string
  technologies?: string[]
  tags?: string[]
  image?: {
    asset?: {
      url?: string
    }
  }
  heroImage?: string
  githubLink?: string | null
  previewUrl?: string | null
  slug?: string
  content?: any // For Lexical content if needed
}

// Portfolio data
export const AUTHOR: Author = {
  _id: 'author-1',
  name: 'Huzaif Ahmed',
  initials: 'HA',
  avatar: {
    asset: {
      url: 'https://i.pinimg.com/736x/45/c9/30/45c930089bd6991ac39e475423a1bb61.jpg',
    },
  },
  description: 'I build web that builds brands.',
  summary:
    "I'm a full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. I love creating modern, responsive web applications with a focus on user experience and performance. Currently working as a Frontend Developer at SelectSkillSet, I bring experience from my previous role as a Full Stack Developer at Tekisky.",
  location: 'India',
  skills: [
    'Next.js 15',
    'React',
    'TailwindCSS',
    'JavaScript',
    'Framer Motion',
    'Node.js',
    'MongoDB',
    'Express.js',
    'VS Code',
    'Postman',
    'Photoshop',
    'Git',
  ],
  social: {
    github: 'https://github.com/huzaifahmedz',
    email: 'dev.huzaif@gmail.com',
  },
}

// Projects data - Only 3 projects with same images from portfolio-11
export const PROJECTS: Project[] = [
  {
    _id: 'project-1',
    title: 'AI-Powered Code Review Assistant',
    description:
      'An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.',
    shortDescription:
      'An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, and suggest optimizations.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: {
      asset: {
        url: '/projects/project-1.webp',
      },
    },
    heroImage: '/projects/project-1.webp',
    githubLink: '#',
    previewUrl: '#',
    slug: 'ai-powered-code-review-assistant',
  },
  {
    _id: 'project-2',
    title: 'Real-time Collaborative Whiteboard',
    description:
      'A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.',
    shortDescription:
      'A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools.',
    technologies: ['TypeScript', 'WebRTC', 'Socket.io', 'Canvas API', 'Node.js', 'Redis'],
    tags: ['TypeScript', 'WebRTC', 'Socket.io', 'Canvas API', 'Node.js', 'Redis'],
    image: {
      asset: {
        url: '/projects/project-2.webp',
      },
    },
    heroImage: '/projects/project-2.webp',
    githubLink: '#',
    previewUrl: '#',
    slug: 'real-time-collaborative-whiteboard',
  },
  {
    _id: 'project-3',
    title: 'Blockchain Voting System',
    description:
      'A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.',
    shortDescription:
      'A secure, transparent, and decentralized voting platform built on Ethereum with smart contract-based voting and real-time tracking.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    image: {
      asset: {
        url: '/projects/project-3.webp',
      },
    },
    heroImage: '/projects/project-3.webp',
    githubLink: '#',
    previewUrl: '#',
    slug: 'blockchain-voting-system',
  },
]

