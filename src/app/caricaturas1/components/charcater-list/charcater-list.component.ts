import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/caricaturas1.interface';
import { Caricaturas1Service } from '../../services/caricaturas1.service';

@Component({
  selector: 'app-charcater-list',
  templateUrl: './charcater-list.component.html',
  styleUrls: ['./charcater-list.component.css']
})
export class CharcaterListComponent {

  constructor(private caricaturas1Service: Caricaturas1Service){
    this.searchCharacters();
  }

  public get characters(): character[]{
    return this.caricaturas1Service.characters;
  }
  
  public onSortCharacters(): void{
    this.caricaturas1Service.sortCharacters();
  }

  public searchByTerm(): void{
    this.searchCharacters("ron");
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
