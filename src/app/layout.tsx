import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SunnyOverlay } from "@/components/sunny-overlay";
import { getAllPosts } from "@/lib/mdx";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SITE_URL = "https://krishmula.github.io";
const DESCRIPTION =
  "Krishna Mula is a software engineer and CS grad student working on distributed systems, GPU inference, and event-driven AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krishna Mula",
    template: "%s | Krishna Mula",
  },
  description: DESCRIPTION,
  authors: [{ name: "Krishna Mula", url: SITE_URL }],
  creator: "Krishna Mula",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Krishna Mula",
    title: "Krishna Mula",
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Krishna Mula" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Mula",
    description: DESCRIPTION,
    creator: "@krxnaaa",
    images: ["/og.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogs = await getAllPosts("blogs");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SunnyOverlay />
          <div className="relative z-10 flex flex-col md:flex-row min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
            <aside className="w-full md:w-64 flex-shrink-0">
              <Sidebar showBlogs={blogs.length > 0} />
            </aside>
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
