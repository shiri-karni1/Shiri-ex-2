export const APP_NAME = "Shiri's Site";
export const COURSE_GITHUB = "https://github.com/product-jam-2025";
export const COURSE_CREDITS = "Product Jam 2025";

export const DEMOS_ENABLED =
  process.env.DEMOS_ENABLED === "true" ? true : false;
export const DEMOS = [
  {
    title: "Tic Tac Toe",
    slug: "/demos/tic-tac-toe",
    description: "A simple Tic Tac Toe game built with React.",
  },
  {
    title: "Art Gallery",
    slug: "/demos/art",
    description:
      "An example of fetching and displaying art from the Metropolitan Museum of Art's public API.",
  },
  {
    title: "Design Demo",
    slug: "/demos/design",
    description: "A demo page showcasing design skills and layout.",
  }
];

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const EMAIL_HOST = process.env.EMAIL_HOST || "";
export const EMAIL_PORT = process.env.EMAIL_PORT || 587;

export const PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const PRIVATE_SUPABASE_SERVICE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const NEXT_PUBLIC_GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export const SUPABASE_ENABLED =
  PUBLIC_SUPABASE_URL &&
  PUBLIC_SUPABASE_ANON_KEY &&
  PRIVATE_SUPABASE_SERVICE_KEY
    ? true
    : false;

export const NASA_API_KEY = process.env.NASA_API_KEY || "";
