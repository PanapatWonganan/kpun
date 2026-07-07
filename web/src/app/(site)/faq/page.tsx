"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[820px] px-4 py-14 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">คำถามที่พบบ่อย</div>
        <h1 className="mx-auto mt-3 font-heading text-[28px] font-semibold text-ink sm:text-[38px]">
          เรื่องที่คุณอาจอยากรู้
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-[22px]"
              >
                <span className="font-heading text-[15.5px] font-semibold text-ink sm:text-[16.5px]">{f.q}</span>
                <span className="flex-none text-xl text-pink">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-[15px] leading-relaxed text-body sm:px-[22px]">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
