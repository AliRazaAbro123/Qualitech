import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import "../lib/fontawesome";
import "@fontsource/poppins/500.css";
import ScrollWrapper from "@/components/Locomotive-Scroll/ScrollWrapper";

export const metadata = {
  title: "Ali Raza",
  description: "I'm AliRaza a Full Stack Mern Engineer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030108] text-white">
        <ScrollWrapper>
          <Header />
          {children}
          <Footer />
        </ScrollWrapper>
      </body>
    </html>
  );
}
