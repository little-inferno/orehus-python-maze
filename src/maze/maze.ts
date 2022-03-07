type Cell = {
  x: number,
  y: number,
  top: boolean,
  left: boolean,
  bottom: boolean,
  right: boolean,
  set: number,
}

function mazeTiling(maze: Array<Array<Cell>>, width: number, height: number) {
  let resultMaze = Array(height * 2);

  for (let r = 0; r < maze.length; ++r) {
    let row = maze[r];

    resultMaze[r * 2] = Array(width * 2 + 1);
    resultMaze[r * 2 + 1] = Array(width * 2 + 1);

    if (maze[r][row.length - 1] && maze[r][row.length - 1].top && resultMaze[r * 2 - 1] && resultMaze[r * 2 - 1][row.length * 2])
      resultMaze[r * 2][row.length * 2] = 'up-left-down'
    else if (maze[r][row.length - 1] && maze[r][row.length - 1].top)
      resultMaze[r * 2][row.length * 2] = 'down-left'
    else
      resultMaze[r * 2][row.length * 2] = 'vertical'

    resultMaze[r * 2 + 1][row.length * 2] = 'vertical'

    for (let c = 0; c < row.length; ++c) {
      if (maze[r][c].top && maze[r][c].left) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'cross'
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = 'left-down-right'
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'up-right-down'
        else
          resultMaze[r * 2][c * 2] = 'down-right'

        resultMaze[r * 2][c * 2 + 1] = 'horizontal'
        resultMaze[r * 2 + 1][c * 2] = 'vertical'
      } else if (maze[r][c].top) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'left-up-right'
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = 'horizontal'
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'up-right'
        else
          resultMaze[r * 2][c * 2] = 'left-end'

        resultMaze[r * 2][c * 2 + 1] = 'horizontal'
        resultMaze[r * 2 + 1][c * 2] = 'empty'
      } else if (maze[r][c].left) {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'up-left-down'
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = 'down-left'
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'vertical'
        else
          resultMaze[r * 2][c * 2] = 'up-end'

        resultMaze[r * 2 + 1][c * 2] = 'vertical'
        resultMaze[r * 2][c * 2 + 1] = 'empty'
      } else {
        if (maze[r][c - 1] && maze[r][c - 1].top && maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'up-left'
        else if (maze[r - 1] && maze[r - 1][c].left)
          resultMaze[r * 2][c * 2] = 'down-end'
        else if (maze[r][c - 1] && maze[r][c - 1].top)
          resultMaze[r * 2][c * 2] = 'right-end'
        else
          resultMaze[r * 2][c * 2] = 'empty'

        resultMaze[r * 2 + 1][c * 2] = 'empty'
        resultMaze[r * 2][c * 2 + 1] = 'empty'
      }

      resultMaze[r * 2 + 1][c * 2 + 1] = 'empty'
    }
  }

  resultMaze[maze.length * 2] = Array(width * 2 + 1);

  for (var c = 0; c < maze[maze.length - 1].length; ++c) {
    if (maze[maze.length - 1] && maze[maze.length - 1][c].left &&
      resultMaze[maze.length * 2] && resultMaze[maze.length * 2][c * 2 - 1])
      resultMaze[maze.length * 2][c * 2] = 'left-up-right'
    else if (maze[maze.length - 1] && maze[maze.length - 1][c].left)
      resultMaze[maze.length * 2][c * 2] = 'up-right'
    else
      resultMaze[maze.length * 2][c * 2] = 'horizontal'

    resultMaze[maze.length * 2][c * 2 + 1] = 'horizontal'
  }

  resultMaze[height * 2][width * 2] = 'up-left'

  return resultMaze;
}

export {
  Cell,
  mazeTiling
}
