/*!
 * zwwang bqliu
 * simple svg animation
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.$$animatedSvg = factory());
}(this, (function () { 'use strict';

  var modes = {
    STATIC: 'static',
    LINEAR: 'linear'
  };

  var defaultTime = 0;

  var defaultProperties = {
    'stroke-dasharray': '0 var(--s-length)',
    'stroke-dashoffset': 'var(--s-length)',
    'animation-duration': '0s',
    'animation-name': 'animated-svg-dash',
    'animation-timing-function': 'linear',
    'animation-delay': '0s',
    'animation-fill-mode': 'forwards',
    '--s-index': '0',
    '--s-length': '0'
  };

  // { animation-delay, --s-index, --s-length }
  var setPathAnimationProperties = function (pathDOM, properties) {
    if ( properties === void 0 ) properties = { };

    var allProperties = Object.assign({ }, defaultProperties, properties);
    Object.keys(allProperties).forEach(function (propertyName) { return pathDOM.style.setProperty(
      propertyName, allProperties[propertyName]
    ); });
  };

  function index (svgDOM, ref) {
    if ( ref === void 0 ) ref = { };
    var mode = ref.mode; if ( mode === void 0 ) mode = modes.STATIC;
    var time = ref.time; if ( time === void 0 ) time = defaultTime;

    var paths = svgDOM.querySelectorAll('path');
    var delay = 0;
    for (var i = 0; i < paths.length; ++i) {
      var p = paths[i], len = p.getTotalLength();
      var animationDuration = time;
      var animationDelay = delay;
      if (mode === modes.STATIC) {
        delay += time;
      } else {
        animationDuration = len * time;
        delay += animationDuration;
      }
      setPathAnimationProperties(p, {
        'animation-duration': animationDuration + 's',
        'animation-delay': animationDelay + 's',
        '--s-index': i,
        '--s-length': len
      });
    }
  }

  return index;

})));

//# sourceMappingURL=animation.umd.js.map
