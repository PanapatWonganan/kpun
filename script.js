(() => {
  const LINE_URL = 'https://line.me/R/ti/p/@nutralist';

  const state = {
    page: 'home',
    cartOpen: false,
    cart: [],
    selectedBundle: 'x3',
    tab: 'desc',
    openFaq: 0,
    checkoutOpenFaq: -1,
  };

  const CONTENT = {
    promoText: '🎉 ส่งฟรีทั่วประเทศเมื่อซื้อ 3 กระปุกขึ้นไป · ทักไลน์รับส่วนลดพิเศษ',
    nav: [
      { id: 'home', label: 'หน้าแรก' },
      { id: 'product', label: 'สินค้า' },
      { id: 'science', label: 'งานวิจัย' },
      { id: 'reviews', label: 'รีวิว' },
      { id: 'about', label: 'เกี่ยวกับเรา' },
      { id: 'faq', label: 'FAQ' },
      { id: 'contact', label: 'ติดต่อ' },
    ],
    bundles: [
      { id: 'x1', name: '1 กระปุก', sub: 'ทดลอง 1 เดือน', qty: 1, price: 990, was: 1290, perLabel: '฿990 / กระปุก', popular: false },
      { id: 'x3', name: '3 กระปุก', sub: 'คอร์ส 3 เดือน', qty: 3, price: 2490, was: 3870, perLabel: '฿830 / กระปุก', popular: true },
      { id: 'x6', name: '6 กระปุก', sub: 'ดูแลต่อเนื่อง 6 เดือน', qty: 6, price: 4290, was: 7740, perLabel: '฿715 / กระปุก', popular: false },
    ],
    partners: ['GGC', 'IFF', 'HOWARU'],
    prodChips: ['BV / VVC Support', 'IVF & Prenatal', '10 พันล้าน CFU', 'ไม่ต้องแช่เย็น'],
    problems: [
      { icon: '🔁', title: 'กลับมาเป็นซ้ำ', desc: 'รักษาหายแล้วก็กลับมาเป็นอีก วนซ้ำไม่จบ' },
      { icon: '💊', title: 'พึ่งยาบ่อย', desc: 'ยาปฏิชีวนะช่วยชั่วคราว แต่ทำลายจุลินทรีย์ดี' },
      { icon: '⚖️', title: 'สมดุลเสีย', desc: 'Lactobacillus ลดลง ค่า pH เปลี่ยน เกราะป้องกันอ่อนแอ' },
      { icon: '😟', title: 'ขาดความมั่นใจ', desc: 'ความไม่สบายตัวกระทบชีวิตประจำวันและความมั่นใจ' },
    ],
    strains: [
      { code: 'STRAIN 01', name: 'Lactobacillus acidophilus', desc: 'HOWARU® La-14® สายพันธุ์ที่ศึกษาเพื่อฟื้นฟูสมดุลจุลินทรีย์และรักษาความเป็น Lactobacillus dominance' },
      { code: 'STRAIN 02', name: 'Lacticaseibacillus Rhamnosus', desc: 'HN001™ สนับสนุนภูมิคุ้มกันและสมดุลจุลินทรีย์ผ่านแกนลำไส้–ช่องคลอด' },
    ],
    benefits: [
      { icon: '🌸', title: 'ฟื้นฟูสมดุล', desc: 'สร้าง Lactobacillus dominance กลับคืนสู่จุดซ่อนเร้น' },
      { icon: '🛡️', title: 'เสริมเกราะป้องกัน', desc: 'เพิ่มการเกาะยึดของแบคทีเรียดี ปกป้องเยื่อบุ' },
      { icon: '⚗️', title: 'รักษา pH', desc: 'คงค่า pH ที่เหมาะสม 3.8–4.5 ลดโอกาสติดเชื้อ' },
      { icon: '🔬', title: 'มีงานวิจัยรองรับ', desc: 'สายพันธุ์ผ่านการศึกษาทางคลินิกด้านความปลอดภัยและประสิทธิภาพ' },
      { icon: '❄️', title: 'ไม่ต้องแช่เย็น', desc: 'เทคโนโลยีความคงตัว คงจำนวนจุลินทรีย์มีชีวิต' },
      { icon: '🤰', title: 'ดูแลทุกช่วงชีวิต', desc: 'ประจำวัน BV/VVC เตรียม IVF ตั้งครรภ์ และหลังคลอด' },
    ],
    evidence: [
      { icon: '🧪', title: 'Safety · Stability · Efficacy', desc: 'ผ่านการทดสอบความปลอดภัย ความคงตัว และประสิทธิภาพ' },
      { icon: '🚫', title: 'ไม่ดื้อยาปฏิชีวนะ', desc: 'ทดสอบ virulence, toxicogenic properties และการไม่ดื้อยา' },
      { icon: '📚', title: 'หลักฐานทางคลินิก', desc: 'สายพันธุ์มีงานวิจัยสนับสนุนด้านสุขภาพจุดซ่อนเร้นของผู้หญิง' },
    ],
    values: [
      { icon: '🔬', title: 'อิงงานวิจัย', desc: 'ทุกสายพันธุ์คัดจากหลักฐานทางคลินิก ไม่ใช่การคาดเดา' },
      { icon: '🤝', title: 'วัตถุดิบระดับโลก', desc: 'ร่วมกับ IFF Health Sciences (HOWARU®) และพันธมิตรที่เชื่อถือได้' },
      { icon: '💗', title: 'ใส่ใจผู้หญิง', desc: 'ออกแบบเพื่อความมั่นใจและความสบายใจในทุกวัน' },
    ],
    faqs: [
      { q: 'Nutralist ต่างจากโพรไบโอติกทั่วไปอย่างไร?', a: 'Nutralist คัดสายพันธุ์ที่ศึกษาเพื่อสุขภาพจุดซ่อนเร้นของผู้หญิงโดยเฉพาะ (HOWARU® La-14® และ HN001™) ทำงานผ่านแกนลำไส้–ช่องคลอด ไม่ใช่โพรไบโอติกสำหรับลำไส้ทั่วไป' },
      { q: 'ต้องกินนานแค่ไหนถึงเห็นผล?', a: 'ผู้ใช้ส่วนใหญ่รู้สึกถึงความสมดุลที่ดีขึ้นภายใน 2–4 สัปดาห์ แนะนำให้กินต่อเนื่องอย่างน้อย 1–3 เดือนเพื่อฟื้นฟูสมดุลจุลินทรีย์ระยะยาว' },
      { q: 'กินระหว่างใช้ยาปฏิชีวนะได้ไหม?', a: 'ได้ และแนะนำอย่างยิ่งเพื่อช่วยฟื้นฟูจุลินทรีย์ดีหลังการรักษา ควรเว้นระยะห่างจากยาปฏิชีวนะประมาณ 2 ชั่วโมง' },
      { q: 'ต้องแช่เย็นหรือไม่?', a: 'ไม่ต้อง ด้วยเทคโนโลยีความคงตัวเฉพาะ ทำให้โพรไบโอติกยังมีชีวิตในรูปแบบแคปซูลโดยไม่ต้องแช่เย็น เก็บในที่แห้งและเย็นได้เลย' },
      { q: 'คนตั้งครรภ์หรือเตรียม IVF กินได้ไหม?', a: 'สายพันธุ์ที่ใช้มีการศึกษาด้านความปลอดภัย เหมาะกับการดูแลช่วงเตรียมตั้งครรภ์ IVF และหลังคลอด แต่ควรปรึกษาแพทย์ผู้ดูแลก่อนเริ่มเสมอ' },
      { q: 'จัดส่งและชำระเงินอย่างไร?', a: 'จัดส่งทั่วประเทศภายใน 1–3 วันทำการ ฟรีค่าส่งเมื่อซื้อ 3 กระปุกขึ้นไป ชำระผ่านโอน/พร้อมเพย์ เก็บเงินปลายทาง หรือบัตรเครดิต' },
    ],
    reviewsAll: [
      { initial: 'พ', name: 'คุณพิมพ์ชนก · 34', tag: 'ใช้ต่อเนื่อง 3 เดือน', text: 'เคยเป็นๆ หายๆ มาเป็นปี พอกินตัวนี้ควบคู่กับที่หมอสั่ง รู้สึกว่าไม่กลับมาเป็นซ้ำอีกเลย มั่นใจขึ้นมาก' },
      { initial: 'ก', name: 'คุณกานต์ · 29', tag: 'เตรียมตั้งครรภ์', text: 'คุณหมอแนะนำให้ดูแลสมดุลก่อนทำ IVF เลือกตัวนี้เพราะสายพันธุ์มีงานวิจัย กินง่าย ไม่ต้องแช่เย็นด้วย' },
      { initial: 'ณ', name: 'คุณณัฐริกา · 41', tag: 'ดูแลประจำวัน', text: 'กินวันละเม็ดเป็นกิจวัตร รู้สึกสบายตัวขึ้น กลิ่นและความชุ่มชื้นดีขึ้นชัดเจนภายในเดือนแรก' },
      { initial: 'ส', name: 'คุณสุพิชญา · 37', tag: 'หลังใช้ยาปฏิชีวนะ', text: 'หลังกินยาฆ่าเชื้อแล้วมักกลับมาเป็นอีก รอบนี้กินโพรไบโอติกต่อ อาการนิ่งขึ้นเยอะ ไม่วนกลับมาแบบเดิม' },
      { initial: 'อ', name: 'คุณอรวรา · 45', tag: 'วัยหมดประจำเดือน', text: 'ช่วงวัยนี้สมดุลเปลี่ยนไปมาก ตัวนี้ช่วยให้รู้สึกสบายและมั่นใจขึ้น ทีมงานตอบไลน์ดีมากด้วย' },
      { initial: 'ธ', name: 'คุณธนพร · 31', tag: 'ใช้ต่อเนื่อง 2 เดือน', text: 'ราคาแพ็ก 3 กระปุกคุ้มมาก ส่งไว บรรจุภัณฑ์ดูดี พกพาสะดวก กินง่ายไม่มีกลิ่น' },
    ],
    doseRows: [
      { label: 'Daily Care', start: '1 แคปซูล/วัน', cont: 'ต่อเนื่องเพื่อสมดุลระยะยาว' },
      { label: 'BV (หลังยาปฏิชีวนะ)', start: '2 แคปซูล/วัน × 5 วัน', cont: '1 แคปซูล/วัน อีก 10 วัน (และช่วงมีประจำเดือน)' },
      { label: 'VVC (หลังยาปฏิชีวนะ)', start: '2 แคปซูล/วัน × 5 วัน', cont: '1 แคปซูล/วัน อีก 10 วัน (และช่วงมีประจำเดือน)' },
      { label: 'IVF Support', start: '2 แคปซูล/วัน', cont: 'เริ่มก่อนย้ายตัวอ่อน 2 เดือน' },
      { label: 'Prenatal', start: '2 แคปซูล/วัน', cont: 'ตั้งแต่สัปดาห์ที่ 14–16 ต่อเนื่องได้ถึง 6 เดือนหลังคลอด' },
    ],
    tabs: [
      { id: 'desc', label: 'รายละเอียด' },
      { id: 'ingr', label: 'ส่วนผสม' },
      { id: 'use', label: 'วิธีใช้' },
    ],
  };

  function baht(n) {
    return '฿' + n.toLocaleString('en-US');
  }

  function findBundle(id) {
    return CONTENT.bundles.find((b) => b.id === id);
  }

  function subtotal() {
    return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function totalQty() {
    return state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function shippingBottles() {
    return state.cart.reduce((sum, item) => {
      const b = findBundle(item.id);
      return sum + (b ? b.qty * item.qty : 0);
    }, 0);
  }

  function shippingCost() {
    return shippingBottles() >= 3 ? 0 : 60;
  }

  function addToCart(id) {
    const b = findBundle(id);
    const existing = state.cart.find((i) => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ id: b.id, name: b.name, price: b.price, qty: 1 });
    }
    state.cartOpen = true;
    render();
  }

  function changeQty(id, delta) {
    const item = state.cart.find((i) => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        state.cart = state.cart.filter((i) => i.id !== id);
      }
    }
    render();
  }

  function removeItem(id) {
    state.cart = state.cart.filter((i) => i.id !== id);
    render();
  }

  function go(page) {
    state.page = page;
    state.cartOpen = false;
    render();
    window.scrollTo(0, 0);
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function lineButton(className, label) {
    const a = el('a', className || 'btn btn--line');
    a.href = LINE_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.06.64.03.9l-.14.85c-.04.25-.2.98.86.53s5.72-3.37 7.8-5.77C21.13 13.4 22 11.86 22 10.13 22 5.64 17.52 2 12 2z"></path></svg>${label}`;
    return a;
  }

  /* ---------- Header / Footer / Cart ---------- */

  function renderHeader() {
    const header = el('header', 'site-header');
    const inner = el('div', 'site-header__inner');

    const brand = el('button', 'brand');
    brand.innerHTML = `<span class="brand__logo">N</span><span class="brand__name">Nutra<span class="accent">list</span></span>`;
    brand.addEventListener('click', () => go('home'));

    const nav = el('nav', 'main-nav');
    CONTENT.nav.forEach((item) => {
      const link = el('button', 'main-nav__link' + (state.page === item.id ? ' is-active' : ''), item.label);
      link.addEventListener('click', () => go(item.id));
      nav.appendChild(link);
    });

    const actions = el('div', 'header-actions');
    const cartBtn = el('button', 'cart-btn');
    cartBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>${totalQty() > 0 ? `<span class="cart-btn__badge">${totalQty()}</span>` : ''}`;
    cartBtn.addEventListener('click', () => {
      state.cartOpen = true;
      render();
    });

    actions.appendChild(cartBtn);
    actions.appendChild(lineButton('btn btn--line', 'ทักไลน์'));

    inner.appendChild(brand);
    inner.appendChild(nav);
    inner.appendChild(actions);
    header.appendChild(inner);
    return header;
  }

  function renderFooter() {
    const footer = el('footer', 'site-footer');
    const grid = el('div', 'site-footer__grid');

    const col1 = el('div');
    col1.innerHTML = `<div class="site-footer__brand">Nutra<span class="accent">list</span></div><p class="site-footer__desc">โพรไบโอติกเพื่อสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิง สมดุลที่เริ่มจากภายใน</p>`;

    const col2 = el('div');
    col2.innerHTML = `<div class="site-footer__heading">เมนู</div>`;
    const col2links = el('div', 'site-footer__links');
    [['product', 'สินค้า'], ['science', 'งานวิจัย'], ['reviews', 'รีวิว'], ['faq', 'FAQ']].forEach(([id, label]) => {
      const a = el('a', '', label);
      a.addEventListener('click', () => go(id));
      col2links.appendChild(a);
    });
    col2.appendChild(col2links);

    const col3 = el('div');
    col3.innerHTML = `<div class="site-footer__heading">ช่วยเหลือ</div>`;
    const col3links = el('div', 'site-footer__links');
    [['contact', 'ติดต่อเรา'], ['faq', 'การจัดส่ง'], ['about', 'เกี่ยวกับเรา']].forEach(([id, label]) => {
      const a = el('a', '', label);
      a.addEventListener('click', () => go(id));
      col3links.appendChild(a);
    });
    col3.appendChild(col3links);

    const col4 = el('div');
    col4.innerHTML = `<div class="site-footer__heading">ติดต่อ</div>`;
    const col4contact = el('div', 'site-footer__contact');
    col4contact.innerHTML = `<span>LINE: @nutralist</span><span>care@nutralist.co.th</span>`;
    col4contact.appendChild(lineButton('site-footer__line-btn', 'ทักไลน์'));
    col4.appendChild(col4contact);

    grid.appendChild(col1);
    grid.appendChild(col2);
    grid.appendChild(col3);
    grid.appendChild(col4);

    const legal = el('div', 'site-footer__legal', '© 2026 Nutralist · ผลิตภัณฑ์เสริมอาหาร ไม่มีผลในการป้องกันหรือรักษาโรค · ควรปรึกษาแพทย์หากมีอาการผิดปกติ');

    footer.appendChild(grid);
    footer.appendChild(legal);
    return footer;
  }

  function renderCartDrawer() {
    if (!state.cartOpen) return null;
    const wrap = el('div');

    const overlay = el('div', 'cart-overlay');
    overlay.addEventListener('click', () => {
      state.cartOpen = false;
      render();
    });

    const drawer = el('aside', 'cart-drawer');
    const head = el('div', 'cart-drawer__head');
    head.innerHTML = `<div class="cart-drawer__title">ตะกร้าของคุณ</div>`;
    const closeBtn = el('button', 'cart-drawer__close', '×');
    closeBtn.addEventListener('click', () => {
      state.cartOpen = false;
      render();
    });
    head.appendChild(closeBtn);

    const body = el('div', 'cart-drawer__body');
    if (state.cart.length === 0) {
      body.innerHTML = `<div class="cart-drawer__empty"><div class="cart-drawer__empty-icon">🛒</div><p>ตะกร้ายังว่างอยู่</p></div>`;
    } else {
      state.cart.forEach((item) => {
        const line = el('div', 'cart-line');
        line.innerHTML = `
          <div class="cart-line__thumb">🧴</div>
          <div class="cart-line__body">
            <div class="cart-line__name">${item.name}</div>
            <div class="cart-line__price">${baht(item.price)}</div>
            <div class="cart-line__qty">
              <button class="qty-btn" data-dec>−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" data-inc>+</button>
            </div>
          </div>
          <button class="cart-line__remove" data-remove>ลบ</button>`;
        line.querySelector('[data-dec]').addEventListener('click', () => changeQty(item.id, -1));
        line.querySelector('[data-inc]').addEventListener('click', () => changeQty(item.id, 1));
        line.querySelector('[data-remove]').addEventListener('click', () => removeItem(item.id));
        body.appendChild(line);
      });
    }

    drawer.appendChild(head);
    drawer.appendChild(body);

    if (state.cart.length > 0) {
      const foot = el('div', 'cart-drawer__foot');
      foot.innerHTML = `<div class="cart-drawer__total"><span>รวม</span><span>${baht(subtotal())}</span></div>`;
      const checkoutBtn = el('button', 'btn btn--primary btn--block', 'ดำเนินการชำระเงิน');
      checkoutBtn.addEventListener('click', () => go('checkout'));
      foot.appendChild(checkoutBtn);
      drawer.appendChild(foot);
    }

    wrap.appendChild(overlay);
    wrap.appendChild(drawer);
    return wrap;
  }

  /* ---------- Pages ---------- */

  function renderHomePage() {
    const wrap = el('div');

    // Hero
    const hero = el('section', 'hero');
    hero.innerHTML = `
      <div class="hero__blob hero__blob--a"></div>
      <div class="hero__blob hero__blob--b"></div>
      <div class="hero__grid">
        <div>
          <div class="badge"><span class="badge__dot"></span>โพรไบโอติกเฉพาะจุดสำหรับผู้หญิง</div>
          <h1 class="hero__title">สมดุลจุดซ่อนเร้น<br>เริ่มจาก<span class="accent">ภายใน</span></h1>
          <p class="hero__desc">Nutralist Probio Pro Plus+ La-14® โพรไบโอติก 2 สายพันธุ์ 10,000 ล้าน CFU ที่ผ่านการศึกษาทางคลินิก ช่วยฟื้นฟูสมดุลจุลินทรีย์ ลดการกลับมาเป็นซ้ำของ BV / VVC และดูแลสุขภาพภายในของผู้หญิงในทุกช่วงชีวิต</p>
          <div class="hero__ctas" id="hero-ctas"></div>
          <div class="hero__stats">
            <div><div class="hero__stat-num">10<small>พันล้าน</small></div><div class="hero__stat-label">CFU ต่อแคปซูล</div></div>
            <div class="hero__stat-divider"></div>
            <div><div class="hero__stat-num">2</div><div class="hero__stat-label">สายพันธุ์ที่ศึกษาแล้ว</div></div>
            <div class="hero__stat-divider"></div>
            <div><div class="hero__stat-num">30</div><div class="hero__stat-label">แคปซูล / กระปุก</div></div>
          </div>
        </div>
        <div class="hero__media">
          <div class="hero__media-glow"></div>
          <div class="hero__media-frame"><img src="uploads/S__169525254_0.jpg" alt="Nutralist Probio Pro Plus+"></div>
          <div class="hero__callout">
            <div class="hero__callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D5B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div>
            <div><div class="hero__callout-title">ผ่านการทดสอบความปลอดภัย</div><div class="hero__callout-sub">ไม่ดื้อยาปฏิชีวนะ</div></div>
          </div>
        </div>
      </div>`;
    const heroCtas = hero.querySelector('#hero-ctas');
    const heroBuyBtn = el('button', 'btn btn--primary', 'สั่งซื้อ — เริ่มต้น ฿990');
    heroBuyBtn.addEventListener('click', () => go('product'));
    heroCtas.appendChild(heroBuyBtn);
    heroCtas.appendChild(lineButton('btn btn--outline', 'ปรึกษาทางไลน์'));

    // Trust bar
    const trustBar = el('section', 'trust-bar');
    const trustInner = el('div', 'trust-bar__inner');
    trustInner.innerHTML = `<div class="trust-bar__label">วัตถุดิบมาตรฐานระดับโลก · ศึกษาทางคลินิก</div>`;
    const partnersWrap = el('div', 'trust-bar__partners');
    CONTENT.partners.forEach((p) => partnersWrap.appendChild(el('div', 'trust-bar__partner', p)));
    partnersWrap.appendChild(el('div', 'trust-bar__partner', '🇺🇸 USA'));
    trustInner.appendChild(partnersWrap);
    trustBar.appendChild(trustInner);

    // Problems
    const problemSection = el('section', 'section section--center');
    problemSection.innerHTML = `
      <div class="eyebrow">ปัญหาที่ผู้หญิงหลายคนเจอ</div>
      <h2 class="section__title section__title--lg">รักษาแล้วก็ยัง<span class="accent">กลับมาเป็นซ้ำ</span> วนอยู่แบบนี้ไม่จบสักที</h2>
      <p class="section__desc">ยาปฏิชีวนะช่วยได้ชั่วคราว แต่ไม่ได้ฟื้นฟูจุลินทรีย์ดีที่หายไป เมื่อสมดุลไม่กลับมา อาการจึงวนกลับมาซ้ำแล้วซ้ำเล่า</p>
      <div class="problem-grid" id="problem-grid"></div>`;
    const problemGrid = problemSection.querySelector('#problem-grid');
    CONTENT.problems.forEach((p) => {
      problemGrid.appendChild(el('div', 'problem-card', `<div class="problem-card__icon">${p.icon}</div><div class="problem-card__title">${p.title}</div><div class="problem-card__desc">${p.desc}</div>`));
    });

    // Solution / strains
    const strainSection = el('section', 'section--tint');
    strainSection.innerHTML = `
      <div class="section__inner section--center">
        <div class="eyebrow">ทางออก</div>
        <h2 class="section__title section__title--md">โพรไบโอติก 2 สายพันธุ์ ที่คัดมาเพื่อผู้หญิง</h2>
        <p class="section__desc">ทำงานผ่านแกนลำไส้–ช่องคลอด (gut–vaginal axis) เพื่อฟื้นฟูความเป็น Lactobacillus dominance และรักษาค่า pH ที่เหมาะสม</p>
        <div class="strain-grid" id="strain-grid"></div>
      </div>`;
    const strainGrid = strainSection.querySelector('#strain-grid');
    CONTENT.strains.forEach((s) => {
      strainGrid.appendChild(el('div', 'strain-card', `
        <div class="strain-card__icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c2 3 2 5 0 8s-2 5 0 8"/><path d="M8 4c1.5 2 4 2 8 0"/><path d="M8 20c1.5-2 4-2 8 0"/><path d="M7 12h10"/></svg></div>
        <div><div class="strain-card__code">${s.code}</div><div class="strain-card__name">${s.name}</div><div class="strain-card__desc">${s.desc}</div></div>`));
    });

    // Benefits
    const benefitSection = el('section', 'section section--center');
    benefitSection.innerHTML = `<h2 class="section__title">ดูแลครบ ในหนึ่งแคปซูล</h2><div class="benefit-grid" id="benefit-grid"></div>`;
    const benefitGrid = benefitSection.querySelector('#benefit-grid');
    CONTENT.benefits.forEach((b) => {
      benefitGrid.appendChild(el('div', 'benefit-card', `<div class="benefit-card__icon">${b.icon}</div><div class="benefit-card__title">${b.title}</div><div class="benefit-card__desc">${b.desc}</div>`));
    });

    // Featured infographic
    const infographicSection = el('section', 'section--tint');
    infographicSection.innerHTML = `
      <div class="section__inner section--center">
        <div class="eyebrow">เข้าใจต้นเหตุ</div>
        <h2 class="section__title section__title--md">ทำไมถึงกลับมาเป็นซ้ำ และจะตัดวงจรได้อย่างไร</h2>
        <img src="assets/recurrence-cycle.jpg" alt="วงจรการกลับมาเป็นซ้ำ" class="feature-img" style="margin-top:26px">
        <a id="go-science-link" style="cursor:pointer;display:inline-block;margin-top:26px;color:#C0186A;font-weight:600;font-size:15.5px;border-bottom:2px solid #F3B6D0;padding-bottom:2px">ดูงานวิจัยและกลไกทั้งหมด →</a>
      </div>`;
    infographicSection.querySelector('#go-science-link').addEventListener('click', () => go('science'));

    // Reviews teaser
    const reviewSection = el('section', 'section');
    reviewSection.innerHTML = `
      <div class="section-head">
        <div><div class="eyebrow">เสียงจากผู้ใช้จริง</div><h2 class="section__title section__title--sm" style="text-align:left;margin-top:10px">ผู้หญิงกว่า 12,000 คนดูแลตัวเองด้วย Nutralist</h2></div>
        <a id="go-reviews-link" style="cursor:pointer;color:#C0186A;font-weight:600;font-size:15px">ดูรีวิวทั้งหมด →</a>
      </div>
      <div class="review-grid" id="review-grid"></div>`;
    reviewSection.querySelector('#go-reviews-link').addEventListener('click', () => go('reviews'));
    const reviewGrid = reviewSection.querySelector('#review-grid');
    CONTENT.reviewsAll.slice(0, 3).forEach((r) => reviewGrid.appendChild(reviewCard(r)));

    // CTA band
    const ctaBand = el('section', 'cta-band');
    ctaBand.innerHTML = `
      <div class="cta-band__blob cta-band__blob--a"></div>
      <div class="cta-band__blob cta-band__blob--b"></div>
      <div class="cta-band__inner">
        <h2>เริ่มดูแลสมดุลภายในของคุณวันนี้</h2>
        <p>คอร์ส 3 กระปุกคุ้มที่สุด — ฟรีค่าจัดส่ง พร้อมคำแนะนำจากทีมงาน</p>
        <div class="cta-band__buttons" id="cta-band-buttons"></div>
      </div>`;
    const ctaButtons = ctaBand.querySelector('#cta-band-buttons');
    const ctaBuyBtn = el('button', 'btn btn--white', 'เลือกแพ็กเกจ');
    ctaBuyBtn.addEventListener('click', () => go('product'));
    ctaButtons.appendChild(ctaBuyBtn);
    ctaButtons.appendChild(lineButton('btn btn--ghost', 'ทักไลน์ปรึกษาฟรี'));

    [hero, trustBar, problemSection, strainSection, benefitSection, infographicSection, reviewSection, ctaBand].forEach((s) => wrap.appendChild(s));
    return wrap;
  }

  function reviewCard(r) {
    return el('div', 'review-card', `
      <div class="review-card__stars">★★★★★</div>
      <p class="review-card__text">${r.text}</p>
      <div class="review-card__person">
        <div class="review-card__avatar">${r.initial}</div>
        <div><div class="review-card__name">${r.name}</div><div class="review-card__tag">${r.tag}</div></div>
      </div>`);
  }

  function renderProductPage() {
    const wrap = el('div', 'product-layout');

    const breadcrumb = el('div', 'breadcrumb');
    const homeLink = el('a', '', 'หน้าแรก');
    homeLink.addEventListener('click', () => go('home'));
    breadcrumb.appendChild(homeLink);
    breadcrumb.appendChild(document.createTextNode(' / '));
    breadcrumb.appendChild(el('span', 'breadcrumb__current', 'สินค้า'));

    const gallery = el('div', 'product-gallery');
    gallery.innerHTML = `
      <div class="product-gallery__main"><img src="uploads/S__169525253_0.jpg" alt="Nutralist Probio Pro Plus+"></div>
      <div class="product-gallery__thumbs">
        <div class="product-gallery__thumb"><img src="uploads/product-2.jpg" alt="" onerror="this.parentElement.textContent='+'"></div>
        <div class="product-gallery__thumb"><img src="uploads/product-3.jpg" alt="" onerror="this.parentElement.textContent='+'"></div>
        <div class="product-gallery__thumb"><img src="uploads/product-4.jpg" alt="" onerror="this.parentElement.textContent='+'"></div>
      </div>`;

    const info = el('div');
    info.innerHTML = `
      <div class="product-rating">★★★★★ <span>4.9 · 2,140 รีวิว</span></div>
      <h1 class="product-title">Nutralist Probio Pro Plus+ La-14®</h1>
      <p class="product-desc">โพรไบโอติกสำหรับสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิง · 10,000 ล้าน CFU ต่อแคปซูล · 30 แคปซูล</p>
      <div class="chip-row" id="chip-row"></div>
      <div class="bundle-picker" id="bundle-picker"></div>
      <div class="product-actions" id="product-actions"></div>
      <div class="product-perks">
        <div class="product-perk"><span class="product-perk__mark">✓</span> จัดส่งฟรีเมื่อซื้อ 3 กระปุกขึ้นไป</div>
        <div class="product-perk"><span class="product-perk__mark">✓</span> เก็บได้โดยไม่ต้องแช่เย็น</div>
      </div>
      <div class="product-tabs">
        <div class="product-tabs__nav" id="product-tabs-nav"></div>
        <div class="product-tab-panel" id="product-tab-panel"></div>
      </div>`;

    CONTENT.prodChips.forEach((c) => info.querySelector('#chip-row').appendChild(el('span', 'chip', c)));

    const bundlePicker = info.querySelector('#bundle-picker');
    CONTENT.bundles.forEach((b) => {
      const selected = state.selectedBundle === b.id;
      const option = el('div', 'bundle-option' + (selected ? ' is-selected' : ''));
      option.innerHTML = `
        ${b.popular ? '<span class="bundle-option__ribbon">ยอดนิยม</span>' : ''}
        <div class="bundle-option__left">
          <div class="bundle-option__dot"><span class="bundle-option__dot-fill"></span></div>
          <div><div class="bundle-option__name">${b.name}</div><div class="bundle-option__sub">${b.sub} · ${b.perLabel}</div></div>
        </div>
        <div class="bundle-option__price"><div class="bundle-option__price-now">${baht(b.price)}</div><div class="bundle-option__price-was">${baht(b.was)}</div></div>`;
      option.addEventListener('click', () => {
        state.selectedBundle = b.id;
        render();
      });
      bundlePicker.appendChild(option);
    });

    const actions = info.querySelector('#product-actions');
    const addBtn = el('button', 'btn btn--primary', 'เพิ่มลงตะกร้า');
    addBtn.addEventListener('click', () => addToCart(state.selectedBundle));
    actions.appendChild(addBtn);
    actions.appendChild(lineButton('btn btn--line', 'สั่งทางไลน์'));

    const tabsNav = info.querySelector('#product-tabs-nav');
    CONTENT.tabs.forEach((t) => {
      const btn = el('button', 'product-tab-btn' + (state.tab === t.id ? ' is-active' : ''), t.label);
      btn.addEventListener('click', () => {
        state.tab = t.id;
        render();
      });
      tabsNav.appendChild(btn);
    });

    const panel = info.querySelector('#product-tab-panel');
    if (state.tab === 'desc') {
      panel.innerHTML = `
        <p>Nutralist Probio Pro Plus+ ผสานโพรไบโอติกที่ผ่านการศึกษาทางคลินิก 2 สายพันธุ์ เพื่อสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิงโดยเฉพาะ</p>
        <ul>
          <li>ฟื้นฟูสมดุลจุลินทรีย์ในช่องคลอดผ่านแกนลำไส้–ช่องคลอด</li>
          <li>รองรับการดูแล BV / VVC และลดการกลับมาเป็นซ้ำ</li>
          <li>เทคโนโลยีความคงตัว เก็บได้โดยไม่ต้องแช่เย็น</li>
          <li>เหมาะกับการดูแลประจำวัน ช่วงเตรียมตั้งครรภ์ IVF และหลังคลอด</li>
        </ul>`;
    } else if (state.tab === 'ingr') {
      panel.innerHTML = `
        <p><b>ส่วนผสมสำคัญต่อแคปซูล (10,000 ล้าน CFU):</b></p>
        <ul>
          <li><b>Lactobacillus acidophilus (HOWARU® La-14®)</b> — สายพันธุ์ที่ศึกษาเพื่อสุขภาพจุดซ่อนเร้น</li>
          <li><b>Lacticaseibacillus Rhamnosus (HN001™)</b> — สนับสนุนภูมิคุ้มกันและสมดุลจุลินทรีย์</li>
        </ul>
        <p class="fine-note">วัตถุดิบจาก IFF Health Sciences (HOWARU®) · ผ่านการทดสอบ virulence, toxicogenic properties และการไม่ดื้อยาปฏิชีวนะ</p>`;
    } else {
      panel.innerHTML = `
        <p><b>การดูแลประจำวัน:</b> 1 แคปซูล/วัน ต่อเนื่องเพื่อสมดุลระยะยาว</p>
        <p><b>หลังใช้ยาปฏิชีวนะ (BV/VVC):</b> 2 แคปซูล/วัน นาน 5 วัน จากนั้น 1 แคปซูล/วัน ต่ออีก 10 วัน</p>
        <p><b>เตรียม IVF:</b> 2 แคปซูล/วัน เริ่มก่อนย้ายตัวอ่อน 2 เดือน</p>
        <p id="use-science-note">ดูตารางแนะนำแบบเต็มได้ที่หน้า <a>งานวิจัย &amp; วิธีใช้</a></p>`;
      panel.querySelector('#use-science-note a').addEventListener('click', () => go('science'));
    }

    const container = el('div');
    container.appendChild(breadcrumb);
    wrap.appendChild(gallery);
    wrap.appendChild(info);
    container.appendChild(wrap);
    return container;
  }

  function renderSciencePage() {
    const wrap = el('div');
    const intro = el('section', 'section section--center', `
      <div class="eyebrow">งานวิจัย &amp; วิธีใช้</div>
      <h1 class="section__title section__title--lg">วิทยาศาสตร์เบื้องหลัง Nutralist</h1>
      <p class="section__desc">โพรไบโอติกที่คัดสายพันธุ์และมีหลักฐานสนับสนุน พร้อมคำแนะนำการใช้ตามแต่ละสถานการณ์</p>`);
    intro.style.paddingBottom = '10px';

    const images = el('section', 'section section--medium');
    images.innerHTML = `
      <img src="assets/recurrence-cycle.jpg" alt="วงจรการกลับมาเป็นซ้ำ" class="feature-img" style="margin-bottom:44px">
      <img src="assets/ingredients-conclusion.jpg" alt="ส่วนผสมและงานวิจัย" class="feature-img">`;

    const doseSection = el('section', 'section section--medium');
    doseSection.innerHTML = `
      <h2 class="section__title section__title--sm" style="text-align:center">ตารางแนะนำการใช้</h2>
      <p style="text-align:center;color:#857C88;font-size:14px;margin:0 0 30px">Nutralist Dose Recommendation</p>
      <div class="dose-table-wrap">
        <table class="dose-table">
          <thead><tr><th>สถานการณ์</th><th>ขนาดเริ่มต้น</th><th>ต่อเนื่อง</th></tr></thead>
          <tbody id="dose-tbody"></tbody>
        </table>
      </div>
      <p class="dose-note">*ข้อมูลเพื่อการดูแลเบื้องต้น ควรปรึกษาแพทย์หรือเภสัชกรร่วมด้วย</p>`;
    const tbody = doseSection.querySelector('#dose-tbody');
    CONTENT.doseRows.forEach((d) => {
      const tr = el('tr', '', `<td>${d.label}</td><td>${d.start}</td><td>${d.cont}</td>`);
      tbody.appendChild(tr);
    });

    const evidenceSection = el('section', 'section section--medium');
    evidenceSection.innerHTML = `<div class="evidence-grid" id="science-evidence-grid"></div>`;
    const evidenceGrid = evidenceSection.querySelector('#science-evidence-grid');
    CONTENT.evidence.forEach((e) => {
      evidenceGrid.appendChild(el('div', 'evidence-card', `<div class="evidence-card__icon">${e.icon}</div><div class="evidence-card__title">${e.title}</div><div class="evidence-card__desc">${e.desc}</div>`));
    });

    [intro, images, doseSection, evidenceSection].forEach((s) => wrap.appendChild(s));
    return wrap;
  }

  function renderReviewsPage() {
    const wrap = el('section', 'section section--medium');
    wrap.innerHTML = `
      <div class="section--center">
        <div class="eyebrow">รีวิวจากผู้ใช้จริง</div>
        <h1 class="section__title section__title--lg">ผู้หญิงที่กลับมามั่นใจอีกครั้ง</h1>
      </div>
      <div class="review-stats">
        <div class="review-stat"><div class="review-stat__num review-stat__num--accent">4.9</div><div style="color:#F5A623;font-size:15px">★★★★★</div><div class="review-stat__label">จาก 2,140 รีวิว</div></div>
        <div class="review-stat-divider"></div>
        <div class="review-stat"><div class="review-stat__num review-stat__num--dark">94<span style="font-size:22px">%</span></div><div class="review-stat__label">รู้สึกสมดุลดีขึ้นใน 1 เดือน</div></div>
        <div class="review-stat-divider"></div>
        <div class="review-stat"><div class="review-stat__num review-stat__num--dark">12k+</div><div class="review-stat__label">ลูกค้าที่ไว้วางใจ</div></div>
      </div>
      <div class="review-grid--masonry" id="all-reviews-grid"></div>`;
    const grid = wrap.querySelector('#all-reviews-grid');
    CONTENT.reviewsAll.forEach((r) => grid.appendChild(reviewCard(r)));
    return wrap;
  }

  function renderAboutPage() {
    const wrap = el('div');
    const intro = el('section', 'section section--tight section--center', `
      <div class="eyebrow">เกี่ยวกับเรา</div>
      <h1 class="section__title section__title--lg">สุขภาพภายในของผู้หญิง คือสิ่งที่เราใส่ใจ</h1>
      <p style="font-size:17px;color:#5F5766;line-height:1.8;margin:20px 0 0">Nutralist ก่อตั้งขึ้นด้วยความเชื่อว่าผู้หญิงทุกคนควรมั่นใจในสุขภาพจุดซ่อนเร้นของตัวเองได้ทุกวัน เราจึงคัดสรรโพรไบโอติกสายพันธุ์ที่ผ่านการศึกษาทางคลินิกจากผู้ผลิตวัตถุดิบระดับโลก มาพัฒนาเป็นผลิตภัณฑ์ที่ปลอดภัย มีคุณภาพ และใช้ได้จริงในชีวิตประจำวัน</p>`);

    const valuesSection = el('section', 'section section--medium');
    valuesSection.innerHTML = `<div class="value-grid" id="value-grid"></div>`;
    const valueGrid = valuesSection.querySelector('#value-grid');
    CONTENT.values.forEach((v) => {
      valueGrid.appendChild(el('div', 'value-card', `<div class="value-card__icon">${v.icon}</div><div class="value-card__title">${v.title}</div><div class="value-card__desc">${v.desc}</div>`));
    });

    const partnerSection = el('section', 'section section--medium');
    partnerSection.style.paddingBottom = '90px';
    partnerSection.innerHTML = `
      <div class="partner-band">
        <div class="partner-band__label">พันธมิตรวัตถุดิบระดับโลก</div>
        <div class="partner-band__logos">
          <div class="partner-band__logo">GGC</div>
          <div class="partner-band__logo">IFF Health Sciences</div>
          <div class="partner-band__logo">HOWARU®</div>
        </div>
      </div>`;

    [intro, valuesSection, partnerSection].forEach((s) => wrap.appendChild(s));
    return wrap;
  }

  function renderFaqPage() {
    const wrap = el('section', 'section section--tight');
    wrap.innerHTML = `
      <div class="section--center" style="margin-bottom:40px">
        <div class="eyebrow">คำถามที่พบบ่อย</div>
        <h1 class="section__title section__title--lg">เรื่องที่คุณอาจอยากรู้</h1>
      </div>
      <div class="faq-list" id="faq-page-list"></div>`;
    const list = wrap.querySelector('#faq-page-list');
    CONTENT.faqs.forEach((f, i) => {
      const isOpen = state.openFaq === i;
      const item = el('div', 'faq-item' + (isOpen ? ' is-open' : ''));
      item.innerHTML = `
        <button type="button" class="faq-item__q">
          <span class="faq-item__q-text">${f.q}</span>
          <span class="faq-item__sign">${isOpen ? '−' : '+'}</span>
        </button>
        <div class="faq-item__a">${f.a}</div>`;
      item.querySelector('.faq-item__q').addEventListener('click', () => {
        state.openFaq = state.openFaq === i ? -1 : i;
        render();
      });
      list.appendChild(item);
    });
    return wrap;
  }

  function renderContactPage() {
    const wrap = el('section', 'section section--medium');
    wrap.innerHTML = `
      <div class="section--center" style="margin-bottom:44px">
        <div class="eyebrow">ติดต่อเรา</div>
        <h1 class="section__title section__title--lg">พร้อมดูแลและตอบทุกคำถาม</h1>
      </div>
      <div class="contact-grid">
        <div class="contact-cards" id="contact-cards"></div>
        <div class="contact-form">
          <div class="contact-form__title">ส่งข้อความถึงเรา</div>
          <div class="form-stack">
            <input class="form-input" placeholder="ชื่อของคุณ">
            <input class="form-input" placeholder="เบอร์โทร หรือ LINE ID">
            <textarea class="form-textarea" rows="4" placeholder="ข้อความ"></textarea>
            <button class="btn btn--primary btn--block">ส่งข้อความ</button>
          </div>
        </div>
      </div>`;

    const cards = wrap.querySelector('#contact-cards');
    const lineCard = lineButton('contact-card contact-card--line', '');
    lineCard.innerHTML = `<div class="contact-card__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.06.64.03.9l-.14.85c-.04.25-.2.98.86.53s5.72-3.37 7.8-5.77C21.13 13.4 22 11.86 22 10.13 22 5.64 17.52 2 12 2z"></path></svg></div>
      <div><div class="contact-card__title">LINE Official</div><div class="contact-card__value">@nutralist</div><div class="contact-card__note">ช่องทางที่เร็วที่สุด · ตอบทุกวัน 9:00–20:00</div></div>`;
    cards.appendChild(lineCard);
    cards.appendChild(el('div', 'contact-card', `<div class="contact-card__icon">✉️</div><div><div class="contact-card__title">อีเมล</div><div class="contact-card__value">care@nutralist.co.th</div></div>`));
    cards.appendChild(el('div', 'contact-card', `<div class="contact-card__icon">📞</div><div><div class="contact-card__title">โทร</div><div class="contact-card__value">02-000-0000 (จ.–ส. 9:00–18:00)</div></div>`));

    return wrap;
  }

  function renderCheckoutPage() {
    const wrap = el('div', 'checkout-layout');
    wrap.innerHTML = `<h1 class="checkout-title">ชำระเงิน</h1>`;

    if (state.cart.length === 0) {
      const empty = el('div', 'empty-cart');
      empty.innerHTML = `<div class="empty-cart__icon">🛒</div><p class="empty-cart__text">ยังไม่มีสินค้าในตะกร้า</p>`;
      const btn = el('button', 'btn btn--primary', 'เลือกสินค้า');
      btn.addEventListener('click', () => go('product'));
      empty.appendChild(btn);
      wrap.appendChild(empty);
      return wrap;
    }

    const grid = el('div', 'checkout-grid');
    const shipCard = el('div', 'checkout-card');
    shipCard.innerHTML = `
      <div class="checkout-card__title">ข้อมูลการจัดส่ง</div>
      <div class="checkout-form-grid">
        <input class="form-input" placeholder="ชื่อ">
        <input class="form-input" placeholder="นามสกุล">
        <input class="form-input span-2" placeholder="เบอร์โทร">
        <textarea class="form-textarea span-2" rows="3" placeholder="ที่อยู่จัดส่ง"></textarea>
      </div>
      <div class="checkout-card__title" style="margin-top:24px">วิธีชำระเงิน</div>
      <div class="payment-list">
        <label class="payment-option"><input type="radio" name="pay" checked> โอนผ่านธนาคาร / พร้อมเพย์</label>
        <label class="payment-option"><input type="radio" name="pay"> เก็บเงินปลายทาง (COD)</label>
        <label class="payment-option"><input type="radio" name="pay"> บัตรเครดิต / เดบิต</label>
      </div>`;

    const summary = el('div', 'order-summary');
    summary.innerHTML = `<div class="order-summary__title">สรุปคำสั่งซื้อ</div><div class="order-summary__lines" id="order-lines"></div>`;
    const lines = summary.querySelector('#order-lines');
    state.cart.forEach((item) => {
      lines.appendChild(el('div', 'order-summary__line', `<span>${item.name} × ${item.qty}</span><span style="font-weight:600">${baht(item.price * item.qty)}</span>`));
    });

    const totals = el('div', 'order-summary__totals');
    totals.innerHTML = `
      <div class="order-summary__row"><span>ยอดสินค้า</span><span>${baht(subtotal())}</span></div>
      <div class="order-summary__row"><span>ค่าจัดส่ง</span><span>${shippingCost() === 0 ? 'ฟรี' : baht(shippingCost())}</span></div>
      <div class="order-summary__grand"><span>รวมทั้งสิ้น</span><span>${baht(subtotal() + shippingCost())}</span></div>`;
    summary.appendChild(totals);

    const confirmBtn = el('button', 'btn btn--primary btn--block', 'ยืนยันคำสั่งซื้อ');
    summary.appendChild(confirmBtn);
    summary.appendChild(el('div', 'order-summary__note', 'ข้อมูลของคุณปลอดภัย · จัดส่งภายใน 1–3 วันทำการ'));

    grid.appendChild(shipCard);
    grid.appendChild(summary);
    wrap.appendChild(grid);
    return wrap;
  }

  const PAGE_RENDERERS = {
    home: renderHomePage,
    product: renderProductPage,
    science: renderSciencePage,
    reviews: renderReviewsPage,
    about: renderAboutPage,
    faq: renderFaqPage,
    contact: renderContactPage,
    checkout: renderCheckoutPage,
  };

  function render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    const container = el('div', 'app');
    const promoBar = el('div', 'promo-bar', CONTENT.promoText);
    container.appendChild(promoBar);
    container.appendChild(renderHeader());

    const main = el('main');
    main.appendChild(PAGE_RENDERERS[state.page]());
    container.appendChild(main);

    container.appendChild(renderFooter());
    app.appendChild(container);

    const cartDrawer = renderCartDrawer();
    if (cartDrawer) app.appendChild(cartDrawer);
  }

  document.addEventListener('DOMContentLoaded', render);
})();
