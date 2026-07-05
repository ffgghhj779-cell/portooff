import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Menu } from "@/components/Menu";
import { ScrollThemeController } from "@/components/ScrollThemeController";
import { MotionPreferenceProvider } from "@/components/MotionPreferenceProvider";
import { ScrollLayoutStabilizer } from "@/components/ScrollLayoutStabilizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tasami | Digital Agency",
  description: "We engineer competitive advantages through elite digital craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased selection:bg-white/10 selection:text-white`}
      >
        <MotionPreferenceProvider>
          <CustomCursor />
          <Menu />
          <SmoothScroll>
            <ScrollLayoutStabilizer />
            <ScrollThemeController>{children}</ScrollThemeController>
          </SmoothScroll>
        </MotionPreferenceProvider>
      </body>
    </html>
  );
}
