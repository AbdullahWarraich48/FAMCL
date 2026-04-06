import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Aleo } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/navbar";
import { FAM_LOGO_PNG } from "@/constants/siteAssets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/** Same asset as navbar; used for tab / PWA icons (replaces default favicon). */
const SITE_ICON = FAM_LOGO_PNG;

const SITE_NAME = "FAMCL";
const SITE_DESCRIPTION = "FAM Chartered Accountants";

/**
 * Browsers show `title` in the tab and usually the full title on hover — not `description`.
 * Child pages can set `title: "Page"` and get "Page | FAMCL" via `template`.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_DESCRIPTION}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} | ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [{ url: SITE_ICON, type: "image/png" }],
    apple: [{ url: SITE_ICON, type: "image/png" }],
    shortcut: SITE_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${aleo.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
