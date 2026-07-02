/**
 * @file homepage.ts
 * @description Shared homepage content — slides, schedules, programs, and booking helpers.
 */

export const PROGRAM_SLIDES = [
  { image: "/art.jpg" },
  { image: "/art3.jpg" },
  { image: "/art4.JPG" },
  { image: "/art5.jpg" },
  { image: "/art6.JPG" },
  { image: "/art7.JPG" },
  { image: "/art9.jpg" },
  { image: "/art10.JPG" },
  { image: "/art11.JPG" },
  { image: "/art12.JPG" },
  { image: "/art13.jpg" },
  { image: "/art15.JPG" },
  { image: "/art16.JPG" },
  { image: "/art17.JPG" },
];

export const STUDIO_SLIDES = [
  { image: "/l_a.JPG" },
  { image: "/l_c.jpeg" },
  { image: "/l_d.jpeg" },
  { image: "/l_f.png" },
  { image: "/l_g.jpg" },
];

export const PHOTOBOOK_COVER = "/photobook_cover.png";

export const PHOTOBOOK_INSIDE = "/inside_book.jpg";

export const PHOTOBOOK_PRICE = 45000;

export const PHOTOBOOK_ADDON_POINTS = [
  "We capture every creative moment, so your child can look back on the experience for years to come.",
  "A meaningful gift for family abroad who couldn't join",
  "6 × 8 · ~20 pages · ready in about one week",
] as const;

export const KEEPSAKE_PRICING = [
  { item: "T-shirt Printing", price: 35000 },
  {
    item: "Bring your own plain white or ivory T-shirt",
    price: 10000,
  },
  { item: "Tote Bag Printing", price: 35000 },
  { item: "Custom Tumbler Inner Cover", price: 23000 },
  { item: "Bucket Hat Design", price: 42000 },
  { item: "Custom Sneaker Art", price: 55000 },
] as const;

export const KEEPSAKE_BOOKING_DETAILS = [
  "Number of participants",
  "Preferred keepsake(s)",
  "T-shirt size (if applicable)",
  "Shoe size (US / EU / KR)",
] as const;

export const SHOE_SIZE_GUIDE = [
  "US 11 = KR 170 = EU 28",
  "US 12 = KR 180 = EU 29",
  "US 13 = KR 190 = EU 30",
  "US 1 = KR 200 = EU 31–32",
  "US 2 = KR 210 = EU 33",
  "US 3 = KR 220 = EU 34",
  "US 4 = KR 230 = EU 36",
  "US 5 = KR 240 = EU 37",
] as const;

export const PHOTOBOOK_FEATURES = [
  {
    title: "6 × 8 Keepsake",
    description: "Photobook style.",
  },
  {
    title: "Around 20 Pages",
    description:
      "Curated activity photos, creative moments, and artwork from your child's journey.",
  },
  {
    title: "Individually Designed",
    description:
      "Each Art Photobook is individually designed after at least three sessions.",
  },
  {
    title: "About One Week",
    description: "Production typically takes around one week.",
  },
] as const;

export const ART_EXPERIENCE_SCHEDULE: Record<string, string[]> = {
  Tuesday: ["11:00–12:30", "12:00–1:30"],
  Wednesday: ["11:00–12:30", "12:00–1:30"],
  Thursday: ["11:00–12:30", "12:00–1:30"],
  Friday: ["11:00–12:30", "12:00–1:30"],
};

export const WEEKLY_PROGRAM_SCHEDULE: Record<string, string[]> = {
  Tuesday: ["2:00–3:10 PM", "5:00–6:10 PM"],
  Wednesday: ["3:00–4:10 PM"],
  Thursday: ["2:00–3:10 PM", "5:00–6:10 PM"],
  Saturday: ["2:50–4:00 PM"],
};

export const ART_EXPERIENCE_OPTIONS = [
  "Projection Mural Art + Eco Painting",
  "Projection Mural Art + Eco Clay",
];

export function buildBookingMailto(programName: string, formBody?: string) {
  const body =
    formBody ??
    [
      `I would like to book: ${programName}`,
      "",
      "Parent/Guardian Name:",
      "Child's Name:",
      "Child's Age:",
      "Phone Number:",
      "Preferred Schedule:",
    ].join("\n");

  return (
    "mailto:lallartlab@gmail.com?subject=" +
    encodeURIComponent(`Booking Inquiry - ${programName}`) +
    "&body=" +
    encodeURIComponent(body)
  );
}

export function buildQuestionMailto(programName: string) {
  return (
    "mailto:lallartlab@gmail.com?subject=" +
    encodeURIComponent(`Question about ${programName}`) +
    "&body=" +
    encodeURIComponent(
      [
        `I have a question about ${programName}.`,
        "",
        "My question:",
        "",
        "Parent/Guardian Name:",
        "Phone Number:",
      ].join("\n"),
    )
  );
}

export const EXPERIENCE_PREVIEW_CARDS = [
  {
    slug: "projection-mural-art",
    title: "Projection Mural Art",
    description: "Paint large-scale murals with light projection technology.",
    image: "/sea.png",
    imagePosition: "left 35%",
    href: "/experiences/projection-mural-art",
  },
  {
    slug: "eco-art",
    title: "Eco Art",
    description:
      "Explore colour and texture with eco clay and eco paints made from natural ingredients and eco-friendly pigments.",
    image: "/paint.jpg",
    href: "/experiences/eco-art",
  },
  {
    slug: "drawing-painting",
    title: "Drawing & Painting",
    description:
      "From observation drawing to expressive painting, children develop technique and discover their own creative style.",
    image: "/IMG_0365.jpg",
    imageFit: "cover",
    imagePosition: "center top",
    href: "/experiences/drawing-painting",
  },
  {
    slug: "space-installation",
    title: "Space Installation",
    description:
      "Create large collaborative installations while exploring space, scale, structure, and creativity.",
    image: "/space_art.jpg",
    href: "/experiences/space-installation",
  },
  {
    slug: "world-cultures-through-art",
    title: "World Cultures Through Art",
    description:
      "Explore cultures through art, stories, and hands-on creative experiences.",
    image: "/joomchi.jpg",
    href: "/experiences/world-cultures-through-art",
  },
] as const;

export const EXPERIENCE_PAGES: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    heroImage: string;
    heroAlt: string;
    intro: string[];
  }
> = {
  "projection-mural-art": {
    badge: "Experience",
    title: "Projection Mural Art",
    subtitle:
      "Paint large-scale murals with light projection technology.",
    heroImage: "/sea.png",
    heroAlt: "Children creating projection mural art at Lalla Kids Art",
    intro: [
      "Lytart is Lalla's original, trademark-registered program that fuses media art with children's art education.",
      "Using beam projection, children explore stencil, collage, drawing, and sensory art in a large-scale, interactive environment.",
      "It's a hands-on journey where light becomes the canvas, and creativity knows no bounds.",
    ],
  },
  "eco-art": {
    badge: "Experience",
    title: "Eco Art",
    subtitle:
      "Explore colour and texture with eco clay and eco paints made from natural ingredients.",
    heroImage: "/paint.jpg",
    heroAlt: "Eco art painting session at Lalla Kids Art",
    intro: [
      "We minimise waste and rethink materials—using our own safe, natural clay recipes and eco paints from Natural Earth Paint.",
      "Children explore colour, texture, and form through hands-on making with eco-friendly pigments and natural ingredients.",
      "From design to curriculum, sustainability shapes everything we do.",
    ],
  },
  "drawing-painting": {
    badge: "Experience",
    title: "Drawing & Painting",
    subtitle:
      "From observation drawing to expressive painting, children develop technique and discover their own creative style.",
    heroImage: "/IMG_0365.jpg",
    heroAlt: "Drawing and painting session at Lalla Kids Art",
    intro: [
      "Children build confidence through observation drawing, expressive painting, and creative exploration.",
      "Sessions blend technique with imagination—helping each child discover their own visual language.",
      "All materials are included, and no prior experience is needed.",
    ],
  },
  "space-installation": {
    badge: "Experience",
    title: "Space Installation",
    subtitle:
      "Create large collaborative installations while exploring space, scale, structure, and creativity.",
    heroImage: "/space_art.jpg",
    heroAlt: "Space installation art at Lalla Kids Art",
    intro: [
      "Children work together to build large-scale installations that explore space, scale, and structure.",
      "Through sculpture, mixed media, and collaborative making, they learn to think spatially and creatively.",
      "Every installation is a shared creative adventure designed for hands-on discovery.",
    ],
  },
  "world-cultures-through-art": {
    badge: "Experience",
    title: "World Cultures Through Art",
    subtitle:
      "Explore cultures through art, stories, and hands-on creative experiences.",
    heroImage: "/joomchi.jpg",
    heroAlt: "World cultures through art at Lalla Kids Art",
    intro: [
      "Through shared art experiences, kids from diverse backgrounds connect beyond language.",
      "They engage hands-on with Korean heritage and global cultures—building empathy, curiosity, and respect.",
      "Every session celebrates cultural differences in meaningful, creative ways.",
    ],
  },
};

export const FEATURED_FAMILY_PHOTOS = [
  {
    src: "/reviews.jpg",
    alt: "Family review message at Lalla Kids Art",
  },
  {
    src: "/reviews1.jpg",
    alt: "Children's heartfelt artwork for their Lalla teacher",
  },
];

export const FAMILY_REVIEWS = [
  {
    id: "korean-traditions",
    name: "International Parent",
    context: "Weekly program family",
    rating: 5,
    quote:
      "We love that she is learning Korean traditions through art. Thank you.",
  },
  {
    id: "missed-you",
    name: "International Parent",
    context: "Weekly program family",
    rating: 5,
    quote:
      "She had said she's missed you so much. I can believe that she didn't want to leave!",
  },
  {
    id: "joanna",
    name: "Joanna O.",
    context: "International family in Seoul",
    rating: 5,
    quote:
      "Thank you so much. We will certainly recommend you to our friends.",
  },
  {
    id: "sally",
    name: "Sally M.",
    context: "International family in Seoul",
    rating: 5,
    quote: "Wow, I love how you make it so educational and fun!",
  },
  {
    id: "joon",
    name: "Joon B.",
    context: "Google Review",
    rating: 5,
    quote:
      "Kids had a great time. They really enjoyed the class and came home excited about what they had made. The teacher was friendly, passionate and made the activities fun and easy to follow. It was a positive experience overall, and we would definitely come back again.",
  },
];

export const IMPACT_STATS = [
  {
    value: 87,
    suffix: "+",
    label: "Original Projection Mural Programs Developed",
    icon: "monitor" as const,
  },
  {
    value: 800,
    suffix: "+",
    label: "Projection Mural & Installation Sessions",
    icon: "layers" as const,
  },
  {
    value: 70,
    suffix: "%+",
    label: "Weekly Program Re-enrollment",
    icon: "users" as const,
  },
  {
    value: 80,
    suffix: "%+",
    label: "Families Join Through Referrals",
    icon: "heart" as const,
  },
  {
    value: 120,
    suffix: "+",
    label: "International Family Programs",
    icon: "globe" as const,
  },
];

export const COUNTRY_CHIPS = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇭🇰", name: "Hong Kong" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇹🇷", name: "Türkiye" },
  { flag: "🇮🇩", name: "Indonesia" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇹🇼", name: "Taiwan" },
];

export const PARTNER_ORGANIZATIONS: {
  name: string;
  description: string;
  logo?: string;
}[] = [
  {
    name: "Samsung Foundation",
    description: "3 Childcare centres · Itaewon · Seolleung · Sindang",
    logo: "/plogo4.png",
  },
  {
    name: "Cheil Worldwide",
    description: "Affiliated childcare program supply",
    logo: "/plogo3.png",
  },
  {
    name: "Korea International School",
    description: "Student workshops",
    logo: "/plogo5.png",
  },
  {
    name: "Shinsegae",
    description: "Cultural Centre public workshops",
    logo: "/plogo.png",
  },
];

export const ALSO_SERVING = {
  label: "Providing Experiences To Families From",
  communities: [
    "Camp Humphreys US army base",
    "U.S. Embassy in Korea",
    "Seoul Foreign School",
    "Dulwich",
    "Australian homeschooling communities",
    "international families via travel agencies",
  ],
  note: "So far — and we're excited to welcome even more families and communities in the years ahead.",
};

export const WORKSHOP_PHOTO = {
  src: "/groups.JPG",
  alt: "Children creating art together at Lalla workshops",
};

export const CHOOSE_PROGRAMS = [
  {
    id: "art-experience",
    title: "Art Experience",
    description:
      "A one-time creative art session for visitors and first-time families in Seoul.",
    duration: "90 mins",
    price: "55,000 KRW",
    bestFor: "Visitors in Seoul",
    includes:
      "Projection mural art, eco painting, eco clay, or creative making",
    image: "/art.jpg",
    cta: "View Details",
    href: "/art-experience",
  },
  {
    id: "weekly-program",
    title: "Weekly Art Program",
    description:
      "Creative Kids Art Adventure — drawing, projection murals, sculpture, mixed media, storytelling, and eco-friendly materials.",
    duration: "70 mins · 4 weeks",
    price: "190,000 KRW",
    bestFor: "Families living in Seoul",
    includes: "Materials included",
    image: "/art12.JPG",
    cta: "View Details",
    href: "/weekly-program",
  },
  {
    id: "private-family",
    title: "Private Family & Events",
    description:
      "Perfect for families, birthdays, friends, and private groups looking for a personalised creative art experience in Seoul.",
    duration: "2 Hours",
    bestFor: "Families · Birthday Parties · Friends · Private Groups",
    includes:
      "Every experience is tailored to your group's age, interests, and occasion.",
    image: "/events.jpg",
    cta: "Book Private Experience",
    href: "/private-family-events",
  },
  {
    id: "summer-camp",
    title: "Summer Art Camp",
    description: "Seasonal creative program during school holidays.",
    duration: "Seasonal",
    price: "Contact us",
    bestFor: "International families and visiting children",
    includes: "Holiday art experiences",
    image: "/summer.jpg",
    cta: "Book Your Summer Camp Spot",
    href: "/summer-camp",
  },
  {
    id: "school-workshops",
    title: "School Workshops",
    description:
      "Creative art workshops for international schools, embassies, and organizations.",
    duration: "Flexible",
    price: "Contact us",
    bestFor: "Schools and organizations",
    includes: "Studio visit or on-site at your venue",
    image: "/cultural.jpg",
    cta: "Learn More",
    href: "/school-workshops",
  },
];

export const PHILOSOPHY_PHOTOS = [
  {
    src: "/IMG_6606_.jpg",
    alt: "Child creating a personal story of Korea through art at Lalla",
    width: 3024,
    height: 3392,
    zoom: 1.4,
    objectPosition: "38% 28%",
    offsetY: -10,
  },
  {
    src: "/IMG_5387_.JPG",
    alt: "Children creating art together at Lalla",
    width: 600,
    height: 750,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do parents join the class?",
    answer:
      "Parents are welcome to stay and observe. For younger children, we may invite a parent to join briefly at the start.",
  },
  {
    question: "How long is each class?",
    answer:
      "Art Experience sessions are 90 minutes. Weekly Art Program classes are 70 minutes per session.",
  },
  {
    question: "Do you speak English?",
    answer:
      "Yes. Classes are English-friendly and designed for international families in Seoul.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely. No prior art experience is needed — every session is hands-on and welcoming for first-timers.",
  },
  {
    question: "Can siblings join together?",
    answer:
      "Yes. Siblings can join the same session when space is available. Please note ages when booking.",
  },
  {
    question: "What should children bring?",
    answer:
      "Just comfortable clothes that can get a little messy. All art materials are provided.",
  },
  {
    question: "Are materials included?",
    answer: "Yes. All materials are included in Art Experience and Weekly Program fees.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the Book Now form at the bottom of this page, or contact us by email, WhatsApp, or Instagram.",
  },
  {
    question: "Where is the studio located?",
    answer:
      "2F, 7 Dongho-ro 10-gil, Jung-gu, Seoul — 2 minutes from Yaksu Station (Line 3 / Line 6), Exit 4.",
  },
];
