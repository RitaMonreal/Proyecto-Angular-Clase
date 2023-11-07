import { Injectable } from "@angular/core";
import { program } from "../interfaces/caricaturas2.interfaces";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})//permite utilizar en cualquier parte de la aplicacion
export class Caricaturas2Service{
    public programs: program[] = [];

    constructor (private http: HttpClient){
      
    }

    fetchProgramFromApi(searchTerm: string, sortDesc: boolean = false) : Observable <any> {
      //interpolacion de cadenas utilizando las comillas invertidas, cadenas con objetos
       return this.http.get(`http://localhost:8081/api/programs?searchTerm=${searchTerm}&sortDesc=${sortDesc}`);
    }

    

    deleteProgram(programId: number) {
    const index = this.programs.findIndex(program => program.id === programId);
    if (index !== -1) {
      this.programs.splice(index, 1);
    }
  }


  

  /*public ordenAZ: string = 'title';

  sortPrograms() {
    this.programs.sort((a, b) => {
      if (this.ordenAZ === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return a.id - b.id;
      }
    });
  }
*/
}