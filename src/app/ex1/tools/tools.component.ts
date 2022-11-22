import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  color : String = "";
  size : number = 0;
  font : String = "";

  @Output() emitterColor : EventEmitter<String> = new EventEmitter<String>()
  @Output() emitterSize : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitterFont : EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(){
    this.emitterColor.emit(this.color);
  }
  onChangeSize(){
    this.emitterSize.emit(this.size);
  }
  onChangeFont(){
    this.emitterFont.emit(this.font);
  }
}
