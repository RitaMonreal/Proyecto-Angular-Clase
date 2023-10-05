import { Component, EventEmitter, Input, Output } from '@angular/core';
import { program } from '../../interfaces/caricaturas2.interfaces';
import { Caricaturas2Service } from '../../services/caricaturas2.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent {
  constructor(private caricaturas2Service: Caricaturas2Service){}

  public get programs(): program[]{
    return this.caricaturas2Service.programs;
  }

  public onSortPrograms(): void{
    this.caricaturas2Service.sortPrograms();
  }

}
