import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionAlumnoComponent } from './components/informacion-alumno.component';



@NgModule({
  declarations: [
    InformacionAlumnoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InformacionAlumnoComponent
  ],
})
export class InformacionAlumnoModule { }
