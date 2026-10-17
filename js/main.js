/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything on the page is generated from this
   one object. Update CGPA, add projects, research, etc. and save.
   ===================================================================== */
const DATA = {
  name: "Noshin Nawar",
  badge: "CSE student · open to learning & collaboration",
  tagline:
    "CSE student and aspiring software engineer learning the MERN stack, exploring AI/ML and research, and building projects that solve real problems.",
  avatar: "images/1763734244346.jpg",
  location: "Chattogram, Bangladesh",
  links: {
    github: "https://github.com/NoshinStar",
    linkedin: "https://www.linkedin.com/in/noshin-nawar06/",
    leetcode: "https://leetcode.com/u/Noshin06/",
    codeforces: "https://codeforces.com/profile/Noshin_Nawar17",
    codechef: "https://www.codechef.com/users/nosh_star_20",
    cv: "assets/Noshin_Nawar_CV.pdf",
    email: "noshinnawar06@gmail.com",
  },
  about: [
    "I am a <strong>Computer Science and Engineering</strong> student at <strong>International Islamic University Chittagong (IIUC)</strong>, currently in my 5th semester, and an aspiring software engineer.",
    "I am learning the <strong>MERN stack</strong> through <strong>Programming Hero</strong> and strengthening my full-stack skills by building and deploying real projects.",
    "Alongside web development, I enjoy <strong>problem solving</strong> and I am exploring <strong>AI/ML and research</strong>, with my first research paper currently in progress.",
  ],
  stats: [
    { value: "4.00", label: "Current CGPA" },
    { value: "5th", label: "Semester, CSE" },
    { value: "6", label: "Featured projects" },
    { value: "1", label: "Research paper (ongoing)" },
  ],
  education: {
    title: "B.Sc. in Computer Science & Engineering",
    place: "International Islamic University Chittagong (IIUC)",
    note: "Ongoing · CGPA 4.00 so far",
  },
  skills: [
    {
      group: "Programming languages",
      icon: "💻",
      items: [
        ["C", 1],
        ["C++", 1],
        ["Python", 1],
        ["JavaScript", 1],
        ["TypeScript", 0],
      ],
    },
    {
      group: "Frontend",
      icon: "🎨",
      items: [
        ["HTML5", 1],
        ["CSS3", 1],
        ["React", 1],
        ["Next.js", 0],
        ["Tailwind CSS", 1],
      ],
    },
    {
      group: "Backend & databases",
      icon: "⚙️",
      items: [
        ["Node.js", 0],
        ["Express.js", 0],
        ["MongoDB", 0],
        ["MySQL", 0],
        ["SQLite", 0],
        ["Django", 0],
      ],
    },
    {
      group: "Tools & others",
      icon: "🔧",
      items: [
        ["Git", 1],
        ["GitHub", 1],
        ["Postman", 0],
        ["VS Code", 1],
        ["Qt", 0],
        ["Vercel", 0],
      ],
    },
    {
      group: "Interests",
      icon: "🔬",
      items: [
        ["AI / ML", 0],
        ["Research", 0],
        ["Problem solving", 1],
        ["Competitive programming", 0],
      ],
    },
  ],
  /* cat: web | ai | systems */
  projects: [
    {
      title: "Bazar Dor",
      cat: "web",
      status: "Live",
      desc: "A Next.js price-tracking website for essential goods in Bangladeshi markets, with authentication and a MongoDB database.",
      problem:
        "Daily market prices are scattered and hard to compare, which makes budgeting for essentials difficult.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "DaisyUI",
        "BetterAuth",
        "MongoDB",
      ],
      live: "https://bazar-dor-phi-ten.vercel.app",
      repo: "https://github.com/NoshinStar/bazar-dor",
    },
    {
      title: "MOONIX (Lunar Commander)",
      cat: "web",
      status: "NASA Space Apps 2026",
      desc: "A browser-based lunar mission simulation game built for the NASA Space Apps Challenge (CLPS Lunar Mission Browser) with my team Lunar Odyssey.",
      problem:
        "Lunar mission data is complex for the public; turning it into an interactive game makes it easier to explore and understand.",
      stack: ["React", "Vite", "TypeScript"],
      live: "",
      repo: "",
    },
    {
      title: "BiblioBay",
      cat: "web",
      status: "Live demo",
      desc: "An online book store with a customer side (search, cart, dashboard) and a full admin panel for books, users, orders, reviews and blogs.",
      problem:
        "Small book sellers need a simple way to list books and manage orders without complex tools.",
      stack: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "localStorage",
        "Swiper",
      ],
      live: "https://noshinstar.github.io/BIBLIOBAY/",
      repo: "https://github.com/NoshinStar/BIBLIOBAY",
    },
    {
      title: "Eman Jewelry",
      cat: "web",
      status: "Live demo",
      desc: "A responsive fine-jewelry e-commerce front end with a hero slider, filterable catalog, shopping cart and login/sign-up pages.",
      problem:
        "Premium products need an elegant, easy-to-browse storefront that works well on phones as well as desktops.",
      stack: ["HTML5", "CSS3", "JavaScript", "Boxicons"],
      live: "https://noshinstar.github.io/Eman-Jewelry-Exquisite-Fine-Jewelry-E-commerce-Store/",
      repo: "https://github.com/NoshinStar/Eman-Jewelry-Exquisite-Fine-Jewelry-E-commerce-Store",
    },
    {
      title: "PharmaGo",
      cat: "systems",
      status: "Desktop app",
      desc: "A pharmacy management desktop app with 15+ medicine categories, stock tracking, cart with 10% tax, invoice generation and customer feedback.",
      problem:
        "Pharmacies need quick stock checks and accurate billing so customers are served correctly.",
      stack: ["C++17", "Qt 6", "Qt Widgets", "Binary storage"],
      live: "",
      repo: "https://github.com/NoshinStar/PharmaGo---Pharmacy-Management-System",
    },
    {
      title: "Sharmin's Gallery",
      cat: "web",
      status: "Educational",
      desc: "A front-end fashion e-commerce site with a Swiper hero slider, product filtering tabs, wishlist and cart simulation, and scroll animations.",
      problem:
        "Practice project to learn how a polished, animated shopping experience is structured with plain HTML, CSS and JavaScript.",
      stack: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
      live: "",
      repo: "https://github.com/NoshinStar/Sharmins-Gallery-Fashion-E-Commerce-Project",
    },
  ],
  journey: [
    {
      date: "In progress",
      title: "Research Paper #1",
      text: "Working on my first research paper. Title and venue will be added here when ready.",
    },
    {
      date: "Ongoing",
      title: "MERN Stack Development, Programming Hero",
      text: "Learning full-stack web development with MongoDB, Express, React and Node.js, and shipping assignments and deployed projects.",
    },
    {
      date: "2026",
      title: "NASA Space Apps Challenge, Bangladesh",
      text: "Building MOONIX with team Lunar Odyssey for the CLPS Lunar Mission Browser challenge.",
    },
    {
      date: "Ongoing",
      title: "B.Sc. in CSE, IIUC",
      text: "5th semester, maintaining a CGPA of 4.00 while building projects and practicing problem solving.",
    },
  ],
};

/* ============================ RENDERING ============================ */
const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
const ico = {
  github:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
  linkedin:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
};
const L = DATA.links;

// hero
document.title = DATA.name + " | CSE Student & Aspiring Software Engineer";
$("#heroName").textContent = DATA.name;
$("#heroBadge").textContent = DATA.badge;
$("#heroSub").textContent = DATA.tagline;
const av = $("#avatar");
av.src = DATA.avatar;
av.onerror = () => {
  av.onerror = null;
  av.src =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#5b5bf0"/><text x="50%" y="55%" font-family="Arial" font-size="150" fill="#fff" text-anchor="middle" dominant-baseline="middle">NN</text></svg>',
    );
};
const social = (href, icon, label, cls = "icon-btn") =>
  `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`;
$("#heroSocials").innerHTML =
  social(L.github, ico.github, "GitHub") +
  social(L.linkedin, ico.linkedin, "LinkedIn") +
  (L.email ? social("mailto:" + L.email, ico.mail, "Email") : "");

// about
$("#aboutText").innerHTML =
  DATA.about.map((p) => `<p>${p}</p>`).join("") +
  `<p>📍 ${esc(DATA.location)}</p>`;
$("#stats").innerHTML = DATA.stats
  .map(
    (s) =>
      `<div class="card stat"><b class="grad">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`,
  )
  .join("");
$("#edu").innerHTML =
  `<div class="eyebrow" style="margin-bottom:6px">Education</div><h3>${esc(DATA.education.title)}</h3><div>${esc(DATA.education.place)}</div><small>${esc(DATA.education.note)}</small>`;

// skills
$("#skillGrid").innerHTML = DATA.skills
  .map(
    (g) => `
  <div class="card skill-card">
    <h3><span>${g.icon}</span>${esc(g.group)}</h3>
    <div class="chips">${g.items.map(([n, core]) => `<span class="chip${core ? " core" : ""}">${esc(n)}</span>`).join("")}</div>
  </div>`,
  )
  .join("");

$("#cpLinks").innerHTML = [
  ["LeetCode", L.leetcode],
  ["Codeforces", L.codeforces],
  ["CodeChef", L.codechef],
]
  .map(
    ([name, url]) =>
      `<a class="btn ghost sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${name} ↗</a>`,
  )
  .join("");

// projects
const cats = { all: "All", web: "Web", systems: "Software / Desktop" };
$("#filters").innerHTML = Object.entries(cats)
  .map(
    ([k, v], i) =>
      `<button class="filter${i === 0 ? " on" : ""}" data-f="${k}">${v}</button>`,
  )
  .join("");
$("#projGrid").innerHTML = DATA.projects
  .map(
    (p) => `
  <article class="card proj" data-cat="${p.cat}">
    <div class="top"><span class="tag">${esc(cats[p.cat] || p.cat)}</span><span class="status">${esc(p.status)}</span></div>
    <h3>${esc(p.title)}</h3>
    <p class="desc">${esc(p.desc)}</p>
    <div class="why"><b>Problem it solves</b><span>${esc(p.problem)}</span></div>
    <div class="stack">${p.stack.map((s) => `<em>${esc(s)}</em>`).join("")}</div>
    <div class="links">
      ${p.live ? `<a class="btn primary sm" href="${esc(p.live)}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}
      ${p.repo ? `<a class="btn ghost sm" href="${esc(p.repo)}" target="_blank" rel="noopener">Code ↗</a>` : ""}
      ${!p.live && !p.repo ? `<a class="btn ghost sm" href="${esc(L.github)}" target="_blank" rel="noopener">More on GitHub ↗</a>` : ""}
    </div>
  </article>`,
  )
  .join("");
document.querySelectorAll(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach((x) => x.classList.toggle("on", x === b));
    document
      .querySelectorAll(".proj")
      .forEach((c) =>
        c.classList.toggle(
          "hidden",
          b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f,
        ),
      );
  }),
);

// journey
$("#timeline").innerHTML = DATA.journey
  .map(
    (j) => `
  <div class="tl-item"><div class="tl-date">${esc(j.date)}</div>
  <div class="card"><h3>${esc(j.title)}</h3><p>${esc(j.text)}</p></div></div>`,
  )
  .join("");

// contact + footer
$("#contactBtns").innerHTML =
  `<a class="btn primary" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${ico.linkedin} LinkedIn</a>` +
  `<a class="btn ghost" href="${esc(L.github)}" target="_blank" rel="noopener">${ico.github} GitHub</a>` +
  (L.email
    ? `<a class="btn ghost" href="mailto:${esc(L.email)}">${ico.mail} Email me</a>`
    : "");
$("#footLinks").innerHTML =
  `<a href="${esc(L.github)}" target="_blank" rel="noopener">GitHub</a> · <a href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`;
$("#year").textContent = new Date().getFullYear();

/* ============================ BEHAVIOUR ============================ */
// theme
const root = document.documentElement,
  tb = $("#themeBtn");
let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}
const initial =
  saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const setTheme = (t) => {
  root.dataset.theme = t;
  tb.textContent = t === "dark" ? "☀️" : "🌙";
  try {
    localStorage.setItem("theme", t);
  } catch (e) {}
};
setTheme(initial);
tb.addEventListener("click", () =>
  setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
);

// mobile menu
const nl = $("#navLinks");
$("#menuBtn").addEventListener("click", () => nl.classList.toggle("open"));
nl.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nl.classList.remove("open")),
);

// reveal on scroll + active link
const targets = document.querySelectorAll(".card, .about-text, .filters");
targets.forEach((t) => t.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  targets.forEach((t) => io.observe(t));
  const links = [...nl.querySelectorAll("a")];
  const so = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document.querySelectorAll("section[id]").forEach((s) => so.observe(s));
} else {
  targets.forEach((t) => t.classList.add("in"));
}