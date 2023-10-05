import { Injectable } from "@angular/core";
import { character } from "../interfaces/caricaturas1.interface";

@Injectable({providedIn: "root"})
export class Caricaturas1Service{
    public characters: character[] = [
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
      ]
    
}