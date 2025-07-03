document.addEventListener("DOMContentLoaded", function () {
  // === Hamburger Menu Toggle ===
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // === Typed.js Animation ===
  var typed = new Typed(".typed-text", {
    strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });

  // === Particles Background ===
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#00ffea" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffea",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });

  // === Contact Form Submit with Popup (No Redirect) ===
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("thank-you-popup");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      const response = await fetch("https://formspree.io/f/xwpbrjja", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        popup.style.display = "block";
        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);
      } else {
        alert("❌ Message failed. Please try again.");
      }
    });
  }

  // === Highlight Active Nav Link Based on Scroll ===
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-links li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});



