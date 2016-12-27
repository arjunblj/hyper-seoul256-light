const backgroundColor = '#e1e1e1'
const foregroundColor = '#616161'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = {
  black       : backgroundColor,
  red         : '#be7472', // red
  green       : '#006f00', // green
  yellow      : '#e19972', // yellow
  blue        : '#0099bd', // blue
  magenta     : '#9b1d72', // pink
  cyan        : '#009899', // cyan
  white       : '#f1f1f1', // light gray
  lightBlack  : '#616161', // medium gray
  lightRed    : '#be7472', // red
  lightGreen  : '#719872', // green
  lightYellow : '#be9973', // yellow
  lightBlue   : '#719abc', // blue
  lightMagenta: '#9a7599', // pink
  lightCyan   : '#719899', // cyan
  colorCubes  : '#e9e9e9', // light-ish gray
  grayscale   : foregroundColor
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        font-weight: bold;
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
      }
    `
  })
}
