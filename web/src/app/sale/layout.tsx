import type { Metadata } from "next";
import { Prompt, Noto_Sans_Thai, Cormorant_Garamond } from "next/font/google";
import "../globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Nutralist Probio Pro Plus+ | หยุดวงจรรักษาแล้วกลับมาเป็นซ้ำ",
  description:
    "โพรไบโอติก 2 สายพันธุ์ที่ศึกษาทางคลินิก 10,000 ล้าน CFU ช่วยฟื้นฟูสมดุลจุลินทรีย์ผู้หญิงจากภายใน",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function SaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${notoSansThai.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden pb-[76px]">{children}</body>
    </html>
  );
}
