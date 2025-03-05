import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  projects = [
    {id: 1, name: 'Bem me quer', tech: 'Html / CSS'},
    {id: 2, name: 'Grocery Track', tech: 'Javascript'},
    {id: 3, name: 'Travel Expense Tracker', tech: 'Tailwind / React JS'},
    {id: 4, name: 'IluzArte', tech: 'Html / CSS'},
    {id: 5, name: 'Portfolio', tech: 'TypeScript/ Angular'},
    {id: 6, name: 'Judo Club', tech: 'WordPress'},
  ]

  constructor(private router: Router) {}

  goToProject(id: number) {
    this.router.navigate(['/portfolio', id]);
  }

}
