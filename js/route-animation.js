(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeroRoutes() {
    var paths = document.querySelectorAll('.hero-routes .route-line[data-animate]');
    if (!paths.length) return;

    paths.forEach(function (path) {
      var len = path.getTotalLength();
      path.style.setProperty('--line-length', len);

      if (reducedMotion) {
        path.style.strokeDasharray = 'none';
        path.style.strokeDashoffset = '0';
      }
    });
  }

  function initStepLines() {
    var container = document.querySelector('.steps-container');
    if (!container) return;

    var lines = container.querySelectorAll('.step-line');
    if (reducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.closest('.step').classList.add('step-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    lines.forEach(function (line) {
      observer.observe(line);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeroRoutes();
    initStepLines();
  });
})();
