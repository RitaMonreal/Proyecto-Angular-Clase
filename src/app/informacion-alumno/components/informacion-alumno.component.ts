import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-informacion-alumno',
  templateUrl: './informacion-alumno.component.html',
  styleUrls: ['./informacion-alumno.component.css']
})
export class InformacionAlumnoComponent {
  @Output()
  public onClickShowPrimerM: EventEmitter<void> = new EventEmitter();
  
  public regresarAlPrimerModulo(): void {
    this.onClickShowPrimerM.emit();
  }
}
