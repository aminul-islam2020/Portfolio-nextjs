import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-geist-sans",
  subsets: ["latin"], weight: ["400",]
});

export const metadata = {
  title: "NextJs Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
