import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid"
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  public characters: Character[]=[{
    id: uuid(),
    name:"Krilin",
    power:1000
  },{
    id: uuid(),
    name:"Goku",
    power: 5000
  },{
    id: uuid(),
    name:"Picoro",
    power:2500
  }];

  onNewCharacter(character:Character):void{
    const newCharacter: Character={
      id: uuid(), ...character
    }
    this.characters.push(newCharacter)
  }

  onDeleteCharacter(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id)}

}
