class OrehusImageTilingContext implements MazeContext<String> {

  private cx: CanvasRenderingContext2D

  constructor(cx: CanvasRenderingContext2D) {
    this.cx = cx
  }

  loadImage(name: string): HTMLImageElement {
    let img = new Image()
    img.src = name
    return img
  }

  readonly tiles = new Map([
    ['empty', this.loadImage('/assets/orehus_python_empty.png')],
    ['horizontal', this.loadImage('/assets/orehus_python_2_h.png')],
    ['vertical', this.loadImage('/assets/orehus_python_2_v.png')],
    ['cross', this.loadImage('/assets/orehus_python_x.png')],

    ['down-right', this.loadImage('/assets/orehus_python_dr.png')],
    ['down-left', this.loadImage('/assets/orehus_python_dl.png')],
    ['up-right', this.loadImage('/assets/orehus_python_ur.png')],
    ['up-left', this.loadImage('/assets/orehus_python_ul.png')],

    ['up-end', this.loadImage('/assets/orehus_python_1_v.png')],
    ['down-end', this.loadImage('/assets/orehus_python_3_v.png')],
    ['left-end', this.loadImage('/assets/orehus_python_3_h.png')],
    ['right-end', this.loadImage('/assets/orehus_python_1_h.png')],

    ['up-right-down', this.loadImage('/assets/orehus_python_urd.png')],
    ['up-left-down', this.loadImage('/assets/orehus_python_uld.png')],
    ['left-up-right', this.loadImage('/assets/orehus_python_lur.png')],
    ['left-down-right', this.loadImage('/assets/orehus_python_ldr.png')],
  ])

  fill(maze: Array<Array<string>>): string {
    this.cx.clearRect(0,0,16*45+8, 16*45+8)
    let result = ""


    for (let r = 0; r < maze.length; ++r) {
      for (let c = 0; c < maze[r].length; ++c) {
        // @ts-ignore
        this.cx.drawImage(this.tiles.get(maze[r][c]), 8 * c, 8 * r, 8, 8)
      }
    }

    return result
  }
}

export {
  OrehusImageTilingContext
}
