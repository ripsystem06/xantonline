(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add('visible'));
  const form = document.querySelector('#contacto-form');
  form?.addEventListener('submit', async event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button');
    const original = button.innerHTML;
    button.disabled = true; button.textContent = 'Enviando…';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('request failed');
      form.reset(); status.textContent = 'Gracias. Recibimos tu mensaje y te contactaremos pronto.';
    } catch (_) { status.textContent = 'No pudimos enviar el mensaje. Escríbenos por WhatsApp.'; }
    button.disabled = false; button.innerHTML = original;
  });
})();
