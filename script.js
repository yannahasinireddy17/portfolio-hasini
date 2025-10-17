document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const topBtn = document.getElementById('topBtn');
  const sections = document.querySelectorAll('section[id]');
  const darkToggle = document.getElementById('darkToggle');

  // Mobile menu
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('show'));
  });

  // Back to top - show/hide
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });
  topBtn?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Active link on scroll
  const setActiveLink = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (scrollPos >= top && scrollPos < top + height) {
        link?.classList.add('active');
      } else {
        link?.classList.remove('active');
      }
    });
  };
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // Simple reveal on scroll
  const reveal = () => {
    document.querySelectorAll('.section').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('show');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();

  // Dark mode toggle if exists
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // persist preference
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // load preference
    const saved = localStorage.getItem('dark-mode') === 'true';
    if (saved) document.body.classList.add('dark-mode');
  }
});
