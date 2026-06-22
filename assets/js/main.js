/* ── DATA ───────────────────────────────────────────────────── */
const DATA = {
  techStack: [
    // Programming Languages
    { name:'JavaScript', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name:'TypeScript', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name:'C',          icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name:'C++',        icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name:'Python',     icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    // Frontend
    { name:'React.js',   icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name:'HTML5',      icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name:'CSS3',       icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    // Backend & AI
    { name:'Node.js',    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name:'Express.js', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert:true },
    { name:'Golang',     icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg' },
    { name:'LangChain',  icon:'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png' },
    // Databases
    { name:'MongoDB',    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name:'PostgreSQL', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name:'Redis',      icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    // Tools & Cloud
    { name:'Git',        icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name:'GitHub',     icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert:true },
    { name:'Docker',     icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name:'Kubernetes', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
    { name:'AWS',        icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name:'Postman',    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name:'Vercel',     icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert:true },
  ],

  projects: [
    {
      title:'HostelMart | Campus Marketplace',
      desc:'A centralized peer-to-peer campus marketplace with the MERN stack, onboarding 10+ active users and reducing unstructured WhatsApp selling messages by 90%. Features scalable RESTful APIs, optimized MongoDB data modeling, dynamic category filtering, debounced search, JWT + Google OAuth authentication, and ImageKit-based cloud image upload.',
      tags:['React.js','Node.js','Express.js','MongoDB','JWT','Google OAuth','ImageKit','Multer'],
      image:'assets/images/HostelMart.png',
      bg:'#1a0a2e', border:'#5b21b6',
      github:'https://github.com/PiyushG-git/HostelMate',
      live:'https://hostelmate-q8lq.onrender.com/',
    },
    {
      title:'QueryDesk | AI-Powered Chat Platform',
      desc:'A production-grade full-stack AI platform integrating Google Gemini and Mistral AI via LangChain with Tavily API for autonomous real-time web search. Features a multi-session chatbot with persistent history and real-time LLM streaming via Socket.io, plus a Seller Agent System with configurable negotiation strategies accessible via unique shareable URLs.',
      tags:['React.js','Node.js','Express.js','MongoDB','LangChain','Socket.io','Google Gemini','Mistral AI'],
      image:'assets/images/QueryDesk.png',
      bg:'#0c1445', border:'#3730a3',
      github:'https://github.com/PiyushG-git/QueryDesk',
      live:'https://query-desk-puce.vercel.app/login',
    },
    {
      title:'FixMyRoad | AI Road Damage Detector',
      desc:'An automated road damage assessment pipeline using Computer Vision with 92% detection accuracy on geo-tagged images. Features a secure, role-based Flask dashboard that reduced manual verification time by 40% through automated filtering, plus a priority-ranking algorithm that synthesizes community upvotes to escalate critical infrastructure failures.',
      tags:['Flask','MongoDB','Computer Vision','Python','Role-Based Auth'],
      image:'assets/images/fixmyroad.jpg',
      bg:'#052e16', border:'#166534',
      github:'https://github.com/PiyushG-git/fixmyroad',
      live:'https://fixmyroad-65da.onrender.com/',
    },
  ],

  achievements: [
    { title:'Bioinformatics ML Challenge — Winner 🏆', desc:'Won the Bioinformatics Machine Learning Challenge at IIIT Nagpur 2025, competing against 300+ participants.', rank:'1st Place • 300+ participants', year:'2025', link:'#' },
    { title:'CodeChef 2-Star', desc:'Achieved a 2-Star rating with a peak rating of 1568 in algorithmic contests on CodeChef.', rank:'2-Star • 1568', year:'2024', link:'https://www.codechef.com/users/piyush251004' },
    { title:'LeetCode — 350+ Problems', desc:'Solved 350+ problems with a maximum rating of 1661; strong proficiency in DSA and algorithmic problem solving.', rank:'Max Rating: 1661', year:'2025', link:'https://leetcode.com/u/PiyushGuptra/' },
    { title:'Tantrafiesta Official Website', desc:'Led development of the official fest site reaching 4,000+ global impressions using Tailwind CSS, GSAP, Locomotive Scroll, and Three.js.', rank:'4,000+ Impressions', year:'2024', link:'https://tantrafiesta.in/' },
    { title:'Senior Marketing Team Member', desc:'Executed digital marketing strategies on Unstop as Senior Marketing Team Member, generating 10 Lakh+ impressions.', rank:'10L+ Impressions', year:'2024', link:'#' },
  ],

  learning: [
    { icon:'🧠', title:'Machine Learning & AI', desc:'Applied ML models, computer vision, AI API integrations.' },
    { icon:'⚙️', title:'System Design', desc:'Scalability patterns, distributed systems, microservices.' },
    { icon:'🌐', title:'IoT & Embedded Systems', desc:'ECE coursework — IoT protocols, embedded C, hardware interfaces.' },
    { icon:'☁️', title:'Cloud & DevOps', desc:'Docker, Vercel, CI/CD pipelines, cloud deployments.' },
    { icon:'📱', title:'React Native', desc:'Cross-platform mobile development for iOS and Android.' },
    { icon:'🔐', title:'Auth & Security', desc:'JWT, Redis session management, role-based access control.' },
  ],

  topics: [
    { label:'ENGINEERING', title:'Building Scalable MERN Apps from Scratch' },
    { label:'AI / ML', title:'Integrating Computer Vision into Web Apps' },
    { label:'BEST PRACTICES', title:'JWT Auth & Redis Token Blacklisting' },
    { label:'DEVOPS', title:'Deploying Full-Stack Apps with Docker & Vercel' },
  ],

  contributions: [
    0,1,0,0,1,3,0,0,1,0,0,0,0,0,0,0,1,9,9,4,1,4,18,14,1,1,1,1,10,15,11,6,6,2,14,22,17,6,5,2,16,2,5,6,59,8,7,2,26,3,4,12,30,
    0,3,5,4,0,8,0,0,0,0,0,0,0,1,0,6,0,11,3,3,0,3,3,5,1,2,4,14,14,8,6,8,8,10,13,4,3,9,3,3,27,1,5,1,27,6,24,2,23,2,3,7,15,
    0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,1,2,15,6,1,0,0,1,2,7,5,1,1,15,5,5,5,3,3,22,3,4,4,7,3,11,1,11,1,2,4,3,10,3,2,7,7,0,
    0,3,0,0,0,0,0,0,0,0,0,10,0,1,0,6,5,17,1,0,8,1,1,2,17,3,8,3,11,4,11,5,3,4,22,7,3,5,11,2,3,7,6,8,27,4,11,4,3,4,7,3,0,
    0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,9,3,19,19,6,0,3,2,7,11,3,6,3,15,3,4,14,7,17,3,3,2,3,8,3,7,2,8,3,9,1,12,20,2,11,1,0,
    0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,16,0,1,5,9,1,9,4,1,2,1,7,1,2,11,5,3,4,19,7,5,10,2,1,24,34,9,3,1,8,3,1,8,3,8,4,30,0,
    0,0,0,2,1,2,0,0,0,0,0,0,6,0,12,7,3,4,0,1,9,8,6,1,11,5,8,5,9,19,7,11,10,6,5,14,21,6,5,7,3,2,9,44,0,0,0,0,0,0,0,0,0
  ],
};

/* ── HELPERS ────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const PAGE = document.body.dataset.page || 'home';
const ICON_GH = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const ICON_EXT = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;

/* ── THEME ──────────────────────────────────────────────────── */
function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  apply(saved);
  $('theme-toggle').addEventListener('click', () => {
    const next = html.classList.contains('dark') ? 'light' : 'dark';
    apply(next); localStorage.setItem('portfolio-theme', next);
  });
  function apply(t) {
    html.classList.toggle('dark', t==='dark');
    html.classList.toggle('light', t==='light');
    $('theme-tooltip').textContent = t==='dark' ? 'Light Mode' : 'Dark Mode';
    $('icon-sun').style.display  = t==='dark'  ? '' : 'none';
    $('icon-moon').style.display = t==='light' ? '' : 'none';
  }
}

/* ── ACTIVE NAV ─────────────────────────────────────────────── */
function initActiveDock() {
  document.querySelectorAll('.dock-item[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === PAGE);
  });
}

/* page transitions handled by animations.js */


/* ── SOCIAL DOCK ────────────────────────────────────────────── */
function initDockSocial() {
  const trigger = $('social-trigger'), stack = $('social-stack');
  const iMenu = $('icon-menu'), iClose = $('icon-close');
  const items = stack.querySelectorAll('.social-item');
  let open = false;
  trigger.addEventListener('click', () => {
    open = !open;
    trigger.setAttribute('aria-expanded', open);
    iMenu.style.display  = open ? 'none' : '';
    iClose.style.display = open ? '' : 'none';
    items.forEach((item, i) => {
      const offset = (i+1)*44;
      item.style.transition = `opacity .25s ${i*35}ms, transform .3s ${i*35}ms`;
      item.style.opacity = open ? '1' : '0';
      item.style.pointerEvents = open ? '' : 'none';
      item.style.transform = open ? `translateY(-${offset}px)` : 'translateY(0)';
    });
  });
  document.addEventListener('click', e => {
    if (open && !$('social-wrapper').contains(e.target)) trigger.click();
  });
}

/* ── PARTICLES ──────────────────────────────────────────────── */
function initParticles() {
  const canvas = $('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  class P {
    constructor() { this.reset(); }
    reset() { this.x=Math.random()*W; this.y=Math.random()*H; this.r=Math.random()*1.5+.5; this.vx=(Math.random()-.5)*.3; this.vy=(Math.random()-.5)*.3; this.a=Math.random()*.35+.05; }
    update() { this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset(); }
    draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fillStyle=`rgba(212,165,116,${this.a})`; ctx.fill(); }
  }
  for (let i=0;i<55;i++) particles.push(new P());
  (function loop() { ctx.clearRect(0,0,W,H); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(loop); })();
}

/* ── GITHUB GRAPH ───────────────────────────────────────────── */
async function renderGitHubGraph() {
  const svg = $('contribution-graph'); if (!svg) return;
  const totalEl = $('graph-total'), legendEl = $('legend-dots');
  const WEEKS=53, DAYS=7, W=17, GAP=2, OX=8, OY=30;
  const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  function drawGraph(data) {
    const max = Math.max(...data, 1);
    function op(c) { if(!c) return .14; const r=c/max; return r<.2?.34:r<.4?.52:r<.7?.72:.92; }
    // Calculate month label positions from today going back 53 weeks
    const today = new Date();
    let html = '';
    // Month labels
    const monthPositions = {};
    for (let w = WEEKS - 1; w >= 0; w--) {
      const d = new Date(today);
      d.setDate(d.getDate() - (WEEKS - 1 - w) * 7);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (!monthPositions[key]) monthPositions[key] = OX + w * (W + GAP);
    }
    Object.entries(monthPositions).forEach(([key, x]) => {
      const month = parseInt(key.split('-')[1]);
      html += `<text x="${x}" y="13" font-size="11" style="fill:var(--muted)">${MONTHS[month]}</text>`;
    });
    let total = 0;
    for (let w = 0; w < WEEKS; w++) for (let d = 0; d < DAYS; d++) {
      const idx = w * DAYS + d, count = data[idx] || 0; total += count;
      const x = OX + w * (W + GAP), y = OY + d * (W + GAP);
      html += `<rect x="${x}" y="${y}" width="14" height="14" rx="2" fill="rgba(212,165,116,${op(count)})" stroke="var(--border)" stroke-width="0.5"/>`;
    }
    svg.innerHTML = html;
    if (totalEl) totalEl.textContent = `${total.toLocaleString()} contributions in the last year`;
    if (legendEl) legendEl.innerHTML = [.14,.34,.52,.72,.92].map(o=>`<div class="legend-dot" style="background:rgba(212,165,116,${o})"></div>`).join('');
  }

  try {
    // Use GitHub's public contributions API via a lightweight proxy
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/PiyushG-git?y=last');
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    // Flatten contributions into a flat array of 371 daily values (53w × 7d)
    const flat = [];
    json.contributions.forEach(week => week.contributionDays.forEach(d => flat.push(d.contributionCount)));
    drawGraph(flat);
  } catch (e) {
    // Fallback: draw empty graph with a note
    const flat = new Array(WEEKS * DAYS).fill(0);
    drawGraph(flat);
    if (totalEl) totalEl.textContent = 'GitHub activity unavailable';
    console.warn('GitHub graph fetch failed:', e);
  }
}

/* ── TECH STACK ─────────────────────────────────────────────── */
function renderTechStack() {
  const el = $('tech-grid'); if (!el) return;
  el.innerHTML = DATA.techStack.map(t=>
    `<div class="tech-badge"><img src="${t.icon}" alt="${t.name}" loading="lazy" ${t.invert?'style="filter:invert(1) brightness(.85)"':''}/><span>${t.name}</span></div>`
  ).join('');
}

/* ── PROJECTS GRID (home preview — 2 col) ───────────────────── */
function renderProjectsGrid() {
  const el = $('projects-grid'); if (!el) return;
  el.innerHTML = DATA.projects.slice(0,2).map(p=>`
    <article class="project-card">
      <div class="project-img-wrap">
        <div class="project-img-bg" style="background-image:url('${p.image}')"></div>
        <div class="project-img-inner">
          <img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.style.background='${p.bg}';this.style.display='none'" />
        </div>
        <div class="project-links-overlay">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" aria-label="GitHub">${ICON_GH}</a>
          <a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" aria-label="Live">${ICON_EXT}</a>
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a class="btn-accent" href="projects.html" data-internal>View Details</a>
        <a class="btn-ghost" href="${p.live}" target="_blank" rel="noopener noreferrer">Live project ${ICON_EXT}</a>
        <a class="btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">Source ${ICON_GH}</a>
      </div>
    </article>
  `).join('');
}

/* ── PROJECTS LIST (projects page — full rows) ──────────────── */
function renderProjectsList() {
  const el = $('project-list'); if (!el) return;
  el.innerHTML = DATA.projects.map(p=>`
    <article class="project-row">
      <div class="project-row-img" style="--proj-bg:${p.bg};--proj-border:${p.border}">
        <div class="project-row-img-inner">
          <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.style.background='${p.bg}';this.style.display='none'" />
        </div>
        <div class="project-row-overlay">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" aria-label="GitHub">${ICON_GH}</a>
          <a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" aria-label="Live">${ICON_EXT}</a>
        </div>
      </div>
      <div class="project-row-info">
        <h2 class="project-row-title">${p.title}</h2>
        <p class="project-row-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-actions" style="margin-top:1.5rem">
          <a class="btn-accent" href="${p.live}" target="_blank" rel="noopener noreferrer">View Details</a>
          <a class="btn-ghost" href="${p.live}" target="_blank" rel="noopener noreferrer">Live project ${ICON_EXT}</a>
          <a class="btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">Source ${ICON_GH}</a>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── BLOG TOPICS ────────────────────────────────────────────── */
function renderTopics() {
  const el = $('topics-grid'); if (!el) return;
  el.innerHTML = DATA.topics.map(t=>`
    <div class="topic-card"><p class="topic-label">${t.label}</p><h3 class="topic-title">${t.title}</h3></div>
  `).join('');
}

/* ── ACHIEVEMENTS ───────────────────────────────────────────── */
function renderAchievements() {
  const list=$('achievements-list'), btn=$('show-more-btn'), txt=$('show-more-text'), chev=$('show-more-chevron');
  if (!list) return;
  let expanded=false;
  function render() {
    const items=expanded?DATA.achievements:DATA.achievements.slice(0,3);
    list.innerHTML=items.map(a=>`
      <div class="achievement-item visible">
        <div><h3 class="achievement-title">${a.title}</h3><p class="achievement-desc">${a.desc}</p></div>
        <div class="achievement-meta"><span class="achievement-rank">${a.rank}</span><span class="achievement-year">${a.year}</span></div>
      </div>`).join('');
    txt.textContent=expanded?'Show less':`Show ${DATA.achievements.length-3} more milestones`;
    chev.classList.toggle('open',expanded);
  }
  render();
  btn.addEventListener('click',()=>{ expanded=!expanded; render(); });
}

/* ── CURRENTLY LEARNING ─────────────────────────────────────── */
function renderLearning() {
  const grid=$('learning-grid'), toggle=$('learning-toggle');
  if (!grid||!toggle) return;
  grid.innerHTML=DATA.learning.map(l=>`<div class="learning-card"><div class="learning-icon">${l.icon}</div><h3 class="learning-title">${l.title}</h3><p class="learning-desc">${l.desc}</p></div>`).join('');
  let open=false;
  toggle.addEventListener('click',()=>{
    open=!open; toggle.setAttribute('aria-expanded',open);
    grid.style.display=open?'':'none';
    toggle.querySelector('.chevron').classList.toggle('open',open);
  });
}

/* ── EXPERIENCE ─────────────────────────────────────────────── */
function initExperience() {
  document.querySelectorAll('.exp-card').forEach(card => {
    const btn     = card.querySelector('[data-exp-toggle]');
    const details = card.querySelector('[data-exp-details]');
    if (!btn || !details) return;
    btn.addEventListener('click', () => {
      const open = details.style.display === 'none';
      details.style.display = open ? '' : 'none';
      btn.setAttribute('aria-expanded', open);
      btn.querySelector('.chevron').classList.toggle('open', open);
    });
  });
}

/* scroll reveal handled by animations.js GSAP ScrollTrigger */

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initActiveDock();
  initDockSocial();
  initParticles();

  // Resume buttons — open PDF in new tab
  document.querySelectorAll('#resume-btn, #resume-hero-btn').forEach(el => {
    el.addEventListener('click', () => {
      window.open('assets/resume.pdf', '_blank', 'noopener,noreferrer');
    });
  });

  // Page-specific rendering
  if (PAGE === 'home') {
    renderTechStack();
    renderGitHubGraph();
    renderProjectsGrid();
    renderAchievements();
    renderLearning();
    initExperience();
  }
  if (PAGE === 'projects') renderProjectsList();
  if (PAGE === 'blog')     renderTopics();
});
