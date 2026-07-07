"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { baht } from "@/lib/content";

export default function CheckoutPage() {
  const { cart, subtotal, shippingCost } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-[1000px] px-4 py-16 text-center sm:px-6">
        <h1 className="font-heading text-[26px] font-semibold text-ink sm:text-[32px]">ชำระเงิน</h1>
        <div className="py-16">
          <div className="text-4xl">🛒</div>
          <p className="my-5.5 text-muted">ยังไม่มีสินค้าในตะกร้า</p>
          <button
            onClick={() => router.push("/product")}
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-7 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(196,24,106,0.28)]"
          >
            เลือกสินค้า
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-9 sm:px-6 sm:py-11">
      <h1 className="mb-6.5 font-heading text-[26px] font-semibold text-ink sm:text-[32px]">ชำระเงิน</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-7">
          <div className="mb-4.5 font-heading text-[19px] font-semibold text-ink">ข้อมูลการจัดส่ง</div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input className="w-full rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none" placeholder="ชื่อ" />
            <input className="w-full rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none" placeholder="นามสกุล" />
            <input
              className="w-full rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none sm:col-span-2"
              placeholder="เบอร์โทร"
            />
            <textarea
              className="w-full resize-y rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none sm:col-span-2"
              rows={3}
              placeholder="ที่อยู่จัดส่ง"
            />
          </div>

          <div className="mb-4.5 mt-6 font-heading text-[19px] font-semibold text-ink">วิธีชำระเงิน</div>
          <div className="flex flex-col gap-2.5">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border-strong px-4 py-3.5 text-[15px]">
              <input type="radio" name="pay" defaultChecked className="accent-pink" /> โอนผ่านธนาคาร / พร้อมเพย์
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border-strong px-4 py-3.5 text-[15px]">
              <input type="radio" name="pay" className="accent-pink" /> เก็บเงินปลายทาง (COD)
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border-strong px-4 py-3.5 text-[15px]">
              <input type="radio" name="pay" className="accent-pink" /> บัตรเครดิต / เดบิต
            </label>
          </div>
        </div>

        <div className="rounded-3xl bg-tint p-6.5 lg:sticky lg:top-[90px] lg:self-start">
          <div className="mb-4 font-heading text-lg font-semibold text-ink">สรุปคำสั่งซื้อ</div>
          <div className="flex flex-col gap-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[14.5px] text-ink-soft">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span className="font-semibold">{baht(item.price * item.qty)}</span>
              </div>
            ))}
          </div>

          <div className="my-4 flex flex-col gap-2 border-t border-dashed border-[#E7B9CF] pt-4">
            <div className="flex justify-between text-sm text-body">
              <span>ยอดสินค้า</span>
              <span>{baht(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-body">
              <span>ค่าจัดส่ง</span>
              <span>{shippingCost === 0 ? "ฟรี" : baht(shippingCost)}</span>
            </div>
            <div className="mt-1 flex justify-between font-heading text-[19px] font-bold text-pink-deep">
              <span>รวมทั้งสิ้น</span>
              <span>{baht(subtotal + shippingCost)}</span>
            </div>
          </div>

          <button className="w-full rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(196,24,106,0.28)]">
            ยืนยันคำสั่งซื้อ
          </button>
          <div className="mt-3 text-center text-[12.5px] text-muted">
            ข้อมูลของคุณปลอดภัย · จัดส่งภายใน 1–3 วันทำการ
          </div>
        </div>
      </div>
    </div>
  );
}
