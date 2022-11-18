import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponentComponent implements OnInit {
  constructor() {}

  selectedCv!: Cv;

  @Input() listCvs: Cv[] =[];

  @Output() sendCv = new EventEmitter<Cv>();

  ngOnInit(): void {}

  onCvRecieve(val: Cv) {
    this.sendCv.emit(val);
  }
}
