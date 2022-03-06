class AsciiTilingContext implements MazeContext<String> {
  readonly tiles = new Map([
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

  fill(maze: Array<Array<string>>): string {
    let result = ""

    for (let r = 0; r < maze.length; ++r) {
      for (let c = 0; c < maze[r].length; ++c) {
        result += this.tiles.get(maze[r][c])
      }
      result += '\n'
    }

    return result
  }
}

export {
  AsciiTilingContext
}
