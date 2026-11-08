import type { Metadata } from "next";
import Portfolio from "../components/portfolio";
import { getSiteUrl } from "../lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();

  return {
    title: "Zhvillues Full Stack",
    description:
      "Elvis Murati është zhvillues Full Stack me përvojë në React, Next.js, NestJS, Express, MongoDB, MySQL dhe integrime API.",
    keywords: [
      "Elvis Murati",
      "Zhvillues Full Stack",
      "React.js",
      "Next.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Integrim API",
    ],
    alternates: siteUrl
      ? {
          canonical: new URL("/sq", siteUrl),
          languages: {
            en: new URL("/", siteUrl),
            sq: new URL("/sq", siteUrl),
          },
        }
      : undefined,
    openGraph: {
      title: "Elvis Murati — Zhvillues Full Stack",
      description:
        "Zhvillim full-stack, ndërfaqe të menduara dhe aplikacione web të besueshme.",
      type: "website",
      locale: "sq_AL",
      alternateLocale: ["en_US"],
    },
    twitter: {
      card: "summary",
      title: "Elvis Murati — Zhvillues Full Stack",
      description:
        "Zhvillim full-stack, ndërfaqe të menduara dhe aplikacione web të besueshme.",
    },
  };
}

export default function AlbanianHome() {
  return <Portfolio locale="sq" />;
}
