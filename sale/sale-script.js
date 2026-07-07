(() => {
  const DATA = {
    heroTicks: ['10 พันล้าน CFU ต่อแคปซูล', 'วัตถุดิบ HOWARU® จาก USA', 'ไม่ต้องแช่เย็น'],
    pains: [
      'เป็นๆ หายๆ รักษาแล้วก็กลับมาเป็นซ้ำ',
      'มีกลิ่นหรือตกขาวผิดปกติที่กวนใจ',
      'ต้องพึ่งยาปฏิชีวนะบ่อยจนกังวล',
      'รู้สึกไม่สบายตัว คัน หรือระคายเคือง',
      'สมดุลเปลี่ยนหลังมีประจำเดือนหรือใช้ยา',
      'ขาดความมั่นใจในชีวิตประจำวันและความสัมพันธ์',
    ],
    strains: [
      { code: 'STRAIN 01', name: 'Lactobacillus acidophilus', desc: 'HOWARU® La-14® สายพันธุ์ที่ศึกษาเพื่อฟื้นฟูสมดุลจุลินทรีย์และรักษาความเป็น Lactobacillus dominance' },
      { code: 'STRAIN 02', name: 'Lacticaseibacillus Rhamnosus', desc: 'HN001™ สนับสนุนภูมิคุ้มกันและสมดุลจุลินทรีย์ผ่านแกนลำไส้–ช่องคลอด' },
    ],
    mechanism: [
      { n: '1', title: 'ฟื้นฟูจุลินทรีย์', desc: 'สร้าง Lactobacillus dominance กลับคืน หลังถูกทำลายจากการรักษา' },
      { n: '2', title: 'เสริมเกราะป้องกัน', desc: 'เพิ่มการเกาะยึดของแบคทีเรียดี ปกป้องเยื่อบุตามธรรมชาติ' },
      { n: '3', title: 'รักษาค่า pH', desc: 'คงค่า pH ที่เหมาะสม 3.8–4.5 ลดโอกาสการติดเชื้อซ้ำ' },
    ],
    evidence: [
      { icon: '🧪', title: 'Safety · Stability · Efficacy', desc: 'ทดสอบครบด้านความปลอดภัยและประสิทธิภาพ' },
      { icon: '🚫', title: 'ไม่ดื้อยาปฏิชีวนะ', desc: 'ทดสอบ virulence และ toxicogenic properties' },
      { icon: '📚', title: 'หลักฐานทางคลินิก', desc: 'สายพันธุ์มีงานวิจัยด้านสุขภาพผู้หญิงรองรับ' },
    ],
    before: ['รักษาแล้วกลับมาเป็นซ้ำเรื่อยๆ', 'พึ่งยาปฏิชีวนะบ่อย', 'กังวลเรื่องกลิ่นและความสะอาด', 'ขาดความมั่นใจในทุกวัน'],
    after: ['สมดุลจุลินทรีย์ฟื้นฟู ลดการเป็นซ้ำ', 'ลดการพึ่งยา ดูแลจากต้นเหตุ', 'รู้สึกสบายตัวและสะอาดขึ้น', 'กลับมามั่นใจในทุกช่วงชีวิต'],
    reviews: [
      { initial: 'พ', name: 'คุณพิมพ์ชนก · 34', tag: 'ใช้ต่อเนื่อง 3 เดือน', text: 'เคยเป็นๆ หายๆ มาเป็นปี พอกินตัวนี้ต่อจากที่หมอสั่ง ไม่กลับมาเป็นซ้ำอีกเลย มั่นใจขึ้นมาก' },
      { initial: 'ก', name: 'คุณกานต์ · 29', tag: 'เตรียมตั้งครรภ์', text: 'คุณหมอแนะนำให้ดูแลสมดุลก่อนทำ IVF เลือกตัวนี้เพราะสายพันธุ์มีงานวิจัย กินง่ายไม่ต้องแช่เย็น' },
      { initial: 'ธ', name: 'คุณธนพร · 31', tag: 'ใช้ต่อเนื่อง 2 เดือน', text: 'แพ็ก 3 กระปุกคุ้มมาก ส่งไว ทักไลน์ถามอะไรทีมงานตอบดีมาก อาการนิ่งขึ้นเยอะ' },
    ],
    bundles: [
      { id: 'x1', name: '1 กระปุก', sub: 'ทดลอง 1 เดือน', price: '฿990', was: '฿1,290', perLabel: '฿990 / กระปุก', popular: false, save: false, saveLabel: '', ship: 'จัดส่ง ฿60' },
      { id: 'x3', name: '3 กระปุก', sub: 'คอร์ส 3 เดือน', price: '฿2,490', was: '฿3,870', perLabel: 'เฉลี่ย ฿830 / กระปุก', popular: true, save: true, saveLabel: 'ประหยัด ฿1,380', ship: '✓ ส่งฟรี' },
      { id: 'x6', name: '6 กระปุก', sub: 'ดูแลต่อเนื่อง 6 เดือน', price: '฿4,290', was: '฿7,740', perLabel: 'เฉลี่ย ฿715 / กระปุก', popular: false, save: true, saveLabel: 'ประหยัด ฿3,450', ship: '✓ ส่งฟรี' },
    ],
    faqs: [
      { q: 'ต้องกินนานแค่ไหนถึงเห็นผล?', a: 'ผู้ใช้ส่วนใหญ่รู้สึกดีขึ้นภายใน 2–4 สัปดาห์ แนะนำต่อเนื่อง 1–3 เดือนเพื่อฟื้นฟูสมดุลระยะยาว' },
      { q: 'กินระหว่างใช้ยาปฏิชีวนะได้ไหม?', a: 'ได้และแนะนำ เพื่อช่วยฟื้นฟูจุลินทรีย์ดีหลังการรักษา ควรเว้นระยะจากยาปฏิชีวนะประมาณ 2 ชั่วโมง' },
      { q: 'ต้องแช่เย็นไหม?', a: 'ไม่ต้อง ด้วยเทคโนโลยีความคงตัว โพรไบโอติกยังมีชีวิตโดยไม่ต้องแช่เย็น' },
      { q: 'คนตั้งครรภ์/เตรียม IVF กินได้ไหม?', a: 'สายพันธุ์มีการศึกษาด้านความปลอดภัย เหมาะกับช่วงเตรียมตั้งครรภ์ IVF และหลังคลอด แต่ควรปรึกษาแพทย์ก่อน' },
      { q: 'สั่งซื้อและจัดส่งอย่างไร?', a: 'ทักไลน์ @nutralist เพื่อสั่งซื้อและรับคำแนะนำ จัดส่งทั่วประเทศ 1–3 วันทำการ ส่งฟรีเมื่อซื้อ 3 กระปุกขึ้นไป' },
    ],
  };

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderHeroTicks() {
    const wrap = document.getElementById('hero-ticks');
    DATA.heroTicks.forEach((t) => {
      const tick = el('div', 'tick');
      tick.innerHTML = `<span class="tick__mark">✓</span>${t}`;
      wrap.appendChild(tick);
    });
  }

  function renderPains() {
    const wrap = document.getElementById('pain-grid');
    DATA.pains.forEach((p) => {
      const item = el('div', 'pain-item');
      item.innerHTML = `<span class="pain-item__mark">✓</span><span class="pain-item__text">${p}</span>`;
      wrap.appendChild(item);
    });
  }

  function renderStrains() {
    const wrap = document.getElementById('strain-grid');
    DATA.strains.forEach((s) => {
      const card = el('div', 'strain-card');
      card.innerHTML = `
        <div class="strain-card__code">${s.code}</div>
        <div class="strain-card__name">${s.name}</div>
        <div class="strain-card__desc">${s.desc}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderMechanism() {
    const wrap = document.getElementById('mechanism-grid');
    DATA.mechanism.forEach((m) => {
      const card = el('div', 'mechanism-card');
      card.innerHTML = `
        <div class="mechanism-card__n">${m.n}</div>
        <div class="mechanism-card__title">${m.title}</div>
        <div class="mechanism-card__desc">${m.desc}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderEvidence() {
    const wrap = document.getElementById('evidence-grid');
    DATA.evidence.forEach((e) => {
      const card = el('div', 'evidence-card');
      card.innerHTML = `
        <div class="evidence-card__icon">${e.icon}</div>
        <div class="evidence-card__title">${e.title}</div>
        <div class="evidence-card__desc">${e.desc}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderBeforeAfter() {
    const beforeWrap = document.getElementById('before-list');
    DATA.before.forEach((b) => {
      const row = el('div', 'ba-row ba-row--before');
      row.innerHTML = `<span class="ba-row__mark">✕</span>${b}`;
      beforeWrap.appendChild(row);
    });
    const afterWrap = document.getElementById('after-list');
    DATA.after.forEach((a) => {
      const row = el('div', 'ba-row ba-row--after');
      row.innerHTML = `<span class="ba-row__mark">✓</span>${a}`;
      afterWrap.appendChild(row);
    });
  }

  function renderReviews() {
    const wrap = document.getElementById('review-grid');
    DATA.reviews.forEach((r) => {
      const card = el('div', 'review-card');
      card.innerHTML = `
        <div class="review-card__stars">★★★★★</div>
        <p class="review-card__text">${r.text}</p>
        <div class="review-card__person">
          <div class="review-card__avatar">${r.initial}</div>
          <div>
            <div class="review-card__name">${r.name}</div>
            <div class="review-card__tag">${r.tag}</div>
          </div>
        </div>`;
      wrap.appendChild(card);
    });
  }

  function renderBundles() {
    const wrap = document.getElementById('bundle-grid');
    DATA.bundles.forEach((b) => {
      const card = el('div', `bundle-card${b.popular ? ' bundle-card--popular' : ''}`);
      card.innerHTML = `
        ${b.popular ? '<div class="bundle-card__ribbon">⭐ ยอดนิยม · คุ้มสุด</div>' : ''}
        <div class="bundle-card__name">${b.name}</div>
        <div class="bundle-card__sub">${b.sub}</div>
        <div class="bundle-card__price"><span>${b.price}</span></div>
        <div class="bundle-card__was">ปกติ ${b.was}</div>
        <div class="bundle-card__per">${b.perLabel}</div>
        ${b.save ? `<div class="bundle-card__save">${b.saveLabel}</div>` : ''}
        <a href="https://line.me/R/ti/p/@nutralist" target="_blank" rel="noopener" class="bundle-card__cta">สั่งซื้อทางไลน์</a>
        <div class="bundle-card__ship">${b.ship}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderFaqs() {
    const wrap = document.getElementById('faq-list');
    DATA.faqs.forEach((f) => {
      const item = el('div', 'faq-item');
      item.innerHTML = `
        <button type="button" class="faq-item__q">
          <span class="faq-item__q-text">${f.q}</span>
          <span class="faq-item__sign">+</span>
        </button>
        <div class="faq-item__a">${f.a}</div>`;
      const btn = item.querySelector('.faq-item__q');
      const sign = item.querySelector('.faq-item__sign');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.toggle('is-open');
        sign.textContent = isOpen ? '−' : '+';
      });
      wrap.appendChild(item);
    });
  }

  function startCountdown() {
    const STORAGE_KEY = 'np_sale_deadline';
    const DURATION_MS = 20 * 60 * 1000;
    const now = Date.now();
    let deadline = parseInt(localStorage.getItem(STORAGE_KEY), 10) || null;
    if (!deadline || deadline < now) {
      deadline = now + DURATION_MS;
      try { localStorage.setItem(STORAGE_KEY, String(deadline)); } catch (e) {}
    }

    const targets = document.querySelectorAll('[data-countdown]');

    function tick() {
      const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      const m = Math.floor(remaining / 60);
      const s = remaining % 60;
      const label = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      targets.forEach((node) => { node.textContent = label; });
    }

    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeroTicks();
    renderPains();
    renderStrains();
    renderMechanism();
    renderEvidence();
    renderBeforeAfter();
    renderReviews();
    renderBundles();
    renderFaqs();
    startCountdown();
  });
})();
