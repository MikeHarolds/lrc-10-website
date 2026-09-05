/**
 * LRC 10.0 — single source of truth for all conference content.
 *
 * Content confirmed by the "LRC 10.0 - Landing Page Details" document is used as-is.
 * Items still awaiting client input are marked `placeholder: true` and/or noted in
 * comments so they can be swapped without touching component logic.
 */

export const site = {
  name: "Leadership Rebirth Conference 10.0",
  shortName: "LRC 10.0",
  organiser: "ImpactField",
  organiserTagline: "Empower change, one act of kindness at a time.",
  url: "https://lrc.impactfield.com.ng",
  tagline: "10 Years of Raising Leaders. One Bold Call to Shift the Culture.",
  description:
    "Leadership Rebirth Conference 10.0 by ImpactField. Two days in Enugu where leaders, ministers, entrepreneurs, innovators and families gather to shift the culture — from mediocrity to excellence — across Family, Faith, Business, Leadership and Technology.",
  contactPhone: "+2349076948741",
  contactPhoneHref: "tel:+2349076948741",
  // ImpactField organisation contacts (impactfield.com.ng)
  orgPhone: "+2348104433169",
  orgPhoneHref: "tel:+2348104433169",
  orgEmail: "ask.impactfield@gmail.com",
} as const;

export const links = {
  register: "https://events.impactfield.com.ng/events/6a8180a24b07e134cadceea1",
  higherTicket:
    "https://events.impactfield.com.ng/events/6a8180a24b07e134cadceea1?tier=paid",
  partner: "https://wa.link/966ytg",
  anniversary: "https://impactfield.com.ng/10th",
  impactfield: "https://impactfield.com.ng",
  impactfieldEvents: "https://events.impactfield.com.ng",
  volunteer: "https://volunteers.impactfield.com.ng",
} as const;

/** ImpactField parent-site navigation — keeps the LRC page inside the ecosystem. */
export const parentNav = [
  { label: "ImpactField Home", href: "https://impactfield.com.ng" },
  { label: "About Us", href: "https://impactfield.com.ng/about-us/" },
  { label: "Our Programmes", href: "https://impactfield.com.ng/programmes/" },
  { label: "Blog", href: "https://impactfield.com.ng/blog/" },
  { label: "Contact Us", href: "https://impactfield.com.ng/contact-us/" },
];

/** Primary calls to action, reused across hero, event details and final CTA. */
export const ctas = [
  {
    label: "Register Now",
    sublabel: "Secure your spot",
    href: links.register,
    variant: "primary" as const,
    icon: "register" as const,
  },
  {
    label: "Get a Higher Ticket",
    sublabel: "Unlock premium access",
    href: links.higherTicket,
    variant: "secondary" as const,
    icon: "ticket" as const,
  },
  {
    label: "Become a Partner",
    sublabel: "Let's build together",
    href: links.partner,
    variant: "tertiary" as const,
    icon: "partner" as const,
  },
];

/** On-page section nav for the LRC 10.0 experience. */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Program", href: "#program" },
  { label: "Tickets", href: "#tickets" },
  { label: "Partner", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  kicker: "10 Years of Raising Leaders",
  titleLines: ["Leadership Rebirth", "Conference 10.0"],
  themeLine: "Shifting the Culture",
  lead: site.tagline,
  body: [
    "This October, leaders, thinkers, business owners, ministers, innovators, families and change-makers converge in Enugu for two days that will not just inspire you, but shift the very culture you carry into your Family, your Faith, your Business, your Leadership and your Tech space.",
    "We invite you for this powerful experience of learning, connection, inspiration and action.",
  ],
};

/**
 * Event schedule. Source: LRC 10.0 document (FAQ + brief).
 * De Base Landmark, Independence Layout, Enugu.
 * Day 1 — 31 Oct 2026 from 10:00am. Day 2 — 1 Nov 2026 from 2:00pm.
 */
export const event = {
  dateLabel: "31 October – 1 November 2026",
  dateShort: "Oct 31 – Nov 1, 2026",
  days: [
    { date: "Saturday, 31 October 2026", time: "From 10:00 AM" },
    { date: "Sunday, 1 November 2026", time: "From 2:00 PM" },
  ],
  timeLabel: "Day 1 from 10:00 AM · Day 2 from 2:00 PM",
  venue: "De Base Landmark",
  address: "Independence Layout, Enugu, Nigeria",
  /** ISO target for the countdown — Day 1, 10:00 AM WAT (UTC+1). */
  startsAt: "2026-10-31T10:00:00+01:00",
  mapQuery: "De Base Landmark, Independence Layout, Enugu",
};

export const about = {
  eyebrow: "The 10th Edition Is Here",
  title: "About the Conference",
  paragraphs: [
    "The Leadership Rebirth Conference (LRC) is not another event on the calendar. For ten years running, it has been a movement — a gathering point for men and women who are done with average and hungry for excellence.",
    'LRC 10.0 brings together voices from Family, Faith, Business, Leadership and Tech to challenge one lie that has held too many of us captive for too long: that mediocrity is acceptable because "everyone is doing it." This year, we say no more.',
    "This 10th edition is a call to examine the cultures we have inherited, challenge the systems that hold people back, and intentionally build the cultures we want to see in our families, organisations, communities, churches, businesses and nation.",
    "Whether you are building a home, growing a business, leading a team, pastoring a congregation or building the next big tech solution, LRC 10.0 is where your rebirth begins. You will not leave the way you came.",
  ],
};

export const themeSection = {
  eyebrow: "The Theme",
  title: "Shifting the Culture: From Mediocrity to Excellence",
  paragraphs: [
    'Mediocrity has quietly become the norm. In our homes, we have accepted broken systems as "normal family life." In our faith, we have settled for routine instead of encounter. In business, many have made peace with average output and blamed the economy. In leadership, too many have mistaken position for influence. In tech, brilliant ideas remain trapped because excellence feels optional rather than essential.',
    "LRC 10.0 exists to interrupt that pattern.",
    "This conference is built around five pillars that shape everyday life — Family, Faith, Business, Leadership and Tech — because a true culture shift does not happen in one area alone. It happens when a person leads their home with intentionality, worships with depth, builds with excellence, leads with integrity, and innovates with purpose.",
  ],
  pullQuote:
    "Ten years ago, LRC began as a call. Today, on its 10th edition, it is a demand: shift the culture, or be shifted by it.",
};

export const cultureReasons = [
  {
    icon: "users",
    title: "Because Culture Shapes Leadership",
    body: "Leaders do not operate in isolation. They are products and shapers of the environments around them.",
  },
  {
    icon: "check",
    title: "Because Culture Determines What Becomes Normal",
    body: "What society repeatedly accepts eventually becomes normal. Leaders must have the courage to challenge unhealthy norms.",
  },
  {
    icon: "trending",
    title: "Because Transformation Requires More Than Motivation",
    body: "We need more than inspirational speeches. We need changed mindsets, values, behaviours, systems and practices.",
  },
  {
    icon: "globe",
    title: "Because Africa Needs Culture-Shifting Leaders",
    body: "The continent needs leaders who can challenge limitations, build healthy institutions and create environments where people and ideas can thrive.",
  },
  {
    icon: "calendar",
    title: "Because the Next Decade Demands New Leadership",
    body: "The next ten years will require leaders who can navigate technology, business, faith, family, governance and social change with wisdom and courage.",
  },
];

export const fiveWorlds = {
  eyebrow: "The Five Worlds of the Conference",
  title: "Five Conversations. One Mission.",
  closing: "Different spaces. One responsibility — to shift the culture.",
  worlds: [
    {
      icon: "leadership",
      name: "Leadership",
      body: "Developing the character, competence and courage required to lead effectively and responsibly.",
    },
    {
      icon: "technology",
      name: "Technology",
      body: "Exploring how technology, innovation and digital transformation are reshaping leadership and society.",
    },
    {
      icon: "faith",
      name: "Faith",
      body: "Examining the role of values, conviction and faith in building people, families and communities.",
    },
    {
      icon: "business",
      name: "Business",
      body: "Equipping entrepreneurs, professionals and business leaders to build sustainable ventures and create meaningful impact.",
    },
    {
      icon: "family",
      name: "Family",
      body: "Rebuilding the values, relationships and leadership foundations that shape healthy families and future generations.",
    },
  ],
};

/**
 * Speakers. One object per speaker — the source of truth for both the
 * speaker card and its profile modal (see SpeakerCard.tsx / SpeakerProfileModal.tsx).
 *
 * `status: "tba"` renders an elegant placeholder card with no profile modal.
 * `status: "confirmed"` renders the real card and is clickable to open the
 * full profile. To add a speaker, append an object here — no component changes
 * needed. Only include information actually supplied for that speaker; leave
 * a field out rather than inventing a value.
 */
export const speakers = {
  eyebrow: "Meet the Voices",
  title: "Leaders. Thinkers. Builders. Innovators. Change-makers.",
  body: "We are bringing together voices with experience, insight and influence to challenge your thinking and equip you for the future.",
  note: "Other Extraordinary Speakers will be added to the Line-up Soon.",
  list: [
    {
      id: "solomon-chimaechi-okeke",
      status: "confirmed",
      name: "Solomon Chimaechi Okeke",
      role: "Co-Founder",
      org: "ImpactField Global Youth Initiative",
      focus: "Leadership",
      photo: "/images/lrc/speakers/solomon-chimaechi-okeke.jpg",
      photoPosition: "50% 15%",
      bio: [
        "Solomon Chimaechi Okeke is an inspirational figure with a clear focus on creating positive impact and empowering the youth. As the Co-founder of Impactfield Global Youth Initiative, he has been dedicated to supporting young people in Nigeria and beyond, providing them with valuable resources and opportunities since 2016.",
        "In 2021, he took his passion for leadership development to the next level by establishing the Impactfield Leadership Institute. With its reach extending to seven countries, this institute aims to empower leaders and equip them with the necessary skills and knowledge for excellence. He's the host of the Exceptional Leaders Program (ELP) and the Christian Leaders Acceleration Program (CLAP).",
        "Furthermore, Solomon Chimaechi Okeke co-hosts the Enugu Readers Summit, a literacy promotion event that has positively impacted the lives of over 50,000 people since its inception in 2016.",
        "As a Leadership and Personal Development Trainer and Communication Coach, Solomon Okeke has honed his expertise in guiding individuals on their journey towards personal growth and leadership development. His efforts have been recognized through numerous awards and accolades, including being an award-winning author of eight books.",
        "One of his notable initiatives is the annual Leadership Rebirth Conference, which has been taking place since 2017. This event is designed to nurture transformational leaders who possess essential qualities such as character, capacity, courage, competence, and virtue.",
        "Through private coaching and mentoring sessions, he offers guidance and support to young people, helping them cultivate values, principles, and skills that contribute to successful and purposeful living. By encouraging them to discover their purpose and develop their potential, Solomon enables them to make the most of their God-given abilities.",
        "Additionally, Solomon Okeke has sought continuous growth and learning opportunities by attending esteemed institutions like Daystar Leadership Academy, Destiny Leadership Academy, Dominion Leadership Institute, and the School of Purpose and Influence, New Zealand.",
        "His dedication and impact on society were further recognized when he became a 2021 fellow of the Young Professional BootCamp, a notable platform for young professionals.",
        "Through his various endeavors and commitments, Solomon Chimaechi Okeke exemplifies a strong commitment to making a positive difference in the lives of young people and empowering them to become exemplary leaders and citizens.",
      ],
    },
    {
      id: "stephen-chima",
      status: "confirmed",
      name: "Stephen Chima",
      role: "Youth Minister & Social Impact Strategist",
      org: "Speak Solution Hub",
      focus: "Faith",
      photo: "/images/lrc/speakers/stephen-chima.jpg",
      photoPosition: "50% 15%",
      bio: [
        "Stephen Chima is a youth minister, social impact strategist, and emerging legal professional committed to youth development and transformational leadership in Africa.",
        "A graduate of Law from the University of Nigeria, Nsukka, he blends legal training with grassroots advocacy, pastoral ministry, and strategic communication.",
        "He is the visionary founder of Speak Solution Hub, a platform advancing youth mentorship and policy dialogue among young Africans.",
        "A published author and conference speaker, Stephen has experience across education, media, and brand strategy. He has engaged diverse audiences on leadership and social change, and is a Fellow of the United Nations Academic Impact and Future Africa Project.",
      ],
    },
    {
      id: "ngozi-aki",
      status: "confirmed",
      name: "Ngozi Aki",
      role: "Marketing and Sales Executive",
      focus: "Business",
      photo: "/images/lrc/speakers/ngozi-aki.jpg",
      photoPosition: "55% 15%",
    },
    { id: "speaker-tba-1", status: "tba", name: "Speaker TBA", focus: "Technology" },
    { id: "speaker-tba-2", status: "tba", name: "Speaker TBA", focus: "Family" },
  ] as Speaker[],
};

export type Speaker = {
  id: string;
  status: "confirmed" | "tba";
  name: string;
  role?: string;
  org?: string;
  focus?: string;
  /**
   * Portrait 3:4–4:5, head roughly in the upper third, consistent framing
   * across speakers. Drop files in public/images/lrc/speakers/ and set the path.
   */
  photo?: string;
  /** object-position override if the subject is not centred (e.g. "50% 15%"). */
  photoPosition?: string;
  /** Biography as supplied, one paragraph per array entry. Omit if not supplied. */
  bio?: string[];
  /** Only populate from explicit structured lists in the source — never inferred. */
  expertise?: string[];
  achievements?: string[];
  socialLinks?: { linkedin?: string; twitter?: string; website?: string };
};

export const audience = {
  eyebrow: "Who Is This Conference For?",
  title: "This is your room if you are ready to lead differently.",
  groups: [
    { icon: "spark", label: "Young leaders" },
    { icon: "briefcase", label: "Entrepreneurs & business owners" },
    { icon: "user", label: "Professionals" },
    { icon: "book", label: "Students & young people" },
    { icon: "faith", label: "Faith leaders" },
    { icon: "community", label: "Community leaders" },
    { icon: "palette", label: "Creatives & innovators" },
    { icon: "building", label: "Public servants" },
    { icon: "school", label: "Educators" },
    { icon: "heart", label: "Family & relationship leaders" },
    { icon: "globe", label: "Social impact leaders" },
    { icon: "compass", label: "Anyone committed to transformation" },
  ],
  closing: {
    lead: "You don't have to have a title to be a leader.",
    body: "If you influence people, make decisions, solve problems or have a vision for a better future, this conference is for you.",
  },
};

export const experience = {
  eyebrow: "What to Expect",
  title: "Come Ready to Learn. Connect. Reflect. Act.",
  items: [
    {
      icon: "mic",
      title: "Powerful Keynote Sessions",
      body: "Hear from experienced leaders and thought leaders tackling the issues that matter.",
    },
    {
      icon: "message",
      title: "Transformational Conversations",
      body: "Engage in honest conversations around leadership, culture, society and the future.",
    },
    {
      icon: "wrench",
      title: "Practical Workshops",
      body: "Gain tools, frameworks and insights that can be applied beyond the conference.",
    },
    {
      icon: "network",
      title: "Networking & Connections",
      body: "Meet young leaders, professionals, entrepreneurs, creatives, faith leaders and change-makers.",
    },
    {
      icon: "cpu",
      title: "Innovation & Technology",
      body: "Explore the ideas and technologies shaping the future.",
    },
    {
      icon: "compass",
      title: "Faith & Values",
      body: "Reconnect leadership with character, purpose and conviction.",
    },
    {
      icon: "award",
      title: "Celebration & Recognition",
      body: "Celebrate a decade of impact and recognise individuals and organisations contributing to positive change.",
    },
  ],
};

/**
 * Program highlights. Indicative agenda derived from the conference scope —
 * to be confirmed with the final programme.
 */
export const program = {
  eyebrow: "Program Highlights",
  title: "Two Powerful Days",
  note: "A Spirit-filled, content-packed, life-shaping experience. Full programme to be released closer to the event.",
  items: [
    "Keynote Sessions & Panel Discussions",
    "Leadership Breakout Sessions",
    "Tech & Innovation Showcase",
    "Business Masterclasses",
    "Faith & Worship Experiences",
    "Family & Relationships Conversations",
    "Networking & Partnership Opportunities",
    "Exhibition & Experience Zones",
  ],
};

export const whyAttend = {
  eyebrow: "Why You Should Attend",
  title: "You will leave different from how you came.",
  items: [
    {
      title: "Challenge your thinking",
      body: "See leadership, culture and society from new perspectives.",
    },
    {
      title: "Develop yourself",
      body: "Gain practical insights for personal and professional growth.",
    },
    {
      title: "Build meaningful relationships",
      body: "Connect with people who can become collaborators, mentors, partners and friends.",
    },
    {
      title: "Discover opportunities",
      body: "Find ideas, platforms and possibilities for your next level.",
    },
    {
      title: "Clarify your responsibility",
      body: "Understand the role you can play in shaping the culture around you.",
    },
    {
      title: "Take action",
      body: "Leave inspired, but more importantly, equipped to act.",
    },
  ],
};

/**
 * Ticket tiers. Source: LRC 10.0 FAQ. Silver is free; Gold and Diamond pricing
 * is handled on the events platform (GET A HIGHER TICKET). No prices invented here.
 */
export const tickets = {
  eyebrow: "Ticket Options",
  title: "Choose Your Experience",
  note: "Registration for the paid tier is not refundable, but it can be transferred to another person any time before the event.",
  tiers: [
    {
      name: "Silver",
      price: "Free",
      priceNote: "No charge",
      featured: false,
      cta: { label: "Register Now", href: links.register },
      features: [
        "Full access to the impactful general session (Saturday morning)",
        "Entry to the main conference hall",
        "Access to the exhibition & experience zones",
      ],
    },
    {
      name: "Gold",
      price: "Premium",
      priceNote: "See pricing on registration",
      featured: true,
      cta: { label: "Get Gold Ticket", href: links.higherTicket },
      features: [
        "Everything in Silver",
        "Premium seating",
        "Access to premium sessions",
        "Extra attendee perks",
        "Certificate of participation",
      ],
    },
    {
      name: "Diamond",
      price: "VIP",
      priceNote: "See pricing on registration",
      featured: false,
      cta: { label: "Get Diamond Ticket", href: links.higherTicket },
      features: [
        "Everything in Gold",
        "Full VIP experience",
        "Priority seating",
        "Exclusive access areas",
        "Certificate of participation",
      ],
    },
  ],
};

/**
 * Testimonials — PLACEHOLDER copy. The client is sourcing real testimonials
 * from past participants and team leads (with photos where available).
 * Replace `quote` / `name` / `role`, set `placeholder: false`, and optionally add
 * a square `photo` (1:1, ~400×400) in public/images/lrc/testimonials/.
 */
export type Testimonial = {
  placeholder?: boolean;
  quote: string;
  name: string;
  role: string;
  photo?: string;
  photoPosition?: string;
};

export const testimonials: {
  eyebrow: string;
  title: string;
  note?: string;
  list: Testimonial[];
} = {
  eyebrow: "Testimonials",
  title: "Don't Take Our Word for It",
  note: "Placeholder testimonials — real quotes from past participants to be added.",
  list: [
    {
      placeholder: true,
      quote:
        "Leadership Rebirth Conference changed the way I see leadership. I came in looking for motivation and left with a new standard for how I lead my team and my home.",
      name: "Past Participant",
      role: "Previous Edition",
    },
    {
      placeholder: true,
      quote:
        "LRC didn't just inspire me; it reshaped how I lead and build. I left with clarity, new connections and a renewed fire.",
      name: "Past Participant",
      role: "Previous Edition",
    },
    {
      placeholder: true,
      quote:
        "Two days that shifted my mindset. The conversations across faith, business and family were exactly what I needed for this season.",
      name: "Past Participant",
      role: "Previous Edition",
    },
    {
      placeholder: true,
      quote:
        "The most practical leadership gathering I have attended in Nigeria. I returned to work with frameworks I still use today.",
      name: "Past Participant",
      role: "Previous Edition",
    },
  ],
};

/** Impact statistics. Supplied figures — update in one place as they grow. */
export const stats = {
  eyebrow: "Impact / Social Proof",
  title: "A Movement That Keeps Growing",
  closing:
    "Thousands of people have walked through the doors of Leadership Rebirth. Now, it is your turn.",
  items: [
    { value: 10, suffix: "", label: "Editions" },
    { value: 10000, suffix: "+", label: "People Impacted" },
    { value: 70, suffix: "+", label: "Speakers" },
    { value: 10, suffix: "", label: "Years of Impact" },
  ],
};

export const faqs = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Who should attend LRC 10.0?",
      a: "Anyone ready to grow — business owners, ministers, corporate leaders, tech professionals, entrepreneurs, couples, and anyone serious about personal and organisational excellence.",
    },
    {
      q: "Where exactly is the conference holding?",
      a: "De Base Landmark, Independence Layout, Enugu.",
    },
    {
      q: "What are the conference dates and times?",
      a: "31st October 2026 from 10am, and 1st November 2026 from 2pm.",
    },
    {
      q: "Is registration really free?",
      a: "Yes. The Silver tier gives you full access to the conference at no cost. Gold and Diamond tiers are available if you would like an upgraded experience, and this is highly recommended.",
    },
    {
      q: "What is the difference between the Silver, Gold and Diamond tiers?",
      a: "The Silver ticket is entirely free and gives you full access to the impactful general session on Saturday morning. Gold adds premium seating and extra perks, while Diamond gives you the full VIP experience with priority seating and exclusive access. Use GET A HIGHER TICKET to find out more about Gold and Diamond.",
    },
    {
      q: "How do I register?",
      a: "Click the registration link on this page and select your preferred tier. Choose REGISTER NOW for the Silver ticket, or GET A HIGHER TICKET for Gold or Diamond.",
    },
    {
      q: "Do I need to be a leader to attend?",
      a: "No. Leadership is not limited to people with titles. If you influence people, make decisions or want to contribute meaningfully to society, you are welcome.",
    },
    {
      q: "Is there a dress code?",
      a: "Smart and comfortable is recommended. Further details will be communicated closer to the event.",
    },
    {
      q: "Can I get a refund if I can no longer attend?",
      a: "Registration for the paid tier is not refundable. However, it can be transferred to another person any time before the date of the event.",
    },
    {
      q: "Can I attend as a group?",
      a: "Yes. We can provide group registration options for organisations, churches, schools, companies, communities and other groups.",
    },
    {
      q: "Can my organisation partner with the conference?",
      a: "Yes. Organisations can participate through sponsorship, partnership, exhibition, media collaboration and other engagement opportunities. Click BECOME A PARTNER to get started.",
    },
    {
      q: "How can I become a sponsor?",
      a: `Click BECOME A PARTNER or contact our team on ${site.contactPhone}.`,
    },
    {
      q: "Will there be certificates?",
      a: "Yes — there will be certificates of participation for higher tickets.",
    },
    {
      q: "Can I invite someone else?",
      a: "Absolutely. We encourage you to bring someone with you. One invitation could change someone's life.",
    },
    {
      q: "Will there be an opportunity to network with speakers and other attendees?",
      a: "Yes. Networking is a core part of LRC 10.0, and both fireside chats and dedicated networking sessions are built into the programme.",
    },
    {
      q: "Do I need to register in advance, or can I register at the venue?",
      a: "Advance registration is strongly recommended to guarantee your seat, especially for the Gold and Diamond tiers.",
    },
  ],
};

/**
 * Partner logos render with `object-fit: contain` and generous padding — never
 * cropped or distorted. Supply transparent SVG (preferred) or PNG in
 * public/images/lrc/partners/ and set `src` + `name`. Empty slots show a
 * neutral placeholder tile. Do not add a partner until it is confirmed.
 */
export type PartnerLogo = { name: string | null; src: string | null };

export const partners = {
  eyebrow: "Partners & Sponsors",
  title: "Build the Future With Us",
  body: "Leadership Rebirth Conference 10.0 presents opportunities for organisations, brands and institutions to connect with an audience of ambitious young people, professionals, entrepreneurs, leaders and influencers.",
  opportunities: [
    "Headline Sponsorship",
    "Strategic Partnership",
    "Brand Sponsorship",
    "Exhibition",
    "Media Partnership",
    "Institutional Partnership",
    "Sponsored Tickets",
  ],
  logos: [
    { name: null, src: null },
    { name: null, src: null },
    { name: null, src: null },
    { name: null, src: null },
    { name: null, src: null },
    { name: null, src: null },
  ] as PartnerLogo[],
};

export const legacy = {
  eyebrow: "ImpactField @10 + Legacy Awards",
  title: "A Decade of Impact. A New Decade of Possibilities.",
  paragraphs: [
    "Leadership Rebirth Conference 10.0 is not just another edition. It marks a significant milestone in a journey that has brought together people passionate about leadership and transformation.",
  ],
  milestones: [
    "Ten years of conversations.",
    "Ten years of learning.",
    "Ten years of connections.",
    "Ten years of challenging people to become better leaders.",
  ],
  turn: 'And now, we begin another chapter. The question is no longer, "What have we achieved?" The question is, "What will we build next?"',
  cta: { label: "Read more about the anniversary", href: links.anniversary },
};

export const finalCta = {
  kicker: "Be Part of History",
  titleLines: ["Leadership Rebirth", "Conference 10.0"],
  themeLine: "Shifting the Culture",
  lead: site.tagline,
  closing: "We can't wait to welcome you to Enugu this October.",
};

/**
 * Footer — modelled on the ImpactField global footer (dark, multi-column,
 * volunteer CTA, "Copyright © 2026 All Rights Reserved."). Links point back into
 * the ImpactField ecosystem so the conference resolves into the parent brand.
 */
export const footer = {
  about:
    "Leadership Rebirth Conference is an ImpactField initiative — a decade-long movement raising leaders across Family, Faith, Business, Leadership and Technology.",
  volunteerCta: {
    label: "Join Our Team",
    body: "Become a volunteer and help us shift the culture.",
    href: links.volunteer,
  },
  columns: [
    {
      title: "Conference",
      links: [
        { label: "About LRC 10.0", href: "#about" },
        { label: "Speakers", href: "#speakers" },
        { label: "Program", href: "#program" },
        { label: "Tickets", href: "#tickets" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "ImpactField",
      links: [
        { label: "Home", href: "https://impactfield.com.ng" },
        { label: "About Us", href: "https://impactfield.com.ng/about-us/" },
        { label: "Our Programmes", href: "https://impactfield.com.ng/programmes/" },
        { label: "Blog", href: "https://impactfield.com.ng/blog/" },
        { label: "Our Events", href: "https://events.impactfield.com.ng" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "https://impactfield.com.ng/contact-us/" },
        { label: "Become a Partner", href: links.partner },
        { label: "Volunteer", href: links.volunteer },
        { label: "Privacy Policy", href: "https://impactfield.com.ng/privacy-policy/" },
        { label: "Terms & Conditions", href: "https://impactfield.com.ng/terms/" },
      ],
    },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com/impactfield", icon: "facebook" },
    { label: "X", href: "https://x.com/impactfield", icon: "x" },
    { label: "Instagram", href: "https://instagram.com/impactfield", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com/@impactfield", icon: "youtube" },
    { label: "LinkedIn", href: "https://linkedin.com/company/impactfield", icon: "linkedin" },
  ],
  copyright: "Copyright © 2026 ImpactField. All Rights Reserved.",
};

/* -------------------------------------------------------------------------- *
 *  IMAGE ASSETS
 *
 *  Single source of truth for every photographic asset on the page. To swap an
 *  image: drop the file into the folder shown by `dir`, then set `src` to its
 *  path (e.g. "/images/lrc/hero/lrc-hero.jpg"). While `src` is null the
 *  component renders an intentional branded placeholder that preserves the
 *  layout box — no stock photography, no layout shift.
 *
 *  `render`   "fill"  = fills an absolutely-positioned / min-height container
 *             "fixed" = intrinsic <img> sized by width/height inside its box
 *  `position` object-position for desktop; `positionMobile` overrides < md.
 *  Speaker / testimonial / partner imagery lives in their own data blocks below.
 * -------------------------------------------------------------------------- */

export type ImageAsset = {
  src: string | null;
  alt: string;
  /** Intrinsic pixel size — prevents layout shift and guides the export size. */
  width: number;
  height: number;
  ratio: string;
  render: "fill" | "fixed";
  position?: string;
  positionMobile?: string;
  priority?: boolean;
  /** The component applies a dark overlay over this image for text contrast. */
  overlay?: boolean;
  placeholderLabel: string;
  /** Where to drop the replacement file. */
  dir: string;
  /** Suggested filename for the replacement. */
  file: string;
  note: string;
};

export const imageAssets: Record<
  "hero" | "about" | "venue" | "program" | "finalCta",
  ImageAsset
> = {
  hero: {
    src: "/images/lrc/hero/hero.jpg",
    alt: "A speaker addressing delegates from the main stage at a Leadership Rebirth Conference",
    width: 2400,
    height: 1424,
    ratio: "2400/1424",
    render: "fill",
    // Speaker stands in the right third; bias right so he stays in frame while
    // the headline sits over the darkened left side.
    position: "74% 38%",
    positionMobile: "78% 36%",
    priority: true,
    overlay: true,
    placeholderLabel: "Hero image",
    dir: "public/images/lrc/hero/",
    file: "hero.jpg",
    note: "Supplied (LRC 9.0). Stage speaker, right third; screen fills the left. Heavy ink gradient over the left for headline contrast; event-branding bar trimmed off the bottom in scripts/process-images.mjs.",
  },
  about: {
    src: "/images/lrc/about/about.jpg",
    alt: "Delegates seated at tables facing the stage during a Leadership Rebirth Conference session",
    width: 1700,
    height: 1020,
    ratio: "4/3",
    render: "fixed",
    // Stage + audience read across the middle band; hold the centre.
    position: "50% 42%",
    priority: false,
    overlay: false,
    placeholderLabel: "About the conference",
    dir: "public/images/lrc/about/",
    file: "about.jpg",
    note: "Supplied (LRC 9.0). Wide establishing shot of the hall — cropped to a contained 4:3 card beside the About copy.",
  },
  venue: {
    src: "/images/lrc/event/venue.jpg",
    alt: "A full house of delegates at tables watching a session at a Leadership Rebirth Conference",
    width: 1900,
    height: 1140,
    ratio: "4/3",
    render: "fill",
    // Stage/screen sit upper-left; bias left/up so the framing favours the room
    // and the old-edition banner on the right stays out of frame.
    position: "38% 40%",
    priority: false,
    overlay: true,
    placeholderLabel: "Venue",
    dir: "public/images/lrc/event/",
    file: "venue.jpg",
    note: "Supplied (LRC 9.0). Packed room + stage — reinforces the venue/experience on the right of the dark Event Details panel, under an ink gradient.",
  },
  program: {
    src: "/images/lrc/experience/program.jpg",
    alt: "A delegate speaking into a microphone at the podium during a Leadership Rebirth Conference session",
    width: 1300,
    height: 1716,
    ratio: "1300/1716",
    render: "fixed",
    // Face/gesture in the upper third; caption bar covers the lower ~30%.
    position: "50% 22%",
    priority: false,
    overlay: false,
    placeholderLabel: "Program",
    dir: "public/images/lrc/experience/",
    file: "program.jpg",
    note: "Supplied (LRC 9.0). Portrait — speaker at the podium. Caption bar overlays the lower third; object-position biased up to hold the face.",
  },
  finalCta: {
    src: "/images/lrc/legacy/final-cta.jpg",
    alt: "Delegates applauding at their tables during a Leadership Rebirth Conference",
    width: 2200,
    height: 1320,
    ratio: "5/3",
    render: "fill",
    // Faces concentrate in the upper-middle band.
    position: "50% 38%",
    positionMobile: "50% 32%",
    priority: false,
    overlay: true,
    placeholderLabel: "Final call to action",
    dir: "public/images/lrc/legacy/",
    file: "final-cta.jpg",
    note: "Supplied (LRC 9.0). Engaged, applauding audience — rendered ≈30% opacity behind an ink gradient for the closing section.",
  },
};
