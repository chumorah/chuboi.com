// ─────────────────────────────────────────────────────────────
// EDIT ME: everything on the page that changes lives in these lists.
// ─────────────────────────────────────────────────────────────

const IG = "https://www.instagram.com/chuboi";

// Brand partnership cards.
//   image: cover photo in assets/img
//   video: optional .mp4 in assets/video — plays muted on hover instead of the photo
//   url:   link to the actual post (Instagram / TikTok / YouTube). Swap the profile links for the real posts.
const WORK = [
  { brand: "Man Utd x Adidas", type: "Kit launch", desc: "Kit launch shoot and social content with the Manchester United squad.", image: "assets/img/p07.jpg", url: IG },
  { brand: "EA SPORTS", type: "Host & creator", desc: "On-stage presenting at EA SPORTS esports events.", image: "assets/img/p12.jpg", url: "https://www.youtube.com/channel/UCyMF5o_gAYBPDd5PkS3gugA" },
  { brand: "McDonald's", type: "Sponsored content", desc: "Football-led social content for a global audience.", image: "assets/img/p21.jpg", url: "https://www.tiktok.com/@chuboi" },
  { brand: "Your brand", type: "Let's talk", desc: "Reach 1M+ engaged FC and football fans.", image: "assets/img/p11.jpg", url: "mailto:chuboi@sportfive.com", cta: true },
];

// Gallery photos (shown in this order).
const GALLERY = [
  "p01", "p03", "p07", "p02", "p04", "p10",
  "p06", "p14", "p20", "p11", "p13",
  "p15", "p16", "p19", "p21",
  // New photos from the NEW BEST PICS folder
  "n01", "n02", "n05", "n06", "n04", "n07", "n10", "n11", "n12",
  "n13", "n15", "n16", "n22", "n23", "about", "n26",
  "n27", "p08", "n28",
];

const PLATFORMS = [
  { name: "Instagram", handle: "@chuboi", count: "489K", url: IG },
  { name: "Twitch", handle: "chuboi7", count: "173K", url: "https://twitch.tv/chuboi7" },
  { name: "TikTok", handle: "@chuboi", count: "172K", url: "https://www.tiktok.com/@chuboi" },
  { name: "YouTube", handle: "ChuBoi", count: "120K", url: "https://www.youtube.com/channel/UCyMF5o_gAYBPDd5PkS3gugA" },
  { name: "Facebook", handle: "ChuBoi", count: "46K", url: "https://www.facebook.com/1677014387321522" },
];

// ─────────────────────────────────────────────────────────────

const external = (url) => url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";

document.getElementById("workGrid").innerHTML = WORK.map((w) => `
  <a class="card reveal" href="${w.url}"${external(w.url)}>
    <div class="card__media">
      ${w.video
        ? `<video src="${w.video}" poster="${w.image}" muted loop playsinline preload="none"></video>`
        : `<img src="${w.image}" alt="${w.brand}" loading="lazy">`}
      <span class="card__play">${w.cta ? "→" : "▶"}</span>
    </div>
    <div class="card__meta"><span class="card__brand">${w.brand}</span><span class="card__type">${w.type}</span></div>
    <p class="card__desc">${w.desc}</p>
  </a>`).join("");

document.querySelectorAll(".card video").forEach((v) => {
  const card = v.closest(".card");
  card.addEventListener("mouseenter", () => v.play());
  card.addEventListener("mouseleave", () => v.pause());
});

document.getElementById("galleryGrid").innerHTML = GALLERY.map((p) => `
  <button class="reveal" data-src="assets/img/${p}.jpg" aria-label="Open photo">
    <img src="assets/img/${p}.jpg" alt="ChuBoi with footballers and at events" loading="lazy">
  </button>`).join("");

// Hero stats: each platform shows its logo (assets/social/<name>.svg) and follower count; the name stays as the link label.
document.getElementById("platformList").innerHTML = PLATFORMS.map((p) => `
  <li><a class="social" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.name} ${p.handle}, ${p.count} followers">
    <span class="social__icon" style="--icon: url('assets/social/${p.name.toLowerCase()}.svg')"></span>
    <span class="social__count">${p.count}</span>
  </a></li>`).join("");

// Lightbox
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
const closeLb = () => { lb.hidden = true; lbImg.src = ""; };
document.getElementById("galleryGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  lbImg.src = btn.dataset.src;
  lb.hidden = false;
});
lb.addEventListener("click", (e) => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// Reveal on scroll
document.querySelectorAll(".section-head, .about__text, .about__media, .contact").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
