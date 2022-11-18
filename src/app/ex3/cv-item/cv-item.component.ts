import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent implements OnInit {

  @Input() cv! : Cv ;

  @Output() sendCv = new EventEmitter<Cv>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cv.path);
  }

  onClickSend(){
    this.sendCv.emit(this.cv);
  }

}
