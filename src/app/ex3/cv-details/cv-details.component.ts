import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../models/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
})
export class CvDetailsComponent implements OnInit {
  @Input() cv!: Cv;
  constructor(private embaucheService : EmbaucheService, private toastr: ToastrService  ) {}

  ngOnInit(): void {}

  onClickEmbauche() {

    const added : Boolean = this.embaucheService.addEmbauche(this.cv);

    if(added){
      this.toastr.success('Cette personne est embauchée avec succès', "Succès");
    }
    else
    {
      this.toastr.error('Cette personne est déjà embauchée', "Echec");
    }
  }
}
