import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'superman';
  public age: number = 33;
  public nameChanged: boolean = false;
  public ageChanged: boolean = false;


  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescripction():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(name:string):void{
    this.name=name;
    this.nameChanged=true;
  }

  changeAge(age:number):void{
    this.age=age;
    this.ageChanged=true;
  }
}
