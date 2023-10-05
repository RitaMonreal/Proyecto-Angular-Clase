import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/caricaturas1.interface';
import { Caricaturas1Service } from '../../services/caricaturas1.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor(private caricaturas1Service: Caricaturas1Service){}


  @Input()
  public character : character = {
    "id":1,
    "name": "Johnny Depp",
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  }


  public eliminarC(): void {
    this.caricaturas1Service.deleteCharacter(this.character.id);
  }
}
