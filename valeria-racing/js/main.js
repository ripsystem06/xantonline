(() => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  const revealEls = document.querySelectorAll('.reveal');
  const sections = [...document.querySelectorAll('main section[id]')];
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const galleryButtons = document.querySelectorAll('.gallery-card');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  // Header state
  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Mobile menu
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });

  // Reveal observer
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Active nav section
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // Gallery lightbox
  galleryButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.image;
      lightbox.showModal();
    });
  });

  const closeLightbox = () => lightbox?.close();

  lightboxClose?.addEventListener('click', closeLightbox);

  lightbox?.addEventListener('click', event => {
    const rect = lightbox.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!inside) closeLightbox();
  });

  // Prototype contact form
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();

    if (formStatus) {
      formStatus.textContent =
        'Formulario de demostración: conecta aquí tu correo, WhatsApp o backend.';
    }
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
