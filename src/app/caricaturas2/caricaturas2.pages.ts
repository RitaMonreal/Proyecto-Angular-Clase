import { Component } from '@angular/core';
import { program } from './interfaces/caricaturas2.interfaces';
import { Caricaturas2Service } from './services/caricaturas2.service';

@Component({
  selector: 'app-caricaturas2',
  templateUrl: './caricaturas2.pages.html',
})
export class Caricaturas2Page {

  constructor(private caricaturas2Service: Caricaturas2Service){}

  public get program(): program[]{
    return this.caricaturas2Service.programs;
  } 
}
