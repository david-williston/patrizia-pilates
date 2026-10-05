// Fades content in as it scrolls into view. Without JS (or with reduced
// motion) nothing is hidden, because .reveal is only added here.
(() => {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.home-card, .post-content > h2, .post-content > p, .post-content > ul, ' +
    '.post-content > table, .post-content > blockquote'
  );

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

  document.querySelectorAll('.home-cards').forEach((grid) => {
    [...grid.children].forEach((card, i) => card.style.setProperty('--reveal-delay', `${i * 90}ms`));
  });

  for (const el of targets) {
    // Skip anything already on screen at load so the first view never flashes
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
    el.classList.add('reveal');
    io.observe(el);
  }
})();
