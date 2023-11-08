import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/caricaturas1.interface';
import { Caricaturas1Service } from '../../services/caricaturas1.service';

@Component({
  selector: 'app-charcater-list',
  templateUrl: './charcater-list.component.html',
  styleUrls: ['./charcater-list.component.css']
})
export class CharcaterListComponent {

  public searchTerm: string = "";
  public sortAsc: boolean = true; 

  constructor(private caricaturas1Service: Caricaturas1Service){
    this.searchCharacters();
  }

  public get characters(): character[]{
    return this.caricaturas1Service.characters;
  }
  
  public onSortCharacters(): void {
    this.sortAsc = !this.sortAsc; // Cambia el estado del orden
    this.orderCharacters();
  }


  private orderCharacters(): void {
    this.caricaturas1Service.fetchCharacterFromApi(this.searchTerm, this.sortAsc).subscribe(
      {
        next: (response: any) => {
          this.caricaturas1Service.characters = response.characterList;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
  

  public searchByTerm(): void{
    this.searchCharacters(this.searchTerm);
  }

  //si no hay termino entonces se le asigna cadena vacia
  private searchCharacters(searchTerm: string = ""): void{
    this.caricaturas1Service.fetchCharacterFromApi(searchTerm).subscribe(
      {
        next: (response: any) =>{
          //console.log(response);
          this.caricaturas1Service.characters = response.characterList;
        },
        error: (error: any) =>{
          console.log(error);
        }
      }
    )
  }

}
