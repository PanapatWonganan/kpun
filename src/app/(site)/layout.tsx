import type { Metadata } from "next";
import { Prompt, Noto_Sans_Thai, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { PROMO_TEXT } from "@/lib/content";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nutralist | สมดุลจุดซ่อนเร้น เริ่มจากภายใน",
  description:
    "Nutralist Probio Pro Plus+ La-14® โพรไบโอติก 2 สายพันธุ์ 10,000 ล้าน CFU ที่ผ่านการศึกษาทางคลินิก ช่วยฟื้นฟูสมดุลจุลินทรีย์ผู้หญิง",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${notoSansThai.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <CartProvider>
          <div className="bg-gradient-to-r from-pink-deep to-pink px-4 py-2.5 text-center text-[13.5px] font-medium tracking-[.2px] text-white">
            {PROMO_TEXT}
          </div>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
