/* ════════════════════════════════════════════════════════════════
   SINGLE SOURCE OF TRUTH — all site content.
   Real coach details preserved from the original brand profile.
   ════════════════════════════════════════════════════════════════ */

export const coach = {
  name: 'Mohamed Ayman Yakhmim',
  shortName: 'Coach Ayman',
  title: 'Online Coach',
  tagline: 'Exercise Science · Nutrition · Transformation',
  email: 'aymanyakhmim1@gmail.com',
  phone: '+212 707072662',
  phoneHref: 'tel:+212707072662',
  whatsapp: 'https://wa.me/212707072662',
  location: 'Online Coaching — Worldwide',
  languages: ['English', 'Arabic', 'French'],
  photo: '/hero.jpg',
  socials: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com',
  },
  /* Verbatim brand copy preserved from the coach profile */
  about:
    "Committed to guiding individuals on their journey to optimal health and well-being. Armed with a background in Exercise Science, I leverage my expertise to provide personalized and results-driven coaching experiences. My online coaching approach extends beyond physical fitness, incorporating tailored training programs and nutrition guidance to ensure comprehensive well-being — with a strong emphasis on effective communication and motivational strategies.",
  experience:
    "My success as an online coach is rooted in a client-centric approach. I understand that each individual is unique, and I take pride in crafting personalized training programs and nutrition guidance to meet diverse goals. Through virtual sessions and constant communication, I've fostered a collaborative and empowering environment — resulting in the satisfaction of more than 220 clients.",
  nutritionPhilosophy:
    "I specialize in crafting personalized meal plans that cater to the unique needs and preferences of each family member. Through virtual consultations, I collaborate with families to design weekly meal plans that are not only nutritionally sound but also practical and enjoyable. By emphasizing balance and variety, I empower people to adopt healthier eating habits that last.",
  skills: [
    'Online Coaching',
    'Program Design',
    'Client Motivation',
    'Nutrition Guidance',
    'Communication',
    'Time Management',
    'Goal Setting',
    'Social Media Marketing',
  ],
  certifications: [
    {
      title: 'NASM Nutrition Essentials',
      issuer: 'National Academy of Sports Medicine',
    },
    {
      title: 'Healthy Practices Certification',
      issuer: 'Nutrition, Physical Activity & Family Participation',
    },
    {
      title: 'Exercise Science Background',
      issuer: 'Foundational academic training',
    },
  ],
};

/* ── SECTION 2 — Social proof counters ─────────────────── */
export const stats = [
  { value: 220, suffix: '+', label: 'Clients Coached' },
  { value: 180, suffix: '+', label: 'Transformations' },
  { value: 12, suffix: 'k', label: 'Total Kg Lost' },
  { value: 9, suffix: '', label: 'Countries Served' },
  { value: 5, suffix: '+', label: 'Years Coaching' },
];

/* ── SECTION 3 — Client transformations ────────────────── */
export type Goal =
  | 'Fat Loss'
  | 'Muscle Gain'
  | 'Recomposition'
  | "Men's"
  | "Women's";

export interface Transformation {
  id: string;
  name: string;
  age: number;
  goals: Goal[];
  result: string;
  duration: string;
  quote: string;
  gender: 'men' | 'women';
}

export const transformations: Transformation[] = [
  {
    id: 't1',
    name: 'Yassine K.',
    age: 31,
    goals: ['Fat Loss', "Men's"],
    result: '−18 kg',
    duration: '20 weeks',
    quote:
      'I had tried everything. Ayman built a plan around my work schedule and for the first time it actually stuck. Down 18 kilos and stronger than ever.',
    gender: 'men',
  },
  {
    id: 't2',
    name: 'Sara M.',
    age: 28,
    goals: ['Recomposition', "Women's"],
    result: '−9 kg · +Tone',
    duration: '16 weeks',
    quote:
      'The weekly check-ins kept me honest. I dropped fat, kept my curves, and built real confidence in the gym.',
    gender: 'women',
  },
  {
    id: 't3',
    name: 'Omar B.',
    age: 35,
    goals: ['Muscle Gain', "Men's"],
    result: '+11 kg lean',
    duration: '24 weeks',
    quote:
      'Progressive overload tracking changed the game. Every week had a purpose. I finally built the frame I always wanted.',
    gender: 'men',
  },
  {
    id: 't4',
    name: 'Imane T.',
    age: 24,
    goals: ['Fat Loss', "Women's"],
    result: '−14 kg',
    duration: '18 weeks',
    quote:
      'The nutrition plan had real meals I actually enjoy — even restaurant options. It never felt like a diet.',
    gender: 'women',
  },
  {
    id: 't5',
    name: 'Karim L.',
    age: 42,
    goals: ['Recomposition', "Men's"],
    result: '−12 kg · +Strength',
    duration: '22 weeks',
    quote:
      'At 42 with a bad shoulder, I thought my best days were behind me. Ayman proved me wrong. Pain-free and leaner than my twenties.',
    gender: 'men',
  },
  {
    id: 't6',
    name: 'Lina F.',
    age: 33,
    goals: ['Muscle Gain', "Women's"],
    result: '+6 kg lean',
    duration: '20 weeks',
    quote:
      'I wanted to get strong, not skinny. The accountability and the app made me feel coached every single day.',
    gender: 'women',
  },
];

/* ── SECTION 4 — How it works ──────────────────────────── */
export const steps = [
  {
    n: '01',
    title: 'Apply',
    text: 'Tell me about your goals, lifestyle and schedule through a short application. I only take clients I know I can deliver results for.',
  },
  {
    n: '02',
    title: 'Complete Your Assessment',
    text: 'A deep-dive on your training history, injuries, nutrition habits and obstacles — so your plan fits your real life, not a template.',
  },
  {
    n: '03',
    title: 'Receive Your Custom Plan',
    text: 'A fully personalized training and nutrition system with macros, meal options, exercise demos and progression built for your body.',
  },
  {
    n: '04',
    title: 'Weekly Accountability',
    text: 'Structured check-ins, progress reviews and direct messaging. We adjust every week based on your data, not guesswork.',
  },
  {
    n: '05',
    title: 'Transform',
    text: 'Compound the wins. Build habits that last for life and become the strongest, leanest version of yourself.',
  },
];

/* ── SECTION 5 — What's included ───────────────────────── */
export const included = [
  {
    title: 'Custom Training Program',
    icon: 'dumbbell',
    points: [
      'Exercise selection for your body & equipment',
      'Progressive overload tracking',
      'HD video demonstrations',
    ],
  },
  {
    title: 'Custom Nutrition Plan',
    icon: 'leaf',
    points: [
      'Calories & macros dialed to your goal',
      'Flexible meal options you enjoy',
      'Restaurant & travel alternatives',
    ],
  },
  {
    title: 'Accountability Coaching',
    icon: 'chart',
    points: [
      'Weekly structured check-ins',
      'Data-driven progress reviews',
      'Habit & consistency tracking',
    ],
  },
  {
    title: 'Private Support',
    icon: 'chat',
    points: [
      'Direct messaging with your coach',
      'Fast, thoughtful response times',
      'Real problem-solving when life happens',
    ],
  },
];

/* ── SECTION 7 — Testimonials ──────────────────────────── */
export const testimonials = [
  {
    name: 'Yassine K.',
    role: 'Lost 18 kg · Marketing Director',
    quote:
      "Ayman is the first coach who treated me like a person, not a number. The plan flexed around 60-hour work weeks and I still got the best results of my life.",
    rating: 5,
  },
  {
    name: 'Sara M.',
    role: 'Body Recomposition · Pharmacist',
    quote:
      'Professional, responsive and genuinely invested. The weekly reviews kept me accountable in a way no app ever could.',
    rating: 5,
  },
  {
    name: 'Omar B.',
    role: 'Gained 11 kg lean · Entrepreneur',
    quote:
      'Worth every dirham. I came for a physique and left with discipline that bleeds into every part of my business.',
    rating: 5,
  },
  {
    name: 'Imane T.',
    role: 'Lost 14 kg · Teacher',
    quote:
      "I finally understand food instead of fearing it. This wasn't a diet — it was an education that stuck.",
    rating: 5,
  },
];

/* ── SECTION 9 — Pricing ───────────────────────────────── */
export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  featured: boolean;
  features: string[];
  cta: string;
}

export const plans: Plan[] = [
  {
    id: 'nutrition',
    name: 'Nutrition Only',
    tagline: 'For those who train but need their diet solved.',
    price: '$99',
    period: '/ month',
    featured: false,
    cta: 'Start with Nutrition',
    features: [
      'Custom calorie & macro targets',
      'Flexible meal plan & food list',
      'Restaurant & travel guidance',
      'Bi-weekly nutrition check-ins',
      'Direct messaging support',
    ],
  },
  {
    id: 'transformation',
    name: 'VIP Transformation',
    tagline: 'The complete done-for-you coaching experience.',
    price: '$249',
    period: '/ month',
    featured: true,
    cta: 'Apply for VIP',
    features: [
      'Everything in Training + Nutrition',
      'Priority direct line to Coach Ayman',
      'Weekly 1-on-1 video coaching calls',
      'Form-check video reviews',
      'Habit & lifestyle coaching',
      'Quarterly plan re-engineering',
    ],
  },
  {
    id: 'training',
    name: 'Training + Nutrition',
    tagline: 'The full system: train smart, eat right, stay accountable.',
    price: '$169',
    period: '/ month',
    featured: false,
    cta: 'Get the Full System',
    features: [
      'Custom training program + video library',
      'Progressive overload tracking',
      'Full custom nutrition plan',
      'Weekly accountability check-ins',
      'Direct messaging support',
      'Members app access',
    ],
  },
];

/* ── SECTION 8 — App preview features ──────────────────── */
export const appFeatures = [
  { title: 'Workout Tracker', text: 'Log every set, rep and weight. Watch progressive overload happen in real time.' },
  { title: 'Nutrition Tracker', text: 'Hit your macros effortlessly with a built-in food database and meal logging.' },
  { title: 'Progress Photos', text: 'Side-by-side comparisons that reveal the change the scale can’t.' },
  { title: 'Messaging', text: 'Your coach in your pocket. Ask anything, anytime, get real answers.' },
  { title: 'Weekly Check-ins', text: 'Submit your data in two minutes and get a personalized plan adjustment.' },
];

/* ── SECTION 10 — FAQ ──────────────────────────────────── */
export const faqs = [
  {
    q: "I don't have much time — will this work for me?",
    a: 'This is built for busy professionals. Your training is engineered for your available days and equipment, and your nutrition flexes around your real schedule — including travel and restaurants. Most clients train 3–4 focused sessions a week.',
  },
  {
    q: 'Is coaching worth the investment?',
    a: 'You are investing in a system, accountability and expertise that compress years of trial-and-error into months of results. Most clients tell me the only regret they have is not starting sooner.',
  },
  {
    q: 'I’m over 40 — am I too old to change?',
    a: "Absolutely not. Some of my best transformations are clients in their 40s and 50s. Your plan accounts for recovery, joints and hormones so you progress safely and sustainably.",
  },
  {
    q: 'I have an old injury. Can I still train?',
    a: 'Yes. Your assessment captures every limitation and your program is designed around it — building strength and resilience without aggravating the issue. When needed, we adjust together.',
  },
  {
    q: 'I’m a complete beginner. Will I keep up?',
    a: 'Beginners often see the fastest results. Every exercise comes with video demonstrations and your plan starts exactly where you are. You will never be left guessing.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients notice changes within the first 2–3 weeks and visible transformation by week 8. Sustainable, lasting results come from consistency — and that’s exactly what the accountability system is built to protect.',
  },
];

/* ── Navigation ────────────────────────────────────────── */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/transformations', label: 'Results' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];
