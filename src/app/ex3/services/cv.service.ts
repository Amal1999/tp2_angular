import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  listCv : Cv[] = [
    new Cv(
      'D1111111',
      'Achour',
      'Ines',
      23,
      '11111111',
      'Etudiante',
      './assets/images/naruto.jpg',
      "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines"
    ),
    new Cv(
      'D2222222',
      'sammari',
      'amal',
      28,
      '22222222',
      'Etudiante',
      './assets/images/demon.jpg',
      "I am an enthusiastic, self-motivated, reliable, responsible and hard working person."
    ),
    new Cv(
      'D3333333',
      'anonyme',
      '',
      25,
      '33333333',
      'Etudiante',
      './assets/images/jujutsu.jpg',
      "I am an enthusiastic, self-motivated, reliable, responsible and hard working person."
    ),
  ];
  constructor() { }
}
