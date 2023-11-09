import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';
import { Caricaturas2Service } from '../../services/caricaturas2.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent {

  public searchTerm: string = "";
  public sortAsc: boolean = true; 
  public programId: string = "";
  public programTitle: string = "";
  public programImage: string = "";

  constructor(private caricaturas2Service: Caricaturas2Service){
    this.searchPrograms();
  }

  public get programs(): program[]{
    return this.caricaturas2Service.programs;
  }




  public onSortPrograms(): void {
    console.log('Botón "Ordenar A-Z" presionado');
    this.sortAsc = !this.sortAsc; // Cambia el estado del orden
    console.log(`Valor de this.sortAsc: ${this.sortAsc}`);
    this.onSortProgramsAZ(this.sortAsc);
  }
  


 /* public onSortPrograms(): void {
    this.sortAsc = !this.sortAsc; // Cambia el estado del orden
    this.onSortProgramsAZ(this.sortAsc);
  }*/
  public onSortProgramsAZ(sortAsc: boolean): void {
    this.caricaturas2Service.fetchProgramFromApi(this.searchTerm, sortAsc).subscribe({
      next: (response: any) => {
        this.caricaturas2Service.programs = response.programList;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public createProgram(){
    const newProgram: program = { id: +this.programId, title: this.programTitle, image: this.programImage };
    this.caricaturas2Service.createProgram(newProgram).subscribe(
      {
        next: (response: any) =>{
          console.log(response);
        },
        error: (error: any) =>{
          console.log(error);
        }
      }
    )
  }
    


  public searchByTerm(): void{
    console.log('searchByTerm() called');
    this.searchPrograms(this.searchTerm);
  }

    //si no hay termino entonces se le asigna cadena vacia
    private searchPrograms(searchTerm: string = ""): void{
      this.caricaturas2Service.fetchProgramFromApi(searchTerm).subscribe(
        {
          next: (response: any) =>{
            //console.log(response);
            this.caricaturas2Service.programs = response.programList;
          },
          error: (error: any) =>{
            console.log(error);
          }
        }
      )
    }

}

