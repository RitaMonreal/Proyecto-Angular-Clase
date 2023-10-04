import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionAlumnoComponent } from './components/informacion-alumno.component';
import { InformacionAlumnoPage } from './informacion-alumno.component';



@NgModule({
  declarations: [
    InformacionAlumnoComponent,
    InformacionAlumnoPage
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InformacionAlumnoComponent
  ],
})
export class InformacionAlumnoModule { }
