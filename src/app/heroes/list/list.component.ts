import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'American Cap', 'Hawkeyes','Dr. Strange' ]
  public heroDeleted?: string;

  removeLastHero(): void{

    this.heroDeleted = this.heroNames.pop();

  }

}
