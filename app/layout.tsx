import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  applicationName: "Elvis Murati",
  title: {
    default: "Elvis Murati — Full Stack Developer",
    template: "%s | Elvis Murati",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
