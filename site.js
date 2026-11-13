(() => {
  const button = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!button || !links) return;
  const close = () => {
    links.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Menu';
  };
  button.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close' : 'Menu';
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
})();
