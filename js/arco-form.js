/**
 * arco-form.js — ARCO form submit handler (derechos-arco.html)
 */
const form = document.getElementById('arco-form');
const btn = document.getElementById('submit-btn');
const success = document.getElementById('form-success');
const error = document.getElementById('form-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const honeypot = form.querySelector('input[name="website"]');
  if (honeypot && honeypot.value) {
    success.style.display = 'block';
    form.reset();
    return;
  }
  btn.disabled = true;
  btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation:spin 1s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Enviando...';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    if (res.ok) {
      success.style.display = 'block';
      form.reset();
    } else { throw new Error(); }
  } catch {
    error.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Enviar solicitud ARCO';
  }
});
