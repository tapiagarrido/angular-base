import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent{

  public counter: number = 0;

  increaseBy(value:number):void{
    this.counter += value;
  }
  decrecedBy(value:number):void{
    this.counter +=value;
  }

  reset():void{
    this.counter=0;
  }
}
