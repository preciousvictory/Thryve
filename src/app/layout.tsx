import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/landingPage/Navbar";

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thryve",
  description: "Learn Faster  with AI tools & Competitive games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${golosText.variable} antialiased`}
      >
        <div className="bg-white text-black font-sans">
          <div className="bg-[var(--primary)] text-white flex flex-col items-center justify-center py-4 p-4">
            <p className="text-center text-sm text-white">🎉 Master Thryve in a Week! Enjoy AI-powered learning, interactive challenges, and an exclusive 50% Early Bird discount. Start now! 🎉</p>
          </div>
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
