import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  @Input()
  public program : program ={
    "id": 1,
    "title":"Star vs the Forces of Evil",
    "image":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  }

  @Output()
  public onClickEliminarP: EventEmitter<number> = new EventEmitter();  

  public eliminarP(): void {
    this.onClickEliminarP.emit(this.program.id);
  }
}
