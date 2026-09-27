// Chance IT Studio  |  main.js
// Mobile menu, footer year, and the contact form (Web3Forms).
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

  // Contact form
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var loadedAt = Date.now();
  var lastSend = 0;

  function say(msg, ok) {
    status.textContent = msg;
    status.className = 'form-status ' + (ok ? 'ok' : 'err');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);

    // Spam guards: honeypot, too-fast submit, repeat sends
    if (data.get('botcheck')) return;
    if (Date.now() - loadedAt < 3000) { say('Give it a second and try again.', false); return; }
    if (Date.now() - lastSend < 30000) { say('Got your last one. Give me a minute before sending another.', false); return; }

    var missing = ['name', 'contact', 'message'].filter(function (k) { return !String(data.get(k) || '').trim(); });
    if (missing.length) { say('Fill in your name, a way to reach you, and what is going on.', false); return; }

    var sendBtn = form.querySelector('button[type="submit"]');
    sendBtn.disabled = true;
    say('Sending...', true);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          lastSend = Date.now();
          form.reset();
          say('Sent. I will get back to you during open hours.', true);
        } else {
          say('That did not go through. Text me at (618) 946-8844 instead.', false);
        }
      })
      .catch(function () {
        say('That did not go through. Text me at (618) 946-8844 instead.', false);
      })
      .then(function () { sendBtn.disabled = false; });
  });
})();