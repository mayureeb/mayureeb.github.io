(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var toggle = document.querySelector('.nav__toggle');
  var navigation = document.querySelector('.nav__links');
  function closeMenu() {
    if (!toggle || !navigation) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  }
  if (toggle && navigation) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      navigation.classList.toggle('is-open', open);
    });
    navigation.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
    });
    document.addEventListener('click', function (event) { if (!event.target.closest('.nav')) closeMenu(); });
    window.matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);
  }
  var group = document.querySelector('[data-filter-group="research"]');
  if (group) {
    var buttons = group.querySelectorAll('[data-filter]');
    var projects = document.querySelectorAll('.research-item');
    var count = group.querySelector('.filter-count');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var selected = button.getAttribute('data-filter');
        var visible = 0;
        buttons.forEach(function (item) { var active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
        projects.forEach(function (project) { var show = selected === 'all' || project.getAttribute('data-area') === selected; project.hidden = !show; if (show) visible++; });
        count.textContent = visible + (visible === 1 ? ' project' : ' projects');
      });
    });
  }
})();
