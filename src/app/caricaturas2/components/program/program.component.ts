import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';
import { Caricaturas2Service } from '../../services/caricaturas2.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {

  public programIdBeingEdited: number | null = null;
  public isEditing: boolean = false;
  
  constructor(private caricaturas2Service: Caricaturas2Service){}
  @Output() editarProgramaClick: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public program : program ={
    "id": 1,
    "title":"Star vs the Forces of Evil",
    "image":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  }


  eliminarP(): void {
    console.log('Haciendo clic en eliminar');
    if (this.program && this.program.id) {
      this.caricaturas2Service.deleteProgram(this.program.id).subscribe({
        next: (response: any) => {
          //Aqui no hago nada
        },
        error: (error: any) => {
          console.error('Error al eliminar el programa:', error);
        }
      });
    } else {
      console.error('Error al eliminar el programa');
    }
  }
  
  //Este envía el id
  editarPrograma(id: number): void {
    console.log(`Editando programa con ID: ${id}`);
    this.editarProgramaClick.emit(id);
  }
  
}

