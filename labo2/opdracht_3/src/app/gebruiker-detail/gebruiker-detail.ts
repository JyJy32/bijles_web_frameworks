import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gebruiker-detail',
  imports: [],
  templateUrl: './gebruiker-detail.html',
  styleUrl: './gebruiker-detail.css',
})
export class GebruikerDetail implements OnInit {
  gebruikers = [
    { id: 1, naam: 'Alice Janssens', email: 'alice@example.com' },
    { id: 2, naam: 'Bob Peeters', email: 'bob@example.com' },
    { id: 3, naam: 'Charlie Claes', email: 'charlie@example.com' },
    { id: 4, naam: 'Dorien Jacobs', email: 'dorien@example.com' },
    { id: 5, naam: 'Elias Vermeulen', email: 'elias@example.com' },
    { id: 6, naam: 'Fatima Ali', email: 'fatima@example.com' },
    { id: 7, naam: 'Gert Vandenberghe', email: 'gert@example.com' },
    { id: 8, naam: 'Hannah Willems', email: 'hannah@example.com' },
    { id: 9, naam: 'Ibrahim Mohamed', email: 'ibrahim@example.com' },
    { id: 10, naam: 'Julie Maes', email: 'julie@example.com' }
  ];

  constructor(private route: ActivatedRoute) { }
  user: any | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.user = this.gebruikers.filter(g => g.id == p["id"])[0];
    });
  }
}
