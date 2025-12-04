import { Component, signal } from '@angular/core';
import { ReceptentLijst } from './receptent-lijst/receptent-lijst';

@Component({
  selector: 'app-root',
  imports: [ReceptentLijst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('opdrach_1');
}
