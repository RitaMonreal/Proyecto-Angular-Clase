import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent {

 

  @Output()
  public onClickMuestraProgramas: EventEmitter<void> = new EventEmitter();  

  @Output()
  public onClickMuestraCaricaturas: EventEmitter<void> = new EventEmitter();

  @Output()
  public onClickInfoAlumno: EventEmitter<void> = new EventEmitter();
  
  public muestraPrograma(): void {
    this.onClickMuestraProgramas.emit();
  }

  public muestraCaricatura(): void {
    this.onClickMuestraCaricaturas.emit();
  }

  public muestraInformacionAlumno(): void {
    this.onClickInfoAlumno.emit();
  }
}
