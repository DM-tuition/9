  // ── Web3Forms AJAX ──
  const form = document.getElementById('enq-form');
  const btn  = document.getElementById('f-btn');
  const succ = document.getElementById('f-success');

  if (form && btn && succ) form.addEventListener('submit', async function(e) {
    e.preventDefault();
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const res  = await fetch('https://formspree.io/f/xbdbqyae', { method:'POST', body:new FormData(form), headers:{ 'Accept':'application/json' } });
      if (res.ok) { form.style.display='none'; succ.style.display='block'; }
      else { btn.disabled=false; btn.textContent='Book Free Intro Session →'; alert('Something went wrong — please email DMtuition@gmail.com directly.'); }
    } catch(err) { btn.disabled=false; btn.textContent='Book Free Intro Session →'; alert('Something went wrong — please email DMtuition@gmail.com directly.'); }
  });

  // ── IntersectionObserver scroll animation engine ──
  const io = new IntersectionObserver(entries => {
    entries.forEach(el => {
      if (el.isIntersecting) { el.target.style.opacity='1'; el.target.style.transform='translateY(0)'; }
    });
  }, { threshold:0.08 });

  document.querySelectorAll(
    '.subj-card,.step,.pc,.testi-card,.c-method,.hl,.risk-box,.cred-chip,.trust-item,.network-note,.grade-chip'
  ).forEach(el => {
    el.style.opacity='0'; el.style.transform='translateY(22px)';
    el.style.transition='opacity .55s ease, transform .55s ease';
    io.observe(el);
  });
  document.querySelectorAll('.subj-card').forEach((el,i)  => { el.style.transitionDelay=(i*.04)+'s'; });
  document.querySelectorAll('.step').forEach((el,i)       => { el.style.transitionDelay=(i*.1)+'s'; });
  document.querySelectorAll('.testi-card').forEach((el,i) => { el.style.transitionDelay=(i*.1)+'s'; });
  document.querySelectorAll('.cred-chip').forEach((el,i)  => { el.style.transitionDelay=(i*.06)+'s'; });
  document.querySelectorAll('.grade-chip').forEach((el,i) => { el.style.transitionDelay=(i*.08)+'s'; });
  document.querySelectorAll('.trust-item').forEach((el,i) => { el.style.transitionDelay=(i*.07)+'s'; });

  // ── Motion preferences ──
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Scroll progress bar ──
  const sp = document.getElementById('scroll-progress');
  if (sp) {
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      sp.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive:true });
    updateProgress();
  }

  // ── Mouse-reactive hero orbs (parallax) ──
  const orbLayer = document.querySelector('.orb-layer');
  if (orbLayer && !reduceMotion) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      orbLayer.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive:true });
  }

  // ── Count-up stats ──
  const countEls = document.querySelectorAll('[data-count]');
  if (countEls.length) {
    const countIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseFloat(el.dataset.count) || 0;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        countIO.unobserve(el);
        if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
        const dur = 1200; let start = null;
        const step = t => {
          if (!start) start = t;
          const p = Math.min((t - start) / dur, 1);
          el.textContent = prefix + Math.round(p * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold:0.5 });
    countEls.forEach(el => countIO.observe(el));
  }

  // ── 3D tilt on cards (pointer devices only) ──
  const fineHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (fineHover && !reduceMotion) {
    document.querySelectorAll('.subj-card,.pc,.testi-card').forEach(card => {
      const isFeat = card.classList.contains('feat');
      const rest = isFeat ? 'scale(1.03)' : 'translateY(0)';
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width  - 0.5;
        const cy = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transition = 'transform .08s ease-out';
        card.style.transform =
          `perspective(900px) rotateX(${-cy*6}deg) rotateY(${cx*6}deg) translateY(-6px)` +
          (isFeat ? ' scale(1.03)' : '');
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform .4s ease';
        card.style.transform = rest;
      });
    });
  }

  // ── Mobile menu toggle ──
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    const setMenu = open => {
      burger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }

  // ── Floating mobile CTA (show after hero, hide over contact) ──
  const floatCta = document.getElementById('float-cta');
  if (floatCta) {
    let contactVisible = false;
    const contact = document.getElementById('contact');
    if (contact) {
      new IntersectionObserver(es => {
        es.forEach(e => { contactVisible = e.isIntersecting; });
      }, { threshold:0.15 }).observe(contact);
    }
    const updateFloat = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      floatCta.classList.toggle('show', past && !contactVisible);
    };
    window.addEventListener('scroll', updateFloat, { passive:true });
    updateFloat();
  }

  // ── Magnetic buttons (pointer devices only) ──
  if (fineHover && !reduceMotion) {
    document.querySelectorAll('.btn-p,.f-submit,.nav-cta,.btn-pc').forEach(b => {
      b.addEventListener('mousemove', e => {
        const r = b.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) / r.width;
        const my = (e.clientY - r.top - r.height / 2) / r.height;
        b.style.transform = `translate(${mx*8}px, ${my*8 - 2}px)`;
      });
      b.addEventListener('mouseleave', () => { b.style.transform = ''; });
    });
  }

  // ── Hero particle constellation ──
  const canvas = document.getElementById('hero-canvas');
  const heroEl = document.getElementById('hero');
  if (canvas && heroEl && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, pts = [], raf = null, mouse = { x:-9999, y:-9999 };

    function resize() {
      w = heroEl.offsetWidth; h = heroEl.offsetHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(72, Math.floor(w * h / 16000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = 'rgba(152,186,212,' + (0.12 * (1 - d / 120)) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 170) {
          ctx.strokeStyle = 'rgba(201,168,76,' + (0.28 * (1 - md / 170)) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(152,186,212,0.55)';
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill(); }
      raf = requestAnimationFrame(draw);
    }

    heroEl.addEventListener('mousemove', e => {
      const r = heroEl.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive:true });
    heroEl.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    resize(); draw();

    // pause the loop when the hero scrolls out of view
    new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) { if (!raf) draw(); }
        else if (raf) { cancelAnimationFrame(raf); raf = null; }
      });
    }, { threshold: 0 }).observe(heroEl);
  }
