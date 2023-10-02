import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program/program.component';
import { ProgramListComponent } from './program-list/program-list.component';

@NgModule({
  declarations: [
    ProgramComponent,
    ProgramListComponent
  ],
  exports:[
    ProgramListComponent
  ],
  imports:[
    CommonModule
  ]
  })
export class Caricaturas2Module { }
