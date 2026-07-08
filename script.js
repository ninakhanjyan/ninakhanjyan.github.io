// ---- SCROLL TO TOP BUTTON ----
(function () {
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  });
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ---- MOBILE NAV TOGGLE ----
(function () {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
})();

// ---- ACTIVE NAV LINK ON SCROLL ----
(function () {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.style.color = '';
          });
          const activeLink = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
          if (activeLink) activeLink.style.color = '#20c997';
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
