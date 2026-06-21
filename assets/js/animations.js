;(function () {
'use strict';
gsap.registerPlugin(ScrollTrigger);

const PAGE = document.body.dataset.page || 'home';

/* ── 0. LOADING ANIMATION (self-contained — no portfolio elements touched) ── */
function initLoadingAnimation() {
  const loader = document.getElementById('pg-loader');
  if (!loader || PAGE !== 'home') return;
  // NOTE: No overflow:hidden needed — loader is position:fixed over everything.


  var tl = gsap.timeline({
    onComplete: function () {
      // Recalculate all ScrollTrigger positions now that loader is gone
      ScrollTrigger.refresh();
      // Then run hero entrance
      initHeroEntrance();
    }
  });

  // 1. Words slide up from below
  tl.from('.pg-loader-word', {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.3,
    ease: 'power4.out',
  });

  // 2. Counter appears + counts 00 to 100
  tl.from('#pg-loader-counter', {
    opacity: 0,
    duration: 0.1,
    onStart: function () {
      var numEl = document.querySelector('.pg-loader-num');
      var grow = 0;
      var counter = setInterval(function () {
        if (grow < 100) {
          numEl.textContent = String(grow++).padStart(2, '0');
        } else {
          numEl.textContent = '100';
          clearInterval(counter);
        }
      }, 27);
    },
  });


  // 4. Fade out and hide — only touches #pg-loader
  tl.to('#pg-loader', {
    opacity: 0,
    duration: 0.4,
    delay: 2.4,
    ease: 'power2.in',
    onComplete: function () {
      loader.style.display = 'none';
    },
  });

  return tl;
}


/* ── 1. CUSTOM CURSOR ─────────────────────────────────────── */
function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || window.matchMedia('(pointer:coarse)').matches) return;
  document.body.style.cursor = 'none';
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(dot, { x: mx - 4, y: my - 4, duration: 0.08, ease: 'none' });
  });
  (function loop() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    gsap.set(ring, { x: rx - 16, y: ry - 16 });
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.tech-badge,.project-card,.topic-card').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(ring, { scale: 2.2, opacity: 0.35, duration: 0.3 }));
    el.addEventListener('mouseleave', () => gsap.to(ring, { scale: 1, opacity: 0.8, duration: 0.3 }));
  });
}

/* ── 2. THREE.JS HERO PARTICLE GALAXY ────────────────────── */
function initThreeHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  const W = canvas.offsetWidth || window.innerWidth;
  const H = canvas.offsetHeight || 500;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
  camera.position.z = 4.5;
  const count = 3000;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const c1 = new THREE.Color('#d4a574'), c2 = new THREE.Color('#8b4513'), c3 = new THREE.Color('#ffffff');
  for (let i = 0; i < count; i++) {
    const i3 = i * 3, r = Math.random() * 4.5 + 0.5;
    const theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1);
    pos[i3]   = r * Math.sin(phi) * Math.cos(theta);
    pos[i3+1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i3+2] = r * Math.cos(phi);
    const mix = Math.random() < 0.6 ? c1.clone().lerp(c2, Math.random()) : c3.clone().lerp(c1, Math.random() * 0.5);
    col[i3] = mix.r; col[i3+1] = mix.g; col[i3+2] = mix.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({ size: 0.032, vertexColors: true, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
  const galaxy = new THREE.Points(geo, mat);
  scene.add(galaxy);
  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => {
    tx = (e.clientX / window.innerWidth - 0.5) * 0.5;
    ty = (e.clientY / window.innerHeight - 0.5) * -0.25;
  });
  window.addEventListener('resize', () => {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
  });
  (function tick() {
    galaxy.rotation.y += 0.0008;
    cx += (tx - cx) * 0.04; cy += (ty - cy) * 0.04;
    galaxy.rotation.x = cy; galaxy.rotation.z = cx * 0.3;
    renderer.render(scene, camera); requestAnimationFrame(tick);
  })();
}


/* ── 4. HERO ENTRANCE ─────────────────────────────────────── */
function initHeroEntrance() {
  if (PAGE !== 'home') return;
  const nameEl = document.querySelector('.hero-name');
  const label  = document.querySelector('.hero-text .detail-label');
  const lead   = document.querySelector('.section-lead');
  const actions = document.querySelector('.hero-actions');
  const avatar  = document.querySelector('.avatar-ring');
  const tl = gsap.timeline();
  tl.from(avatar,  { scale: 0.4, opacity: 0, duration: 0.7, ease: 'back.out(2)' })
    .from([label, nameEl, lead], { y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
    .from(actions ? Array.from(actions.children) : [], { y: 18, opacity: 0, stagger: 0.1, duration: 0.45, ease: 'power3.out' }, '-=0.3');
}

/* ── 5. SCROLLTRIGGER REVEALS ────────────────────────────── */
function initScrollReveal() {
  gsap.utils.toArray('.section-heading').forEach(el =>
    gsap.from(el, { y: 40, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
  );
  gsap.utils.toArray('.detail-label').forEach(el =>
    gsap.from(el, { x: -20, opacity: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' } })
  );

  gsap.utils.toArray('.project-card, .project-row').forEach(el =>
    gsap.from(el, { y: 55, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
  );
  gsap.utils.toArray('.exp-card').forEach((el, i) =>
    gsap.from(el, { x: i % 2 === 0 ? -45 : 45, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
  );
  const edu = document.querySelector('.edu-card');
  if (edu) gsap.from(edu, { y: 35, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: edu, start: 'top 88%' } });
  gsap.utils.toArray('.topic-card').forEach((el, i) =>
    gsap.from(el, { y: 35, opacity: 0, duration: 0.55, delay: i * 0.08, ease: 'back.out(1.5)', scrollTrigger: { trigger: el, start: 'top 90%' } })
  );
  const graphSection = document.getElementById('github-graph');
  if (graphSection) gsap.from('.graph-scroll', { opacity: 0, x: 35, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: graphSection, start: 'top 85%' } });
}

/* ── 6. MAGNETIC BUTTONS ─────────────────────────────────── */
function initMagnetic() {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  document.querySelectorAll('.dock-item, .btn-accent, .btn-ghost, .social-link-btn').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width/2) * 0.3, y: (e.clientY - r.top - r.height/2) * 0.3, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' }));
  });
}

/* ── 7. 3D CARD TILT ─────────────────────────────────────── */
function initCardTilt() {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  document.querySelectorAll('.project-card, .exp-card, .edu-card').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotateY: x * 8, rotateX: y * -8, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
    });
    card.addEventListener('mouseleave', () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' }));
  });
}

/* ── 8. COUNTER ANIMATION ────────────────────────────────── */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    ScrollTrigger.create({ 
      trigger: el, 
      start: 'top 85%', 
      once: true,
      onEnter: () => {
        gsap.fromTo({ val: 0 }, 
          { val: 0 },
          { val: target, duration: 1.2, ease: 'power2.out', onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || ''); } }
        );
      }
    });
  });
}

/* ── 9. SCROLLING TEXT MARQUEE ───────────────────────────── */
function initMarquee() {
  const marquees = document.querySelectorAll('.marquee-inner');
  marquees.forEach(el => {
    const clone = el.cloneNode(true);
    el.parentElement.appendChild(clone);
    gsap.to(el.parentElement.children, { xPercent: -50, ease: 'none', duration: 18, repeat: -1 });
  });
}

/* ── 10. NOISE GRAIN ANIMATION ───────────────────────────── */
function initNoise() {
  const canvas = document.createElement('canvas');
  canvas.id = 'noise-canvas';
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999;opacity:0.032;mix-blend-mode:overlay';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;
  function draw() {
    const img = ctx.createImageData(W, H);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      img.data[i] = img.data[i+1] = img.data[i+2] = v; img.data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }
  setInterval(draw, 80);
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Loader runs first on home page; hero entrance is handled inside loader timeline
  const loaderTimeline = initLoadingAnimation();
  const hasLoader = !!loaderTimeline;

  initCursor();
  // Only run standalone hero entrance if no loader (other pages)
  if (!hasLoader) initHeroEntrance();
  initScrollReveal();
  initMagnetic();
  initCardTilt();
  initCounters();
  initMarquee();
  initNoise();
  if (PAGE === 'home') initThreeHero();
});

})(); // end IIFE
