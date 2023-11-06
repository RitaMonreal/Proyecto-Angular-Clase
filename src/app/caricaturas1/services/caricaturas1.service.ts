import { Injectable } from "@angular/core";
import { character } from "../interfaces/caricaturas1.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class Caricaturas1Service{
    public characters: character[] = [];

    constructor(private http: HttpClient){

    }

    fetchCharacterFromApi(searchTerm: string) : Observable <any> {
      //interpolacion de cadenas utilizando las comillas invertidas, cadenas con objetos
       return this.http.get(`http://localhost:8081/api/characters?searchTerm=${searchTerm}`);
    }


    public revertir: boolean = false;

    sortCharacters(){
      this.revertir = !this.revertir;
      this.characters.reverse();
    }

    deleteCharacter(characterId: number) {
      const index = this.characters.findIndex(character => character.id === characterId);
      if (index !== -1) {
        this.characters.splice(index, 1);
      }
    }


}