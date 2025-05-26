import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import "../lib/fontawesome";
import "@fontsource/poppins/600.css";
import ScrollWrapper from "@/components/Locomotive-Scroll/ScrollWrapper";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorPage from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";
import Analytics from "./Analytics";

export const metadata = {
  title: "Qualitech Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className="bg-zinc-200 text-black">
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
