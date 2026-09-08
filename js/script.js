const typingElement = document.getElementById("typing");
const words = [
  "AI Engineer",
  "ML Engineer",
  "Generative AI Developer",
  "LLM Application Builder",
  "Agentic AI Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();

const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.getElementById("sidebar");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  mobileToggle.innerHTML = sidebar.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const body =
    `Hello Laiba,\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `${message}\n\n` +
    `Sent from your portfolio website.`;

  window.location.href =
    `mailto:laibazahidoffical@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
