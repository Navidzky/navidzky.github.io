// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.masthead__toggle');
  var nav = document.querySelector('.masthead__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
});

// Expandable paper abstracts
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.abs-toggle');
  if (!btn) return;
  var body = document.getElementById(btn.getAttribute('aria-controls'));
  if (!body) return;
  var open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  body.hidden = open;
  var label = btn.querySelector('.abs-toggle__label');
  if (label && btn.dataset.labelOpen && btn.dataset.labelClosed) {
    label.textContent = open ? btn.dataset.labelClosed : btn.dataset.labelOpen;
  }
});
