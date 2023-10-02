import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharcaterListComponent } from './components/charcater-list/charcater-list.component';
import { CharacterComponent } from './components/character/character.component';
import { Caricaturas1Component } from './caricaturas1.component';




@NgModule({
      declarations: [
        CharcaterListComponent,
        CharacterComponent,
        Caricaturas1Component
    ],
    exports:[
        CharcaterListComponent,
    ],
    imports:[
        CommonModule
    ]
})
export class Caricaturas1Module { }
