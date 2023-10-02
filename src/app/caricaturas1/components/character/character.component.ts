import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/caricaturas1.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input()
  public character : character = {
    "id":1,
    "name": "Johnny Depp",
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  }

  @Output()
  public onClickEliminarC: EventEmitter<number> = new EventEmitter();  

  public eliminarC(): void {
    this.onClickEliminarC.emit(this.character.id);
  }
}
