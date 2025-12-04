import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receptent-kaart',
  imports: [],
  templateUrl: './receptent-kaart.html',
  styleUrl: './receptent-kaart.css',
})
export class ReceptentKaart {
  @Input() title: string = "";
  @Input() duration: number = -1;

}
