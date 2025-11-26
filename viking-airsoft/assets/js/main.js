// Simple year auto-update
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
    });
  });
}
