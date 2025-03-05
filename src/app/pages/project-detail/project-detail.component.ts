import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {
  projectId: number | null = null;
  project: any | null = null;

  constructor(private route: ActivatedRoute) {}

  PROJECTS = [
    {
      id: 1,
      title: 'Bem Me Quer Restaurant',
      sections: [
        {
          type: 'text',
          content:
            "A collaborative project where we were tasked with solving a fictional client's problem by developing a website that met their requirements. This project was a part of my training, where we applied Design Thinking and worked closely as a team to deliver a comprehensive solution.",
        },
        {
          type: 'tech',
          content: 'Html / Bootstrap / css'
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p1-Landing.jpg',
        },
        {
          type: 'text',
          content:
            "Applied Design Thinking methodology to understand the problem from the user's perspective. Conducted empathy interviews and user research to define user personas and pain points. Brainstormed and ideated possible solutions to address the key challenges the client faced. Team Collaboration: Worked closely with a team of [X] people, each contributing their expertise in different areas such as front-end development, back-end development, and design. Held regular team meetings to align our efforts, discuss progress, and troubleshoot challenges.",
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/typo-colors.png',
        },
        { type: 'title', content: 'Check it out' },
        {
          type: 'link',
          content: 'https://bem-me-quer.github.io/restaurant_project/',
          name: 'Website',
        },
        { type: 'title', content: 'See repository' },
        {
          type: 'link',
          content: 'https://github.com/BEM-ME-QUER/restaurant_project',
          name: 'Github',
        },
      ],
    },
    {
      id: 2,
      title: 'Grocery Track',
      sections: [
        {
          type: 'text',
          content:
            "The Grocery Tracker was born out of a personal challenge I faced when grocery shopping. I used to rely on a regular calculator to track my expenses, but it often wasn’t enough—I would forget to add some items or lose track of what was already counted. With this application, I can easily add items, see the total cost in real-time, and make sure I haven’t forgotten anything. This tool has become a part of my daily routine, helping me stay on budget and be more organized while shopping."},
        {
          type: 'tech',
          content: 'Html / css / javascript'
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p2-mobile.png',
        },

        {
          type: 'text',
          content:
            "This project it’s a real-world solution to a problem I personally encountered. By developing this tool, I improved my shopping experience and built something that truly makes a difference in my day-to-day life.",
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p2-Landing.jpg',
        },
        { type: 'title', content: 'Check it out' },
        {
          type: 'link',
          content: 'https://rafaelahc.github.io/GROCERY-LIST-CONTROL/',
          name: 'Website',
        },
        { type: 'title', content: 'See repository' },
        {
          type: 'link',
          content: 'https://github.com/rafaelahc/GROCERY-LIST-CONTROL',
          name: 'Github',
        },
      ],
    },
    {
      id: 3,
      title: 'Travel Expense Tracker',
      sections: [
        {
          type: 'text',
          content:
            "This simple app helps me keep track of travel expenses, convert amounts to the local currency, and even display images of my destination to set the mood. Everything is saved in the browser, so I don’t lose my records. There are still a few things I want to improve, but I already use it in my daily life!"},
        {
          type: 'tech',
          content: 'Html / Tailwind / React'
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p3-mobile.png',
        },

        {
          type: 'text',
          content:
            "The Travel Expense Tracker is a super useful tool that came from a real need. I built it to make my trips easier, and now I use it all the time! Even though it’s still a work in progress, it already helps me a lot and showcases my skills with React, API integration, Tailwind CSS, and local storage. ",
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p3-pages.png',
        },


        { type: 'title', content: 'Check it out' },
        {
          type: 'link',
          content: 'https://rafaelahc.github.io/travel-expenses-tracker',
          name: 'Website',
        },
        { type: 'title', content: 'See repository' },
        {
          type: 'link',
          content: 'https://github.com/rafaelahc/travel-expenses-tracker',
          name: 'Github',
        },
      ],
    },
    {
      id: 4,
      title: 'IluzArte',
      sections: [
        {
          type: 'text',
          content:
            "IluzArte is a showcase website designed to display illustrative artwork, where photographs are transformed into beautiful digital illustrations. The idea is to present different styles and pricing options in a visually appealing way. It’s not an e-commerce platform, but rather a digital gallery that allows visitors to explore available illustration services. This project was created as part of my web development module at CESAE DIGITAL, serving as my first project in web design and development."},
        {
          type: 'tech',
          content: 'Html / Bootstrap / Css'
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p4-landing.png',
        },
        { type: 'title', content: 'Check it out' },
        {
          type: 'link',
          content: 'https://rafaelahc.github.io/projeto_iluzArte/',
          name: 'Website',
        },
        { type: 'title', content: 'See repository' },
        {
          type: 'link',
          content: 'https://github.com/rafaelahc/projeto_iluzArte',
          name: 'Github',
        },
      ],
    },
    {
      id: 5,
      title: 'Portfolio',
      sections: [
        {
          type: 'text',
          content:
            "This portfolio was created as a way to practice Angular alongside my course at Cesae Digital, while also serving as a personal space to showcase my projects, skills, and a bit of my personality. Instead of just listing technical skills, I wanted to build something that truly represents me—both as a developer and as a creative individual. It’s more than just a portfolio; it’s a playground for experimentation and learning, where I can continuously improve my front-end skills while crafting something that reflects my journey in tech."},
        {
          type: 'tech',
          content: 'TypeScript / Angular'
        },
        { type: 'title', content: 'See repository' },
        {
          type: 'link',
          content: 'https://github.com/rafaelahc/projeto_iluzArte',
          name: 'Github',
        },
      ],
    },

    {
      id: 6,
      title: 'Judo Club',
      sections: [
        {
          type: 'text',
          content:
            "This is an ongoing project, developed as the final assignment for my training at CESAE Digital. The goal is to create a fully functional website for a Judo school, providing information about classes, memberships, and schedules. We are working with Scrum methodology, collaborating as a team to deliver an efficient and user-friendly solution. The website is being built using WordPress with Elementor, integrating WooCommerce Memberships for managing subscriptions and Formidable Forms for handling registrations and inquiries. Although the project is still in its early stages, I’m excited to see how it evolves! If you're reading this now, I hope you’ll check back in the future to see the final result."},
        {
          type: 'tech',
          content: 'Wordpress / SCRUM'
        },
        {
          type: 'image',
          content: '/assets/images/portfolio-details/p6-workinprogress.png',
        },
      ],
    },
  ];

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.PROJECTS.find((p) => p.id === this.projectId);
  }
}
