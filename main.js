"use strict";

// ── PAGE CONFIG ──────────────────────────────────────────────
const currentPage = document.body.dataset.page;

const pages = [
  {
    id: "index",
    label: "about.me",
    href: "index.html",
    color: "var(--orange)",
  },
  {
    id: "participate",
    label: "participate.pls",
    href: "participate.html",
    color: "var(--green)",
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/espressomartiny",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martina-vok%C3%A1%C4%8Dov%C3%A1-7bb1ba336/",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: "Email",
    href: "mailto:martina.vokacova@ff.cuni.cz",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-2396-2240",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.484 3.872-3.722 0-2.016-1.284-3.722-3.884-3.722h-2.285z"/></svg>`,
  },
  // { label: 'Google Scholar', href: '', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5z"/></svg>` },
  {
    label: "FF UK",
    href: "https://ned.ff.cuni.cz/cs/oddeleni/vyucujici/martina-vokacova/",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22h18M3 10h18M12 3L2 10h20L12 3zM6 10v12M10 10v12M14 10v12M18 10v12"/></svg>`,
  },
];

const readme = `Hi, this is my personal academic website,
welcome!

These days, this site serves mainly as a recruitment platform for research participants -- please see the section <a href="participate.html" style="color:var(--green)">participate</a> for more details.`;

// ── SIDEBAR ──────────────────────────────────────────────────
document.getElementById("sidebar").innerHTML = links
  .map(
    (l) => `
  <a href="${l.href}" class="sidebar-icon" title="${l.label}" aria-label="${l.label}" target="${l.href.startsWith("mailto") ? "_self" : "_blank"}" rel="noopener">
    ${l.icon}
  </a>
`,
  )
  .join("");

// ── EXPLORER ─────────────────────────────────────────────────
document.getElementById("explorer").innerHTML = `
  <div class="explorer-title">Explorer</div>
  <div class="explorer-repo">espressomartiny.github.io</div>

  ${pages
    .map(
      (p) => `
    <a href="${p.href}" class="tree-item ${p.id === currentPage ? "active" : ""}">
      <span class="tree-icon" style="color:${p.color}">◉</span>
      ${p.label}
    </a>
  `,
    )
    .join("")}

  <div class="explorer-divider"></div>

  <div class="readme-block">
    <pre class="readme-text">${readme}</pre>
  </div>
`;

// ── TABS ─────────────────────────────────────────────────────
document.getElementById("tabs").innerHTML = pages
  .map(
    (p) => `
  <a href="${p.href}" class="tab ${p.id === currentPage ? "active" : ""}">
    <span class="tab-dot" style="background:${p.color}"></span>
    ${p.label}
  </a>
`,
  )
  .join("");

// ── LINE NUMBERS ─────────────────────────────────────────────
document.getElementById("line-numbers").innerHTML = Array.from(
  { length: 80 },
  (_, i) => i + 1,
).join("<br>");

// ── STATUS BAR ───────────────────────────────────────────────
document.getElementById("statusbar").innerHTML = `
  <span>⎇ main</span>
  <span>UTF-8</span>
  <span style="margin-left:auto">{ } HTML &nbsp;  Spaces: 2 &nbsp;  🌈 Rainbow</span>
`;

// ── MOBILE HOME OVERLAY ──────────────────────────────────────
const overlay = document.createElement("div");
overlay.id = "mobile-overlay";
overlay.innerHTML = `
  <div id="mobile-overlay-content">
    <button id="overlay-close">✕</button>
    <div id="overlay-nav">
      ${pages
        .map(
          (p) => `
        <a href="${p.href}" class="overlay-nav-item ${p.id === currentPage ? "active" : ""}">
          <span style="color:${p.color}">◉</span> ${p.label}
        </a>
      `,
        )
        .join("")}
    </div>
    <div class="overlay-divider"></div>
    <div id="overlay-links">
      ${links
        .map(
          (l) => `
        <a href="${l.href}" class="overlay-link" title="${l.label}" aria-label="${l.label}"
           target="${l.href.startsWith("mailto") ? "_self" : "_blank"}" rel="noopener">
          ${l.icon} <span>${l.label}</span>
        </a>
      `,
        )
        .join("")}
    </div>
    <div class="overlay-readme">${readme}</div>
  </div>
`;
document.body.appendChild(overlay);

const mobileTab = document.createElement("a");
mobileTab.id = "mobile-home-tab";
mobileTab.textContent = "☰";
mobileTab.href = "#";
mobileTab.className = "tab";
mobileTab.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("open");
});
document
  .getElementById("overlay-close")
  .addEventListener("click", () => overlay.classList.remove("open"));
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.remove("open");
});
document.getElementById("tabs").prepend(mobileTab);
