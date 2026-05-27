// Renders the shared topbar; auto-highlights active page.
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const nav = [
    ['index.html',       'Overview'],
    ['foundations.html', 'Foundations'],
    ['components.html',  'Components'],
    ['patterns.html',    'Patterns'],
  ];
  const links = nav.map(([href, label]) =>
    `<a href="${href}" class="${href === here ? 'active' : ''}">${label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="topbar">
      <div class="topbar-inner">
        <a href="index.html" class="brand">
          <img src="assets/brand/favicon.png" alt="" />
          <span>Twiglit</span>
          <span class="brand-sub">Design System</span>
        </a>
        <nav class="nav-links">${links}</nav>
      </div>
    </header>
  `);
})();
