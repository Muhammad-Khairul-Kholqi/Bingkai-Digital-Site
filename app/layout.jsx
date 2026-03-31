import "@/app/styles/globals.css";
import Navbar from "@/app/components/global/Navbar";
import CustomCursor from "@/app/components/global/CustomCursor";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}