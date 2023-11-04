import { Footer, Navigation } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Specfic Tools & Techniques Limited",
  description:
    "Specific Tools & Techniques Ltd (ST&T) started its operations in 2007 to provide engineering and integrated facility management services to optimize productivity and enabling customers to concentrate on their core line of businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
