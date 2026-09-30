// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setNav(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

// Gallery lightbox (links still open the full image if JS or <dialog> is unavailable)
const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const img = lightbox.querySelector('img');
  document.querySelectorAll('.gallery a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = link.href;
      img.alt = link.querySelector('img').alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });
}

// Keep the copyright year current
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Gallery media is pulled from the old site at build time. If a file is
// missing, drop it rather than show a broken image; hide the section if empty.
const gallery = document.getElementById('gallery');
if (gallery) {
  const hideIfEmpty = () => {
    if (!gallery.querySelector('.gallery li, .gallery-video')) {
      gallery.hidden = true;
      document.querySelectorAll('a[href="#gallery"]').forEach((a) => a.closest('li').remove());
    }
  };
  gallery.querySelectorAll('.gallery img').forEach((img) => {
    const drop = () => { img.closest('li').remove(); hideIfEmpty(); };
    if (img.complete && img.naturalWidth === 0) drop(); else img.addEventListener('error', drop);
  });
  const video = gallery.querySelector('.gallery-video');
  if (video) {
    const dropVideo = () => { video.remove(); hideIfEmpty(); };
    if (video.error) dropVideo(); else video.addEventListener('error', dropVideo);
  }
}
