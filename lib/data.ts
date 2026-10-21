export type Category = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
};

export type Author = {
  id: string;
  name: string;
  username: string;
  role: string;
  skills: string[];
  avatar: string;
  experience: string;
  followers: number;
  bio: string;
};

export type Discussion = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  authorId: string;
  createdAt: string;
  views: number;
  likes: number;
  bookmarks: number;
  comments: number;
  isSolved: boolean;
  acceptedAnswerId?: string;
};

export type CommentItem = {
  id: string;
  discussionId: string;
  authorId: string;
  body: string;
  createdAt: string;
  likes: number;
  isAccepted?: boolean;
};

export type NotificationItem = {
  id: string;
  type: 'reply' | 'mention' | 'follow' | 'like' | 'badge';
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

export const categories: Category[] = [
  {
    id: 'programming',
    name: 'Programming & Debugging',
    description: 'Solve bugs, architecture questions, and code reviews.',
    color: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/30',
    icon: '⌨️'
  },
  {
    id: 'web-dev',
    name: 'Web & App Development',
    description: 'Frontend frameworks, backend APIs, and project design.',
    color: 'bg-violet-500/15 text-violet-200 border-violet-500/30',
    icon: '🌐'
  },
  {
    id: 'ai',
    name: 'AI & Emerging Tech',
    description: 'LLMs, automation, product experimentation, and more.',
    color: 'bg-indigo-500/15 text-indigo-200 border-indigo-500/30',
    icon: '🤖'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Secure systems, threat modeling, and safer coding practices.',
    color: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30',
    icon: '🛡️'
  },
  {
    id: 'career',
    name: 'Career Guidance',
    description: 'Career growth, interview prep, and hiring patterns.',
    color: 'bg-amber-500/15 text-amber-100 border-amber-500/30',
    icon: '💼'
  },
  {
    id: 'education',
    name: 'Tech Education',
    description: 'Learning resources, study plans, and student support.',
    color: 'bg-pink-500/15 text-pink-100 border-pink-500/30',
    icon: '🎓'
  }
];

export const authors: Author[] = [
  {
    id: 'u1',
    name: 'Ava Chen',
    username: 'ava-chen',
    role: 'Senior Frontend Engineer',
    skills: ['React', 'TypeScript', 'Design Systems'],
    avatar: 'AC',
    experience: '8+ years',
    followers: 1460,
    bio: 'Designing resilient interfaces and helping early-career engineers grow through practical product work.',
  },
  {
    id: 'u2',
    name: 'Mateo Ruiz',
    username: 'mateo-ruiz',
    role: 'Security Engineer',
    skills: ['Cybersecurity', 'Cloud', 'DevSecOps'],
    avatar: 'MR',
    experience: '6+ years',
    followers: 980,
    bio: 'Focused on secure architecture patterns, threat modeling, and developer education.',
  },
  {
    id: 'u3',
    name: 'Nia Okafor',
    username: 'nia-okafor',
    role: 'AI Product Lead',
    skills: ['AI', 'ML', 'Product Strategy'],
    avatar: 'NO',
    experience: '7+ years',
    followers: 1240,
    bio: 'Helping teams ship meaningful AI features while balancing product, quality, and user trust.',
  },
  {
    id: 'u4',
    name: 'Leo Park',
    username: 'leo-park',
    role: 'Full Stack Developer',
    skills: ['Node.js', 'Supabase', 'Next.js'],
    avatar: 'LP',
    experience: '5+ years',
    followers: 850,
    bio: 'Interested in clean architecture, developer productivity, and building friendly user experiences.',
  }
];

export const discussions: Discussion[] = [
  {
    id: 'd1',
    title: 'How do you structure a React app for scale without losing developer velocity?',
    excerpt: 'We are moving from a small project into a multi-team codebase and need a pattern that keeps product delivery fast while still maintainable.',
    content: 'Our team is growing quickly and the app has started to feel chaotic. We need a pattern that helps us organize routes, shared logic, API layers, and design patterns without over-engineering. I would love to hear examples of folder structure, feature slicing, and how you keep ownership clear across the frontend.',
    category: 'web-dev',
    tags: ['react', 'architecture', 'frontend'],
    authorId: 'u1',
    createdAt: '2 hours ago',
    views: 1820,
    likes: 248,
    bookmarks: 74,
    comments: 18,
    isSolved: true,
    acceptedAnswerId: 'c2'
  },
  {
    id: 'd2',
    title: 'Best way to reduce API latency in a Next.js app that uses Supabase?',
    excerpt: 'We are seeing slow page loads in production and want to improve cold start reliability and data fetching strategy.',
    content: 'Our app loads a lot of dashboard content from Supabase and the initial render feels slower than expected. We are debating edge caching, selective queries, RLS, and server components. Has anybody found a reliable pattern?',
    category: 'programming',
    tags: ['nextjs', 'supabase', 'performance'],
    authorId: 'u4',
    createdAt: '5 hours ago',
    views: 960,
    likes: 150,
    bookmarks: 42,
    comments: 12,
    isSolved: false
  },
  {
    id: 'd3',
    title: 'How should beginners prepare for product-focused AI interviews?',
    excerpt: 'I want to understand what companies specifically look for when they ask about LLM, evaluation, or AI product trade-offs.',
    content: 'I am interviewing for AI product roles and I want to go beyond general AI knowledge. Looking for clarity on what interviewers care about when they ask about prompting, model evaluation, metrics, hallucinations, experimentation, and end-user trust.',
    category: 'ai',
    tags: ['ai', 'interviews', 'career'],
    authorId: 'u3',
    createdAt: '1 day ago',
    views: 2210,
    likes: 334,
    bookmarks: 89,
    comments: 23,
    isSolved: true,
    acceptedAnswerId: 'c1'
  },
  {
    id: 'd4',
    title: 'What are realistic practices for handling auth and permissions in a growing SaaS app?',
    excerpt: 'We need a secure model that scales from a small app to a more complex multi-role product without frequent refactors.',
    content: 'We are moving from a single-user internal app to a multi-tenant SaaS platform. We are thinking through roles, teams, data ownership, and how to keep permissions easy to debug. I want examples of patterns that have held up well in production.',
    category: 'security',
    tags: ['auth', 'permissions', 'saas'],
    authorId: 'u2',
    createdAt: '2 days ago',
    views: 1400,
    likes: 201,
    bookmarks: 61,
    comments: 16,
    isSolved: false
  },
  {
    id: 'd5',
    title: 'How do you stay motivated while learning multiple tech stacks as a student?',
    excerpt: 'I feel like I am jumping across web, cloud, AI, and security topics and I need a strategy to stay focused.',
    content: 'I am a computer science student and there are so many interesting things to learn. The challenge is not the lack of interest — it is choosing what to focus on at each stage and building momentum without feeling overwhelmed.',
    category: 'education',
    tags: ['student', 'learning', 'study'],
    authorId: 'u4',
    createdAt: '3 days ago',
    views: 1100,
    likes: 174,
    bookmarks: 52,
    comments: 21,
    isSolved: true,
    acceptedAnswerId: 'c3'
  },
  {
    id: 'd6',
    title: 'What should a junior developer include in their portfolio for remote roles?',
    excerpt: 'I want to make my project portfolio more compelling without overbuilding random side projects.',
    content: 'I am building my portfolio for remote software roles. I want to highlight problem solving, shipping, impact, and depth instead of just listing tools. Are there specific project patterns or storytelling techniques that recruiters care about?',
    category: 'career',
    tags: ['portfolio', 'jobs', 'junior'],
    authorId: 'u1',
    createdAt: '4 days ago',
    views: 880,
    likes: 162,
    bookmarks: 48,
    comments: 14,
    isSolved: false
  }
];

export const comments: CommentItem[] = [
  {
    id: 'c1',
    discussionId: 'd3',
    authorId: 'u1',
    body: 'I would separate AI interview prep into three buckets: fundamentals, product judgment, and communication. Be ready to explain model trade-offs, evaluation loops, and the difference between offline quality and real-world user impact.',
    createdAt: '1 hour ago',
    likes: 18,
    isAccepted: true
  },
  {
    id: 'c2',
    discussionId: 'd1',
    authorId: 'u4',
    body: 'The pattern that worked for us was feature-based folders, a shared domain layer, and strict ownership boundaries. We keep UI, hooks, and server calls in the same feature module until they are clearly reused across the app.',
    createdAt: '38 minutes ago',
    likes: 26,
    isAccepted: true
  },
  {
    id: 'c3',
    discussionId: 'd5',
    authorId: 'u2',
    body: 'I would design a learning roadmap around a single goal for each month and one “proof of skill” project. For students, the key is consistency and visible outcomes, not collecting everything at once.',
    createdAt: '22 minutes ago',
    likes: 14,
    isAccepted: true
  },
  {
    id: 'c4',
    discussionId: 'd1',
    authorId: 'u3',
    body: 'We also found that strong conventions for naming, state boundaries, and API contracts save a lot of pain. A small ruleset is better than a heavier framework decision that nobody actually follows.',
    createdAt: '3 hours ago',
    likes: 11
  }
];

export const notifications: NotificationItem[] = [
  {
    id: 'n1',
    type: 'reply',
    title: 'New reply on “Best way to reduce API latency in a Next.js app?”',
    message: 'Ava Chen replied with a practical caching approach for Supabase-backed dashboards.',
    time: '12 minutes ago',
    unread: true
  },
  {
    id: 'n2',
    type: 'mention',
    title: 'You were mentioned in a comment',
    message: 'Leo Park asked for your perspective on auth patterns in multi-role products.',
    time: '1 hour ago',
    unread: true
  },
  {
    id: 'n3',
    type: 'follow',
    title: 'New follower',
    message: 'Nia Okafor started following your profile.',
    time: '4 hours ago',
    unread: false
  },
  {
    id: 'n4',
    type: 'like',
    title: 'Your answer was appreciated',
    message: 'Your comment on AI interview prep received 18 likes.',
    time: 'Yesterday',
    unread: false
  }
];

export function getAuthorById(id: string) {
  return authors.find((author) => author.id === id) ?? authors[0];
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id) ?? categories[0];
}

export function getDiscussionById(id: string) {
  return discussions.find((discussion) => discussion.id === id) ?? discussions[0];
}
