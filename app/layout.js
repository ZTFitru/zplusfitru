import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
})

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZplusFitru",
  description: "My personal portfolio ",
  icons: {
    icon: [
      {
        url: '/ZFLogo.png',
        href: '/ZFLogo.png'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.className} ${poppins.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
        <Analytics />
        <Chatbot />
      </body>
    </html>
  );
}
