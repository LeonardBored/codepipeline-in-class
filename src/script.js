// Hero carousel logic
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".hero-img");
  const dots = document.querySelectorAll(".hero-pagination .dot");
  const captions = document.querySelectorAll(".hero-caption .caption");
  let current = 0;

  function showSlide(idx) {
    images.forEach((img, i) => img.classList.toggle("active", i === idx));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === idx));
    captions.forEach((cap, i) => cap.classList.toggle("active", i === idx));
    current = idx;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => showSlide(idx));
  });

  setInterval(() => {
    showSlide((current + 1) % images.length);
  }, 4000);

  // Smooth scrolling for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Show dialog on contact form submit
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form Submitted");
      form.reset();
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  // Set initial icon
  function updateThemeIcon() {
    if (body.classList.contains("light")) {
      themeToggle.textContent = "🌞";
    } else {
      themeToggle.textContent = "🌙";
    }
  }
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("light");
    updateThemeIcon();
  });
  updateThemeIcon();
});
