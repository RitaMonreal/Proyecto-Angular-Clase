import { Component } from '@angular/core';
import { character } from './interfaces/caricaturas1.interface';
import { Caricaturas1Service } from './services/caricaturas1.service';

@Component({
  selector: 'app-caricaturas1',
  templateUrl: './caricaturas1.pages.html'
})
export class Caricaturas1Page {


  constructor(private caricaturas1Service: Caricaturas1Service){}

  public get characters(): character[]{
    return this.caricaturas1Service.characters;
  }
  
 /* public characters: character[] = [
    {
      "id":1,
      "name": "Birdperson",
      "image": "https://rickandmortyapi.com/api/character/avatar/47.jpeg",  
    },
    {
      "id":2,
      "name": "Cop Rick",
      "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
    },
    {
      "id":3,
      "name": "Jackie",
      "image": "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
    },
    {
      "id":4,
      "name": "Johnny Depp",
      "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    },
    {
      "id":5,
      "name": "Rick Sanchez",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      "id":6,
      "name": "Gotron Pilot",
      "image": "https://rickandmortyapi.com/api/character/avatar/777.jpeg",
    }
  ]*/

 /* deleteCharacter(characterId: number) {
    const index = this.characters.findIndex(character => character.id === characterId);
    if (index !== -1) {
      this.characters.splice(index, 1);
    }
  }*/
}
