// Chance IT Studio  |  main.js
// Mobile menu toggle and footer year. Contact form handling is added with the contact page.
(function () {
  var head = document.querySelector('.site-head');
  var btn = document.querySelector('.menu-btn');
  if (head && btn) {
    btn.addEventListener('click', function () {
      var open = head.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && head.classList.contains('open')) {
        head.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
