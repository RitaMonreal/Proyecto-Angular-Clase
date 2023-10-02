import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/caricaturas1.interface';

@Component({
  selector: 'app-charcater-list',
  templateUrl: './charcater-list.component.html',
  styleUrls: ['./charcater-list.component.css']
})
export class CharcaterListComponent {
  @Input()
  public characters: character[] = [

 ];
 public revertir: boolean = false;

 public sortCharacters(){
  this.revertir = !this.revertir;
  this.characters.reverse();
 }

 @Output()
 public onClickEliminarC: EventEmitter<number> = new EventEmitter();   
 
 public deleteCharacter($event: number) : void{
    this.onClickEliminarC.emit($event);
 }
}
