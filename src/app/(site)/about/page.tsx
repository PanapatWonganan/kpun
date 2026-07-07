import { VALUES } from "@/lib/content";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-[820px] px-4 py-14 text-center sm:px-6 sm:py-16">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">เกี่ยวกับเรา</div>
        <h1 className="mx-auto mt-3 font-heading text-[28px] font-semibold text-ink sm:text-[38px]">
          สุขภาพภายในของผู้หญิง คือสิ่งที่เราใส่ใจ
        </h1>
        <p className="mt-5 text-[17px] leading-loose text-body">
          Nutralist ก่อตั้งขึ้นด้วยความเชื่อว่าผู้หญิงทุกคนควรมั่นใจในสุขภาพจุดซ่อนเร้นของตัวเองได้ทุกวัน
          เราจึงคัดสรรโพรไบโอติกสายพันธุ์ที่ผ่านการศึกษาทางคลินิกจากผู้ผลิตวัตถุดิบระดับโลก
          มาพัฒนาเป็นผลิตภัณฑ์ที่ปลอดภัย มีคุณภาพ และใช้ได้จริงในชีวิตประจำวัน
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-[20px] bg-tint p-7 text-center">
              <div className="text-[30px]">{v.icon}</div>
              <div className="mt-3 font-heading text-[19px] font-semibold text-ink">{v.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-body-soft">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 pb-20 pt-10 sm:px-6">
        <div className="rounded-3xl bg-green-deep px-6 py-10 text-center sm:px-12 sm:py-12">
          <div className="text-sm font-semibold tracking-[1px] text-[#CFE3D6]">พันธมิตรวัตถุดิบระดับโลก</div>
          <div className="mt-5 flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="text-xl font-bold text-white sm:text-2xl">GGC</div>
            <div className="text-xl font-bold text-white sm:text-2xl">IFF Health Sciences</div>
            <div className="text-xl font-bold text-white sm:text-2xl">HOWARU®</div>
          </div>
        </div>
      </section>
    </div>
  );
}
