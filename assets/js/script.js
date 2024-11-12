/* Toggle Menu Icon */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll section active links */

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");

  function updateActiveClass() {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const sectionTop = targetSection.offsetTop - 150;
        const sectionHeight = targetSection.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
    /* Sticky Navbar */

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  window.addEventListener("scroll", updateActiveClass);
  updateActiveClass();
});

/* Scroll Reveal */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".projects-box, .contact-box", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .home-content p, .about-content ", {
  origin: "left",
});

/* Typed JS */

const typed = new Typed(".multiple-text", {
  strings: ["Junior Full Stack Developer", "Junior Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* Read More */

function toggleText(event) {
  event.preventDefault();

  let moreText = document.getElementById("moreText");
  let btnText = event.target;

  if (moreText.style.display == "none") {
    moreText.style.display = "inline";
    btnText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.textContent = "Read More";
  }
}
