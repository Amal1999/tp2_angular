import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../models/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-embauches',
  templateUrl: './cv-embauches.component.html',
  styleUrls: ['./cv-embauches.component.css']
})
export class CvEmbauchesComponent implements OnInit {

  cvEmbauches : Cv[] = [];

  constructor( private embaucheService: EmbaucheService) {

    this.cvEmbauches = embaucheService.getCvEmbauches();

   }

  ngOnInit(): void {
  }
}
