import { Component, OnInit } from '@angular/core';
import { Cv } from './models/cv';
import { CvService } from './services/cv.service';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  listCv: Cv[] = [];

  constructor(private cvService : CvService) {
    this.listCv = cvService.getCvs();
  }

  ngOnInit(): void {
  }

  selectedCv! : Cv ;



  onCvRecieve(val : Cv){
    this.selectedCv = val;
  }

}
