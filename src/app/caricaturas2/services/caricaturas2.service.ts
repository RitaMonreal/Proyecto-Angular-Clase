import { Injectable } from "@angular/core";
import { program } from "../interfaces/caricaturas2.interfaces";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})//permite utilizar en cualquier parte de la aplicacion
export class Caricaturas2Service{
    public programs: program[] = [];

    constructor (private http: HttpClient){
      
    }

    fetchProgramFromApi(searchTerm: string, sortBy: boolean = false): Observable<any> {
      // Utiliza el parámetro sortOrder en la URL de la solicitud
      
      return this.http.get(`http://localhost:8081/api/programs?searchTerm=${searchTerm}&sortBy=${sortBy}`);
    }
    

    createProgram(program: program): Observable<any>{
      return this.http.post("http://localhost:8081/api/programs", program);
    }

    

    deleteProgram(programId: number) {
    const index = this.programs.findIndex(program => program.id === programId);
    if (index !== -1) {
      this.programs.splice(index, 1);
    }
  }
}