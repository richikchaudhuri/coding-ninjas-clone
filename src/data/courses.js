import {
  Code2,
  Binary,
  Brain,
  BarChart3,
  Trophy,
  Globe,
  Network,
  LineChart,
} from 'lucide-react'

// Single source of truth for course data. Consumed by the Home courses
// section, the /courses catalog, and the /courses/:slug detail page.

export const categories = [
  'All',
  'Full Stack',
  'Data Science',
  'DSA',
  'Machine Learning',
]

export const courses = [
  {
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    category: 'Full Stack',
    Icon: Code2,
    description:
      'Master front-end and back-end technologies. Build production-ready web apps with React, Node.js, and databases.',
    longDescription:
      'Go from writing your first line of HTML to deploying full-scale web applications. This track covers the modern JavaScript ecosystem end to end — responsive UIs with React, REST and real-time APIs with Node.js and Express, relational and NoSQL databases, authentication, and cloud deployment.',
    price: 12999,
    originalPrice: 19999,
    duration: '6 months',
    level: 'Beginner to Advanced',
    rating: 4.8,
    reviews: 3210,
    students: '45,000+',
    highlights: [
      'Build 8+ portfolio-ready full stack projects',
      'Master React, Node.js, Express & MongoDB',
      'Implement authentication, payments & deployment',
      'Crack front-end and back-end system design rounds',
      'Lifetime access to mentor support',
    ],
    curriculum: [
      {
        title: 'Web Fundamentals',
        lessons: ['HTML5 & semantic markup', 'CSS, Flexbox & Grid', 'Responsive design', 'Modern JavaScript (ES2023)'],
      },
      {
        title: 'Front-End with React',
        lessons: ['Components & hooks', 'State management', 'Routing & data fetching', 'Performance optimization'],
      },
      {
        title: 'Back-End with Node.js',
        lessons: ['Express & REST APIs', 'Databases (SQL & MongoDB)', 'Auth & security', 'Testing & error handling'],
      },
      {
        title: 'Deployment & Scale',
        lessons: ['CI/CD pipelines', 'Docker basics', 'Cloud deployment', 'Capstone project'],
      },
    ],
    instructor: {
      name: 'Arjun Mehta',
      role: 'Ex-Staff Engineer, Flipkart',
      bio: 'Arjun has shipped products used by 100M+ users and has mentored 5,000+ engineers into full stack roles.',
      initials: 'AM',
    },
  },
  {
    slug: 'data-structures-and-algorithms',
    title: 'Data Structures & Algorithms',
    category: 'DSA',
    Icon: Binary,
    description:
      'Strengthen your problem-solving skills. Cover arrays, trees, graphs, dynamic programming, and more.',
    longDescription:
      'The single most important skill for cracking tech interviews. Build deep intuition for data structures and algorithms through 400+ hand-picked problems, pattern-based learning, and live problem-solving sessions modeled on real FAANG interviews.',
    price: 9999,
    originalPrice: 15999,
    duration: '4 months',
    level: 'Beginner to Advanced',
    rating: 4.9,
    reviews: 5840,
    students: '70,000+',
    highlights: [
      'Solve 400+ curated interview problems',
      'Master every core pattern (two pointers, DP, graphs)',
      'Weekly contests & mock interviews',
      'Time & space complexity mastery',
      'Company-wise problem sheets',
    ],
    curriculum: [
      {
        title: 'Foundations',
        lessons: ['Complexity analysis', 'Arrays & strings', 'Recursion', 'Sorting & searching'],
      },
      {
        title: 'Core Structures',
        lessons: ['Linked lists', 'Stacks & queues', 'Hashing', 'Trees & BSTs'],
      },
      {
        title: 'Advanced Topics',
        lessons: ['Graphs & traversals', 'Dynamic programming', 'Greedy algorithms', 'Tries & segment trees'],
      },
      {
        title: 'Interview Prep',
        lessons: ['Pattern recognition', 'Mock interviews', 'Company sheets', 'System design intro'],
      },
    ],
    instructor: {
      name: 'Sneha Rao',
      role: 'Ex-SDE III, Amazon',
      bio: 'Sneha has conducted 1,200+ technical interviews at Amazon and specializes in turning beginners into confident problem solvers.',
      initials: 'SR',
    },
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    category: 'Machine Learning',
    Icon: Brain,
    description:
      'Learn supervised and unsupervised learning, neural networks, and real-world ML pipelines with Python.',
    longDescription:
      'A rigorous, hands-on path into machine learning. Understand the math behind the models, then implement them from scratch and with industry libraries. Cover the full lifecycle — data prep, training, evaluation, and deploying models to production.',
    price: 14999,
    originalPrice: 22999,
    duration: '6 months',
    level: 'Intermediate',
    rating: 4.7,
    reviews: 2150,
    students: '28,000+',
    highlights: [
      'Implement ML algorithms from scratch',
      'Master scikit-learn, pandas & NumPy',
      'Build & deploy 6 real-world ML projects',
      'Understand the math behind the models',
      'End-to-end ML pipeline experience',
    ],
    curriculum: [
      {
        title: 'ML Foundations',
        lessons: ['Python for ML', 'Linear algebra & stats', 'Data preprocessing', 'Feature engineering'],
      },
      {
        title: 'Supervised Learning',
        lessons: ['Regression', 'Classification', 'Decision trees & ensembles', 'Model evaluation'],
      },
      {
        title: 'Unsupervised Learning',
        lessons: ['Clustering', 'Dimensionality reduction', 'Anomaly detection', 'Recommendation systems'],
      },
      {
        title: 'Productionizing ML',
        lessons: ['Model deployment', 'MLOps basics', 'Capstone project', 'Career guidance'],
      },
    ],
    instructor: {
      name: 'Dr. Vikram Iyer',
      role: 'ML Scientist, Ex-Google Brain',
      bio: 'Vikram holds a PhD in ML and has published at NeurIPS. He makes complex theory click for thousands of learners.',
      initials: 'VI',
    },
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'Data Science',
    Icon: BarChart3,
    description:
      'Dive into statistics, data wrangling, visualization, and predictive modeling using Python and SQL.',
    longDescription:
      'Become a data professional who can turn raw data into business decisions. This track blends statistics, programming, and storytelling — from cleaning messy datasets to building dashboards and predictive models that stakeholders trust.',
    price: 13499,
    originalPrice: 20999,
    duration: '5 months',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviews: 2980,
    students: '32,000+',
    highlights: [
      'Master Python, pandas, SQL & Tableau',
      'Run real statistical analyses',
      'Build interactive dashboards',
      'Complete 5 industry case studies',
      'Portfolio reviewed by mentors',
    ],
    curriculum: [
      {
        title: 'Data Toolkit',
        lessons: ['Python & Jupyter', 'NumPy & pandas', 'SQL for analytics', 'Data cleaning'],
      },
      {
        title: 'Statistics & Analysis',
        lessons: ['Descriptive stats', 'Probability', 'Hypothesis testing', 'A/B testing'],
      },
      {
        title: 'Visualization',
        lessons: ['Matplotlib & Seaborn', 'Tableau dashboards', 'Storytelling with data', 'Reporting'],
      },
      {
        title: 'Predictive Modeling',
        lessons: ['Regression models', 'Forecasting', 'Capstone case study', 'Interview prep'],
      },
    ],
    instructor: {
      name: 'Priya Nair',
      role: 'Lead Data Scientist, Swiggy',
      bio: 'Priya builds models that power decisions for millions of orders daily and loves teaching the craft of data storytelling.',
      initials: 'PN',
    },
  },
  {
    slug: 'competitive-programming',
    title: 'Competitive Programming',
    category: 'DSA',
    Icon: Trophy,
    description:
      'Sharpen your coding speed and accuracy. Practice with contest-level problems and advanced algorithms.',
    longDescription:
      'Train like a competitive programmer. Move beyond standard interview prep into the world of timed contests, advanced data structures, and elegant algorithmic thinking that sets the top 1% apart on Codeforces, CodeChef, and ICPC.',
    price: 8999,
    originalPrice: 13999,
    duration: '3 months',
    level: 'Intermediate to Advanced',
    rating: 4.7,
    reviews: 1420,
    students: '15,000+',
    highlights: [
      'Climb to Codeforces Expert and beyond',
      'Master advanced algorithms & math',
      'Weekly rated contests & editorials',
      'Speed-coding drills',
      'ICPC-style team practice',
    ],
    curriculum: [
      {
        title: 'Contest Foundations',
        lessons: ['Fast I/O & templates', 'Time management', 'Number theory', 'Combinatorics'],
      },
      {
        title: 'Advanced Structures',
        lessons: ['Segment trees', 'Fenwick trees', 'Disjoint set union', 'Sparse tables'],
      },
      {
        title: 'Hard Algorithms',
        lessons: ['Advanced DP', 'Graph algorithms', 'String algorithms', 'Game theory'],
      },
      {
        title: 'Contest Mastery',
        lessons: ['Virtual contests', 'Upsolving strategy', 'Editorial breakdowns', 'Final rated contest'],
      },
    ],
    instructor: {
      name: 'Karthik Reddy',
      role: 'ICPC World Finalist',
      bio: 'Karthik is a Codeforces Grandmaster and ICPC World Finalist who has coached multiple national-level contest winners.',
      initials: 'KR',
    },
  },
  {
    slug: 'web-development-with-mern',
    title: 'Web Development with MERN',
    category: 'Full Stack',
    Icon: Globe,
    description:
      'Build modern web applications using MongoDB, Express, React, and Node.js from scratch.',
    longDescription:
      'A focused, project-first MERN bootcamp. Ship four complete applications — a social feed, an e-commerce store, a real-time chat app, and a SaaS dashboard — while learning the patterns that make MERN apps fast, secure, and maintainable.',
    price: 10999,
    originalPrice: 16999,
    duration: '4 months',
    level: 'Beginner to Intermediate',
    rating: 4.6,
    reviews: 1890,
    students: '24,000+',
    highlights: [
      'Ship 4 complete MERN applications',
      'Real-time features with WebSockets',
      'Stripe payments & JWT auth',
      'State management at scale',
      'Deploy to the cloud',
    ],
    curriculum: [
      {
        title: 'MERN Setup',
        lessons: ['Node & npm ecosystem', 'Express server', 'MongoDB & Mongoose', 'REST API design'],
      },
      {
        title: 'React Front-End',
        lessons: ['Component architecture', 'Hooks & context', 'Forms & validation', 'API integration'],
      },
      {
        title: 'Full Stack Features',
        lessons: ['Authentication', 'File uploads', 'Real-time chat', 'Payments'],
      },
      {
        title: 'Ship It',
        lessons: ['Testing', 'Deployment', 'Performance', 'Capstone SaaS app'],
      },
    ],
    instructor: {
      name: 'Rohit Sharma',
      role: 'Senior Engineer, Razorpay',
      bio: 'Rohit has built payment infrastructure at scale and loves turning beginners into job-ready MERN developers.',
      initials: 'RS',
    },
  },
  {
    slug: 'deep-learning-and-neural-networks',
    title: 'Deep Learning & Neural Networks',
    category: 'Machine Learning',
    Icon: Network,
    description:
      'Go deep into neural networks, CNNs, RNNs, and transformers. Build and train models with PyTorch.',
    longDescription:
      'Take your ML skills to the cutting edge. Understand and build the neural architectures behind modern AI — from convolutional networks for vision to transformers for language — and train them efficiently with PyTorch on real datasets.',
    price: 16999,
    originalPrice: 24999,
    duration: '5 months',
    level: 'Advanced',
    rating: 4.8,
    reviews: 1260,
    students: '12,000+',
    highlights: [
      'Build CNNs, RNNs & transformers from scratch',
      'Master PyTorch & GPU training',
      'Work with vision and NLP datasets',
      'Fine-tune pre-trained models',
      'Deploy deep learning models',
    ],
    curriculum: [
      {
        title: 'Neural Network Basics',
        lessons: ['Perceptrons & backprop', 'Activation functions', 'Optimization', 'Regularization'],
      },
      {
        title: 'Computer Vision',
        lessons: ['Convolutional networks', 'Image classification', 'Transfer learning', 'Object detection'],
      },
      {
        title: 'Sequence Models',
        lessons: ['RNNs & LSTMs', 'Attention', 'Transformers', 'NLP tasks'],
      },
      {
        title: 'Applied Deep Learning',
        lessons: ['Model deployment', 'Generative models', 'Capstone project', 'Research directions'],
      },
    ],
    instructor: {
      name: 'Dr. Ananya Das',
      role: 'AI Researcher, Ex-DeepMind',
      bio: 'Ananya has worked on state-of-the-art models and breaks down deep learning into clear, buildable steps.',
      initials: 'AD',
    },
  },
  {
    slug: 'python-for-data-science',
    title: 'Python for Data Science',
    category: 'Data Science',
    Icon: LineChart,
    description:
      'Start your data journey with Python. Learn pandas, NumPy, visualization, and exploratory analysis.',
    longDescription:
      'The perfect on-ramp into data science. No prior programming required — you will learn Python from the ground up with a relentless focus on real datasets, building the analysis and visualization skills every data role demands.',
    price: 6999,
    originalPrice: 10999,
    duration: '3 months',
    level: 'Beginner',
    rating: 4.7,
    reviews: 3420,
    students: '38,000+',
    highlights: [
      'Learn Python with zero prerequisites',
      'Master pandas & NumPy hands-on',
      'Create compelling visualizations',
      'Run end-to-end exploratory analysis',
      'Build a data portfolio project',
    ],
    curriculum: [
      {
        title: 'Python Essentials',
        lessons: ['Syntax & data types', 'Control flow', 'Functions', 'Working with files'],
      },
      {
        title: 'Data Wrangling',
        lessons: ['NumPy arrays', 'pandas DataFrames', 'Cleaning data', 'Merging & grouping'],
      },
      {
        title: 'Exploration & Viz',
        lessons: ['Matplotlib', 'Seaborn', 'Exploratory analysis', 'Insight storytelling'],
      },
      {
        title: 'Capstone',
        lessons: ['Choose a dataset', 'Full analysis', 'Presentation', 'Next steps'],
      },
    ],
    instructor: {
      name: 'Meera Joshi',
      role: 'Data Analyst, Zomato',
      bio: 'Meera switched careers into data herself and now helps thousands of beginners take their first confident steps.',
      initials: 'MJ',
    },
  },
]

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug)
}

export function formatPrice(value) {
  return '₹' + value.toLocaleString('en-IN')
}
