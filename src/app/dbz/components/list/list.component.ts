import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = []
  @Output()
  public onDeleteSomeCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(item:Character):void{
    const {id} = item
    this.onDeleteSomeCharacter.emit(id)
  }


}
