class OrehusTilingContext implements MazeContext<String> {
  readonly tiles = new Map([
    ['empty', ':empty:'],
    ['horizontal', ':orehus_python2_h1:'],
    ['vertical', ':orehus_python2:'],
    ['cross', ':orehus_python_x:'],

    ['down-right', ':orehus_python_dr:'],
    ['down-left', ':orehus_python_ld:'],
    ['up-right', ':orehus_python_ru:'],
    ['up-left', ':orehus_python_ul:'],

    ['up-end', ':orehus_python1:'],
    ['down-end', ':orehus_python3:'],
    ['left-end', ':orehus_python3_r:'],
    ['right-end', ':orehus_python1_r:'],

    ['up-right-down', ':orehus_python_x:'],
    ['up-left-down', ':orehus_python_x:'],
    ['left-up-right', ':orehus_python_x:'],
    ['left-down-right', ':orehus_python_x:'],
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
  OrehusTilingContext
}
