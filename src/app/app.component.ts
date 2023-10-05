import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rita-monreal-p1';
  public mostrarPrograms=true;
  public mostrarCaricaturas=false;
  public mostrarInformacion=false;

  constructor(private router: Router){} 

  public get isNotProgramRoute(): boolean{
    const currentRoute = this.router.url;
    return !(currentRoute === "/personajes" || currentRoute === "/series");
   
  }

 /* constructor(private router: Router){} 

  public get isProgramRoute(): boolean{
    return this.router.url == "./series";
   
  }*/

  primerModulo(): void{
    this.mostrarPrograms=true;
    this.mostrarCaricaturas=false;
    this.mostrarInformacion=false;
  }

  segundoModulo(): void{
    this.mostrarPrograms=false;
    this.mostrarCaricaturas=true;
    this.mostrarInformacion=false;
  }

  tercerModulo(): void{
    this.mostrarPrograms=false;
    this.mostrarCaricaturas=false;
    this.mostrarInformacion=true;
  }


  regresarAlPrimerModulo(): void {
    this.mostrarPrograms = true; 
    this.mostrarCaricaturas = false; 
    this.mostrarInformacion = false; 
  }

}
