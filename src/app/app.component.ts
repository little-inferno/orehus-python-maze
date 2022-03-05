import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import generate from 'generate-maze';
import mazeTiling from "../maze/maze";
import tiles from "../maze/ascii-tiling";
import orehusTiles from "../maze/orehus-tiling";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orehus-maze';

  readonly form = new FormGroup({
    mazeWidth: new FormControl(3, Validators.required),
    mazeHeight: new FormControl(3, Validators.required),
    seed: new FormControl(Validators.required)
  });

  readonly testFormd = new FormGroup({
    testValue: new FormControl('orehus'),
  });

  readonly testForm = new FormGroup({
    testValue1: new FormControl('A field', Validators.required),
  });

  onClick(event: MouseEvent) {

    let mode = this.testFormd.value.testValue

    let tile = mode == "orehus" ?  orehusTiles() : tiles()

    let seed = isNaN(Number(this.form.value.seed)) ? Date.now() : this.form.value.seed
    console.log(seed)

    const maze = generate(this.form.value.mazeWidth, this.form.value.mazeHeight, true, seed);


    let res = mazeTiling(maze, this.form.value.mazeWidth, this.form.value.mazeHeight, tile)

    let xx = ""

    for (var r = 0; r < res.length; ++r) {
      for (var c = 0; c < res[r].length; ++c)
        if (res[r][c] === undefined)
          res[r][c] = "*"

      xx += res[r].join('')
      xx += '\n'
    }

    this.testForm.setValue({testValue1: xx})

    console.log(maze);
  }


}

/*

*━━━━━*
┃     ┃
┃ * * ┃
┃ ┃ ┃ ┃
┃ *━*━*
┃     ┃
*━━━━━*


 */
