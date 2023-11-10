/* Scroll section active links */

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');

    function updateActiveClass() {
      const scrollPosition = window.scrollY;

      navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const sectionTop = targetSection.offsetTop - 150;
          const sectionHeight = targetSection.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }

    window.addEventListener('scroll', updateActiveClass);
    updateActiveClass();
  });