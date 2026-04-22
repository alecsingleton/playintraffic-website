(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function buildWalkRoute() {
    var wrap = document.querySelector('.page-walk-route');
    var dot = document.querySelector('.convergence-dot');
    var svg = wrap && wrap.querySelector('svg');
    var path = wrap && wrap.querySelector('.route-line--walk');
    if (!wrap || !dot || !svg || !path) return;

    var docHeight = document.documentElement.scrollHeight;
    var pageWidth = document.documentElement.clientWidth;
    wrap.style.height = docHeight + 'px';

    // Measure the convergence dot's actual pixel position on the page.
    var dotRect = dot.getBoundingClientRect();
    var endX = dotRect.left + dotRect.width / 2 + window.scrollX;
    var endY = dotRect.top + dotRect.height / 2 + window.scrollY;

    // Use a pixel-coordinate viewBox so the path maps 1:1 onto the page.
    svg.setAttribute('viewBox', '0 0 ' + pageWidth + ' ' + docHeight);
    svg.setAttribute('preserveAspectRatio', 'none');

    var cx = pageWidth / 2;
    var amplitude = Math.min(pageWidth * 0.12, 100);

    // Wiggle path from bottom of page up to just below the subtitle.
    // Leave a comfortable gap (subtitleGap) below the dot for the dodge-and-converge segment.
    var subtitleGap = 260;
    var approachY = endY + subtitleGap;
    var wiggleSpan = docHeight - approachY;
    var waves = Math.max(3, Math.round(wiggleSpan / 260));
    var waveHeight = wiggleSpan / waves;

    var d = 'M' + cx + ',' + docHeight;
    for (var i = 0; i < waves; i++) {
      var y2 = docHeight - (i + 1) * waveHeight;
      var dir = (i % 2 === 0 ? 1 : -1);
      if (i === 0) {
        var c1x = cx + dir * amplitude;
        var c1y = docHeight - waveHeight * 0.35;
        var c2x = cx - dir * amplitude;
        var c2y = docHeight - waveHeight * 0.7;
        d += ' C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + cx + ',' + y2;
      } else {
        var sx = cx - dir * amplitude;
        var sy = y2 + waveHeight * 0.35;
        d += ' S' + sx + ',' + sy + ' ' + cx + ',' + y2;
      }
    }

    // Dodge the subtitle by swinging wide to the right, then hook back into the dot.
    var dodgeX = Math.min(pageWidth - 40, endX + 320);
    var midY = (approachY + endY) / 2;
    d += ' C' + (cx + 80) + ',' + (approachY - 40) + ' ' +
             dodgeX + ',' + (midY + 40) + ' ' +
             dodgeX + ',' + midY;
    d += ' C' + dodgeX + ',' + (midY - 60) + ' ' +
             (endX + 180) + ',' + (endY - 5) + ' ' +
             endX + ',' + endY;

    path.setAttribute('d', d);

    var len = path.getTotalLength();
    path.style.strokeDasharray = len + 'px';

    if (reducedMotion) {
      path.style.strokeDashoffset = '0px';
      return;
    }

    if (!path.dataset.animated) {
      if (typeof path.animate === 'function') {
        path.animate(
          [{ strokeDashoffset: len + 'px' }, { strokeDashoffset: '0px' }],
          { duration: 3500, delay: 800, easing: 'ease-out', fill: 'both' }
        );
      } else {
        path.style.strokeDashoffset = '0px';
      }
      path.dataset.animated = '1';
    } else {
      path.style.strokeDashoffset = '0px';
    }
  }

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

  var resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildWalkRoute, 150);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeroRoutes();
    buildWalkRoute();
    initStepLines();
  });

  window.addEventListener('load', buildWalkRoute);
  window.addEventListener('resize', onResize);
})();
