/**
 * contact-form.js — Contact form submit handler (index.html)
 */
const cForm = document.getElementById('contact-form');
const cBtn = document.getElementById('c-submit-btn');
const cSuccess = document.getElementById('c-success');
const cError = document.getElementById('c-error');

cForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const honeypot = cForm.querySelector('input[name="website"]');
  if (honeypot && honeypot.value) {
    cSuccess.style.display = 'block';
    cForm.reset();
    return;
  }
  cBtn.disabled = true;
  cBtn.innerHTML = '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation:spin2 .9s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Enviando...';
  cSuccess.style.display = 'none';
  cError.style.display = 'none';
  try {
    const res = await fetch(cForm.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(cForm)))
    });
    if (res.ok) { cSuccess.style.display = 'block'; cForm.reset(); }
    else { throw new Error(); }
  } catch {
    cError.style.display = 'block';
  } finally {
    cBtn.disabled = false;
    cBtn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Enviar mensaje';
  }
});
