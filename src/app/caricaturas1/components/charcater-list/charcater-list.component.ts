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
    
  }

  public get characters(): character[]{
    return this.caricaturas1Service.characters;
  }
  
  public onSortCharacters(): void{
    this.caricaturas1Service.sortCharacters();
  }

  public onDeleteCharacter(id: number): void{
    this.caricaturas1Service.deleteCharacter(id);
  }

}
