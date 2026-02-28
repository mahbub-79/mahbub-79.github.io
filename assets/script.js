// Navbar toggle (mobile)
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on outside click (mobile)
  document.addEventListener("click", (e) => {
    if (!siteNav.classList.contains("open")) return;
    const target = e.target;
    if (target instanceof Node && !siteNav.contains(target) && !navToggle.contains(target)) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form -> mailto (works on GitHub Pages)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const to = "mahbub.cedp@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
