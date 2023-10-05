import { Component } from '@angular/core';
import { character } from './interfaces/caricaturas1.interface';
import { Caricaturas1Service } from './services/caricaturas1.service';

@Component({
  selector: 'app-caricaturas1',
  templateUrl: './caricaturas1.pages.html'
})
export class Caricaturas1Page {


 
}

/*

  constructor(private caricaturas1Service: Caricaturas1Service){}

  public get characters(): character[]{
    return this.caricaturas1Service.characters;
  }

*/