import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent {

  public characters: Character[]=[{
    name:"Krilin",
    power:1000
  },{
    name:"Goku",
    power: 5000
  },{
    name:"Picoro",
    power:2500
  }];

  onNewCharacter(character:Character):void{
    console.log(character)
  }
}
