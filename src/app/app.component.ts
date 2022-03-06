import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import generate from 'generate-maze';
import mazeTiling from "../maze/maze";
import {AsciiTilingContext} from "../maze/ascii-tiling";
import {OrehusTilingContext} from "../maze/orehus-tiling";
import {MazeComponent} from "./maze.component";
import {OrehusImageTilingContext} from "../maze/orehus-image-tiling";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orehus-maze';

  // @ts-ignore
  appCanvas: MazeComponent;

  @ViewChild('appCanvas') set content(content: ElementRef) {
    console.log(content)
    if (content) { // initially setter gets called with undefined


      // @ts-ignore
      this.appCanvas = content;
    }
  }


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

    let seed = isNaN(Number(this.form.value.seed)) ? Date.now() : this.form.value.seed
    console.log(seed)

    const maze = generate(this.form.value.mazeWidth, this.form.value.mazeHeight, true, seed);


    let res = mazeTiling(maze, this.form.value.mazeWidth, this.form.value.mazeHeight)

    switch (mode) {
      case "orehus-image":
        new OrehusImageTilingContext(this.appCanvas.cx).fill(res)
        break;
      case "orehus":
        this.testForm.setValue({testValue1: new OrehusTilingContext().fill(res)})
        break;
      case "ascii":
        this.testForm.setValue({testValue1: new AsciiTilingContext().fill(res)})
        break;
    }

  }


}
