import "@/app/styles/globals.css";
import Navbar from "@/app/components/global/Navbar";
import CustomCursor from "@/app/components/global/CustomCursor";
import FooterSection from "./components/global/Footer";
import MetaHandler from "@/app/components/global/MetaHandler";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});

export const metadata = {
  title: {
    default: "Bingkai Digital — UI Kits & Web Templates",
    template: "%s | Bingkai Digital"
  },
  description: "Ready-to-use Figma UI kits and website code templates to help developers, startups, and creators launch landing pages faster. Modern design, clean code, and SEO optimized.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="google-site-verification" content="T_2_b1DfuXVFG2mxtyaRZxlKtM-ClYq0gPMKQmlHynI" />
        <MetaHandler />
      </head>
      <body className={plusJakartaSans.className}>
        <CustomCursor />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}