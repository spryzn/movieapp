import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import ThemeCom from "../components/ThemeCom";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Movie Rating",
  description: "Next.js 16 + Tailwind v4 Dark Mode Example",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeCom>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </ThemeCom>
        </body>
      </html>
    </ClerkProvider>
  );
}
