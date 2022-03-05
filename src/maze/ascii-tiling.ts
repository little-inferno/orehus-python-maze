export default function tiles() {
  return new Map([
    ['empty', ' '],
    ['horizontal', '━'],
    ['vertical', '┃'],
    ['cross', '╋'],

    ['down-right', '┏'],
    ['down-left', '┓'],
    ['up-right', '┗'],
    ['up-left', '┛'],

    ['up-end', '╻'],
    ['down-end', '╹'],
    ['left-end', '╺'],
    ['right-end', '╸'],

    ['up-right-down', '┣'],
    ['up-left-down', '┫'],
    ['left-up-right', '┻'],
    ['left-down-right', '┳'],
  ])
}
