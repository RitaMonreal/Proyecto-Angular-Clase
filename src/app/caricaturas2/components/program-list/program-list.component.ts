import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent {
  @Input()
  public programs: program[] = [
  ];

  public ordenAZ: string = 'title';

  sortPrograms() {
    this.programs.sort((a, b) => {
      if (this.ordenAZ === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return a.id - b.id;
      }
    });
  }


 @Output()
 public onClickEliminarP: EventEmitter<number> = new EventEmitter();  

 
 public deleteProgram($event: number): void{
    this.onClickEliminarP.emit($event);
 }

}
