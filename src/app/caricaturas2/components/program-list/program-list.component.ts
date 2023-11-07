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
  
  constructor(private caricaturas2Service: Caricaturas2Service){
    this.searchPrograms();
  }

  public get programs(): program[]{
    return this.caricaturas2Service.programs;
  }

 /* public onSortPrograms(): void{
    this.caricaturas2Service.sortPrograms();
  }*/

 

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

