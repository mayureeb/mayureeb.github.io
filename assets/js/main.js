// Project grid filtering
(function () {
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('#grid .card');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-cat') === f;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  // Close mobile menu after clicking a link
  var toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () { if (toggle) toggle.checked = false; });
  });
})();
