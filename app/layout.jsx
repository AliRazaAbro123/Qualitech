import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import "../lib/fontawesome";
import "@fontsource/poppins/500.css";
import ScrollWrapper from "@/components/Locomotive-Scroll/ScrollWrapper";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorPage from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";
import Analytics from "./Analytics";

export const metadata = {
  title: "Ali Stacker - Full Stack MERN Developer",
  description:
    "I'm Ali Raza, a passionate Full Stack MERN Engineer specializing in building dynamic and scalable web applications.",
  openGraph: {
    type: "website",
    url: "https://alistacker.vercel.app/", // Add the correct URL
    title: "Ali Stacker - Full Stack MERN Developer",
    description:
      "I'm Ali Raza, a passionate Full Stack MERN Engineer specializing in building dynamic and scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4SMSJP6WDY"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4SMSJP6WDY');
          `}
        </Script>
        {/* Meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Ali Raza" />
        <meta
          name="keywords"
          content="Ali Raza, Full Stack Developer, MERN, Web Development"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />

        {/* Add your favicon here */}
        <link rel="icon" href="/favicon.ico" />

        <title>{metadata.title}</title>
      </head>
      <body className="bg-[#030108] text-white">
        <ErrorBoundary fall={<ErrorPage />}>
          <Suspense fallback={<Loading />}>
            <ScrollWrapper>
              <Analytics />
              <Header />
              {children}
              <Footer />
            </ScrollWrapper>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
