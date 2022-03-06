import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiButtonModule,
  TuiLabelModule,
  TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiGroupModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TuiInputCountModule, TuiInputNumberModule, TuiRadioBlockModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {MazeComponent} from "./maze.component";

@NgModule({
  declarations: [
    AppComponent,
    MazeComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiLabelModule,
    TuiInputCountModule,
    TuiPrimitiveTextfieldModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiTextAreaModule,
    TuiInputNumberModule,
    TuiRadioBlockModule,
    TuiGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
