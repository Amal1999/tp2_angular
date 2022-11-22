import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private cvEmbauches : Cv[] = [];

  constructor() { }

  getCvEmbauches() : Cv[] {
    return this.cvEmbauches;
  }
  addEmbauche(cv : Cv) : Boolean {
    if( this.cvEmbauches.find((_cv) => _cv == cv) == null )
    {
      this.cvEmbauches.push(cv)
      return true;
    }
    else {
      return false;
    }
  }
}
