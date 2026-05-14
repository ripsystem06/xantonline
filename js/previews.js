/**
 * previews.js — Live site preview loader via thum.io (index.html)
 */
document.addEventListener('DOMContentLoaded', function() {
  const previews = [
    { el: 'prev-xant',  url: 'https://xant.com.mx' },
    { el: 'prev-baja',  url: 'https://www.pagoserviciosbaja.com' },
    { el: 'prev-stoli', url: 'https://www.stoliuniforms.com' },
    { el: 'prev-valt',  url: 'https://valterinkfantasymaps.com' },
  ];
  previews.forEach(function(p) {
    var el = document.getElementById(p.el);
    if (!el) return;
    var img = document.createElement('img');
    img.src = 'https://image.thum.io/get/width/1280/crop/800/noanimate/' + p.url;
    img.alt = 'Preview ' + p.url;
    img.className = el.className;
    img.style.cssText = el.style.cssText || '';
    img.onerror = function() { /* keep original */ };
    img.onload = function() { el.parentNode.replaceChild(img, el); };
  });
});
