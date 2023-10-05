import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';
import { Caricaturas2Service } from '../../services/caricaturas2.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  constructor(private caricaturas2Service: Caricaturas2Service){}

  @Input()
  public program : program ={
    "id": 1,
    "title":"Star vs the Forces of Evil",
    "image":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  }


  public eliminarP(): void {
    this.caricaturas2Service.deleteProgram(this.program.id);
  }
}
