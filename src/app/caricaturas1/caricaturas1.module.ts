import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharcaterListComponent } from './components/charcater-list/charcater-list.component';
import { CharacterComponent } from './components/character/character.component';
import { Caricaturas1Page } from './caricaturas1.pages';





@NgModule({
      declarations: [
        CharcaterListComponent,
        CharacterComponent,
        Caricaturas1Page
    ],
    exports:[
        CharcaterListComponent,
    ],
    imports:[
        CommonModule
    ]
})
export class Caricaturas1Module { }
