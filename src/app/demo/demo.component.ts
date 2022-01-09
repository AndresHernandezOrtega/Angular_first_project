import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title: string= 'platzi-store'; 
  items: Array<string> = ["nicolas", "julian", "Santiago"]
  power: number = 10

  

  addName(name: string): void{
    this.items.push(name)
  }

  deleteName(index: number): void{
    this.items.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
