import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './components/program/program.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { Caricaturas2Page } from './caricaturas2.pages';

@NgModule({
  declarations: [
    ProgramComponent,
    ProgramListComponent,
    Caricaturas2Page
  ],
  exports:[
    ProgramListComponent
  ],
  imports:[
    CommonModule
  ]
  })
export class Caricaturas2Module { }
