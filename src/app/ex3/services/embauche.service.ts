import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  cvEmbauches : Cv[] = [];

  constructor(private toastr: ToastrService) { }

  addEmbauche(cv : Cv){
    if( this.cvEmbauches.find((_cv) => _cv == cv) != null )
    {
      //alert("Cette personne est déjà embauchée")
      this.toastr.error('Cette personne est déjà embauchée', "Echec");

    }
    else
    {
      this.cvEmbauches.push(cv)
      this.toastr.success('Cette personne est embauchée avec succès', "Succès");

    }
  }
}
