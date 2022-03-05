type Cell = {
  x: number,
  y: number,
  top: boolean,
  left: boolean,
  bottom: boolean,
  right: boolean,
  set: number,
}

export default function mazeTiling(maze: Array<Array<Cell>>, width: number, height: number, symbols: Map<String, String>) {
  let resultMaze = Array(height * 2);

  for (let r = 0; r < maze.length; ++r) {
    let row = maze[r];

    resultMaze[r * 2] = Array(width * 2 + 1);
    resultMaze[r * 2 + 1] = Array(width * 2 + 1);

    if (maze[r][row.length - 1] && maze[r][row.length - 1].top && resultMaze[r * 2 - 1] && resultMaze[r * 2 - 1][row.length * 2])
      resultMaze[r * 2][row.length * 2] = symbols.get('up-left-down')
    else if (maze[r][row.length - 1] && maze[r][row.length - 1].top)
      resultMaze[r * 2][row.length * 2] = symbols.get('down-left')
    else
      resultMaze[r * 2][row.length * 2] = symbols.get('vertical')

    resultMaze[r * 2 + 1][row.length * 2] = symbols.get('vertical')

    for (let c = 0; c < row.length; ++c) {
      if (maze[r][c].top && maze[r][c].left) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('cross')
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = symbols.get('left-down-right')
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('up-right-down')
        else
          resultMaze[r * 2][c * 2] = symbols.get('down-right')

        resultMaze[r * 2][c * 2 + 1] = symbols.get('horizontal')
        resultMaze[r * 2 + 1][c * 2] = symbols.get('vertical')
      } else if (maze[r][c].top) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('left-up-right')
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = symbols.get('horizontal')
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('up-right')
        else
          resultMaze[r * 2][c * 2] = symbols.get('left-end')

        resultMaze[r * 2][c * 2 + 1] = symbols.get('horizontal')
        resultMaze[r * 2 + 1][c * 2] = symbols.get('empty')
      } else if (maze[r][c].left) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('up-left-down')
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = symbols.get('down-left')
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('vertical')
        else
          resultMaze[r * 2][c * 2] = symbols.get('up-end')

        resultMaze[r * 2 + 1][c * 2] = symbols.get('vertical')
        resultMaze[r * 2][c * 2 + 1] = symbols.get('empty')
      } else {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('up-left')
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = symbols.get('down-end')
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = symbols.get('right-end')
        else
          resultMaze[r * 2][c * 2] = symbols.get('empty')

        resultMaze[r * 2 + 1][c * 2] = symbols.get('empty')
        resultMaze[r * 2][c * 2 + 1] = symbols.get('empty')
      }

      resultMaze[r * 2 + 1][c * 2 + 1] = symbols.get('empty')
    }
  }

  resultMaze[maze.length * 2] = Array(width * 2 + 1);

  for (var c = 0; c < maze[maze.length - 1].length; ++c) {
    if (maze[maze.length - 1] && maze[maze.length - 1][c].left &&
      resultMaze[maze.length * 2] && resultMaze[maze.length * 2][c * 2 - 1])
      resultMaze[maze.length * 2][c * 2] = symbols.get('left-up-right')
    else if (maze[maze.length - 1] && maze[maze.length - 1][c].left)
      resultMaze[maze.length * 2][c * 2] = symbols.get('up-right')
    else
      resultMaze[maze.length * 2][c * 2] = symbols.get('horizontal')

    resultMaze[maze.length * 2][c * 2 + 1] = symbols.get('horizontal')
  }

  resultMaze[height * 2][width * 2] = symbols.get('up-left')

  return resultMaze;
}
