import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() color: String ="Black";
  @Input() font: String ="Tahoma";
  @Input() size: number = 15 ;



  getColor(color : String){
    if(color != "")
    this.color = color
  }
  getFont(font : String){
    if(font != "")
    this.font = font
  }
  getSize(size : number){
    console.log("getSize", size );

    if(size != 0)
    this.size = size
  }

}
