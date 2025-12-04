import { Component } from '@angular/core';
import { ReceptentKaart } from '../receptent-kaart/receptent-kaart';
import { Label } from '../label/label';

@Component({
  selector: 'app-receptent-lijst',
  imports: [ReceptentKaart, Label],
  templateUrl: './receptent-lijst.html',
  styleUrl: './receptent-lijst.css',
})
export class ReceptentLijst {
  /*
  recepten = [
    { id: 1, titel: 'Spaghetti Bolognese', tijd: 30, labels: ['Italiaans', 'Snel'] },
    { id: 2, titel: 'Groene Curry', tijd: 25, labels: ['Thais', 'Pittig'] },
    { id: 3, titel: 'Chili sin carne', tijd: 40, labels: ['Vegetarisch'] },
    { id: 4, titel: 'Lasagne', tijd: 60, labels: ['Italiaans'] },
    { id: 5, titel: 'Caesarsalade', tijd: 15, labels: ['Snel', 'Gezond'] }
  ];
  */
  recepten: Recept[] = []

}

interface Recept {
  id: number;
  titel: string;
  tijd: number;
  labels: string[];
}
