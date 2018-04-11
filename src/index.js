const modes = {
  STATIC: 'static',
  LINEAR: 'linear'
}

const defaultTime = 0

const defaultProperties = {
  'stroke-dasharray': 'var(--s-length)',
  'stroke-dashoffset': 'var(--s-length)',
  'animation-duration': '0s',
  'animation-name': '',
  'animation-timing-function': 'linear',
  'animation-delay': '0s',
  'animation-fill-mode': 'forwards',
  '--s-index': '0',
  '--s-length': '0'
}

// { animation-delay, --s-index, --s-length }
const setPathAnimationProperties = function (pathDOM, properties = { }) {
  const allProperties = Object.assign({ }, defaultProperties, properties)
  Object.keys(allProperties).forEach((propertyName) => pathDOM.style.setProperty(
    propertyName, allProperties[propertyName]
  ))
}

export default function (svgDOM, { mode = modes.STATIC, time = defaultTime, animationName = 'animated-svg-dash' } = { }) {
  const paths = svgDOM.querySelectorAll('path')
  let delay = 0
  for (let i = 0; i < paths.length; ++i) {
    const p = paths[i], len = p.getTotalLength()
    let animationDuration = time
    const animationDelay = delay
    if (mode === modes.STATIC) {
      delay += time
    } else {
      animationDuration = len * time
      delay += animationDuration
    }
    setPathAnimationProperties(p, {
      'animation-name': animationName,
      'animation-duration': animationDuration + 's',
      'animation-delay': animationDelay + 's',
      '--s-index': i,
      '--s-length': len
    })
  }
}
