import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = [
    {
      id: 1,
      title: 'Project One',
      imageUrl: './assets/portfolio-images/project-1.png',
      githubUrl: 'https://github.com/',
      liveDemoUrl: 'https://github.com/',
    },
    {
      id: 2,
      title: 'Project Two',
      imageUrl: './assets/portfolio-images/project-2.png',
      githubUrl: 'https://github.com/',
      liveDemoUrl: 'https://github.com/',
    },
    {
      id: 3,
      title: 'Project Three',
      imageUrl: './assets/portfolio-images/project-3.png',
      githubUrl: 'https://github.com/',
      liveDemoUrl: 'https://github.com/',
    },
    // ... alte proiecte
  ];

  navigateTo(url: string): void {
    window.location.href = url;
  }
}
