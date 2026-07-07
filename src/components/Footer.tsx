import Link from "next/link";
import LineButton from "@/components/LineButton";

export default function Footer() {
  return (
    <footer className="bg-dark text-[#C9C0D0]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 md:gap-9">
        <div className="col-span-2 md:col-span-1">
          <div className="font-heading text-2xl font-semibold text-white">
            Nutra<span className="text-pink">list</span>
          </div>
          <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[#9F96A8]">
            โพรไบโอติกเพื่อสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิง สมดุลที่เริ่มจากภายใน
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-semibold text-white">เมนู</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/product" className="text-[#9F96A8]">สินค้า</Link>
            <Link href="/science" className="text-[#9F96A8]">งานวิจัย</Link>
            <Link href="/reviews" className="text-[#9F96A8]">รีวิว</Link>
            <Link href="/faq" className="text-[#9F96A8]">FAQ</Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-semibold text-white">ช่วยเหลือ</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/contact" className="text-[#9F96A8]">ติดต่อเรา</Link>
            <Link href="/faq" className="text-[#9F96A8]">การจัดส่ง</Link>
            <Link href="/about" className="text-[#9F96A8]">เกี่ยวกับเรา</Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-semibold text-white">ติดต่อ</div>
          <div className="flex flex-col gap-2.5 text-sm text-[#9F96A8]">
            <span>LINE: @nutralist</span>
            <span>care@nutralist.co.th</span>
            <div className="mt-1">
              <LineButton label="ทักไลน์" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-soft px-4 py-4.5 text-center text-[12.5px] text-[#7E7488] sm:px-6">
        © 2026 Nutralist · ผลิตภัณฑ์เสริมอาหาร ไม่มีผลในการป้องกันหรือรักษาโรค · ควรปรึกษาแพทย์หากมีอาการผิดปกติ
      </div>
    </footer>
  );
}
