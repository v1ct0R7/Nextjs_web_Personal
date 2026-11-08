import type { Metadata } from "next";
import Portfolio from "./components/portfolio";
import { getSiteUrl } from "./lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();

  return {
    title: "Elvis Murati — Full Stack Developer",
    description:
      "Elvis Murati is a Full Stack Developer working with React, Next.js, NestJS, Express, MongoDB, MySQL, and API integrations.",
    keywords: [
      "Elvis Murati",
      "Full Stack Developer",
      "React.js",
      "Next.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "MySQL",
      "API integration",
    ],
    alternates: siteUrl
      ? {
          canonical: new URL("/", siteUrl),
          languages: {
            en: new URL("/", siteUrl),
            sq: new URL("/sq", siteUrl),
          },
        }
      : undefined,
    openGraph: {
      title: "Elvis Murati — Full Stack Developer",
      description:
        "Full-stack development, thoughtful interfaces, and reliable web applications.",
      type: "website",
      locale: "en_US",
      alternateLocale: ["sq_AL"],
    },
    twitter: {
      card: "summary",
      title: "Elvis Murati — Full Stack Developer",
      description:
        "Full-stack development, thoughtful interfaces, and reliable web applications.",
    },
  };
}

export default function Home() {
  return <Portfolio locale="en" />;
}
