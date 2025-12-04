import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  vragen = [
    { id: 1, vraag: 'Wat is 2 + 2?', antwoord: '4' },
    { id: 2, vraag: 'Hoofdstad van België?', antwoord: 'Brussel' },
    {
      id: 3, vraag: 'Welke kleur krijg je door blauw + geel te mengen?',
      antwoord: 'Groen'
    },
    { id: 4, vraag: 'Wat is 10 gedeeld door 2?', antwoord: '5' }
  ];

  huidige: number = 0;

  answer: string = "";

  score: number = 0;

  correct: boolean = true;

  submit() {
    if (this.vragen[this.huidige].antwoord.toLowerCase() == this.answer.toLowerCase()) {
      this.score++;
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.huidige++;
    this.answer = "";
  }
}
