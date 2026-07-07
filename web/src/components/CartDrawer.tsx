"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { baht } from "@/lib/content";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, changeQty, removeItem, subtotal } = useCart();
  const router = useRouter();

  if (!cartOpen) return null;

  return (
    <div>
      <div
        className="fixed inset-0 z-90 bg-ink/42 backdrop-blur-[2px]"
        onClick={() => setCartOpen(false)}
      />
      <aside className="fixed inset-y-0 right-0 z-91 flex w-full max-w-[400px] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-6">
          <div className="font-heading text-lg font-semibold text-ink">ตะกร้าของคุณ</div>
          <button
            aria-label="ปิด"
            onClick={() => setCartOpen(false)}
            className="text-2xl leading-none text-muted"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          {cart.length === 0 ? (
            <div className="py-12 text-center text-muted-soft">
              <div className="text-4xl">🛒</div>
              <p className="mt-3">ตะกร้ายังว่างอยู่</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="mb-4 flex items-center gap-3.5">
                <div className="flex h-[58px] w-[58px] flex-none items-center justify-center rounded-xl bg-tint text-2xl">
                  🧴
                </div>
                <div className="flex-1">
                  <div className="text-[14.5px] font-semibold text-ink">{item.name}</div>
                  <div className="text-[13px] font-semibold text-pink-deep">{baht(item.price)}</div>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border border-border-strong text-base text-pink-deep"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border border-border-strong text-base text-pink-deep"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[13px] text-muted-soft"
                >
                  ลบ
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border px-5 py-5 sm:px-6">
            <div className="mb-3.5 flex justify-between font-heading text-lg font-bold text-ink">
              <span>รวม</span>
              <span className="text-pink-deep">{baht(subtotal)}</span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                router.push("/checkout");
              }}
              className="w-full rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-6 py-4 text-base font-bold text-white shadow-lg"
            >
              ดำเนินการชำระเงิน
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
