import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HASSOUNA-SHOP",
  description: "Generated by HASSOUNA-SHOP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
