import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rita-monreal-p1';

  public mostrarPrograms=true;
  public mostrarCaricaturas=false;
  public mostrarInformacion=false;
 

  primerModulo(): void{
    this.mostrarPrograms=true;
    this.mostrarCaricaturas=false;
    this.mostrarInformacion=false;
  }

  segundoModulo(): void{
    this.mostrarPrograms=false;
    this.mostrarCaricaturas=true;
    this.mostrarInformacion=false;
  }

  tercerModulo(): void{
    this.mostrarPrograms=false;
    this.mostrarCaricaturas=false;
    this.mostrarInformacion=true;
  }

  /*deleteCharacter(characterId: number) {
    const index = this.characters.findIndex(character => character.id === characterId);
    if (index !== -1) {
      this.characters.splice(index, 1);
    }
  }*/

  /*deleteProgram(programId: number) {
    const index = this.programs.findIndex(program => program.id === programId);
    if (index !== -1) {
      this.programs.splice(index, 1);
    }
  }*/

  regresarAlPrimerModulo(): void {
    this.mostrarPrograms = true; 
    this.mostrarCaricaturas = false; 
    this.mostrarInformacion = false; 
  }
  
/*  public characters: character[] = [
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
*/
  /*public programs: program[] = [
    {
      "id":1,
      "title":"The Simpsons",
      "image":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    },
    {
      "id":2,
      "title":"Gravity Falls",
      "image":"https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SY1000_CR0,0,641,1000_AL_.jpg"
    },
    {
      "id":3,
      "title":"Bojack Horseman",
      "image":"https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      "id":4,
      "title":"Adventure Time",
      "image":"https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
    },
    {
      "id":5,
      "title":"My little Pony",
      "image":"https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
    },
    {
      "id":6,
      "title":"Ed, Edd n Eddy",
      "image":"https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg"
    },

  ]*/
}
