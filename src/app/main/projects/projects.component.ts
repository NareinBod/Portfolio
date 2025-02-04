import { Component } from '@angular/core';
import { Project } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [{
    img: 'to-do.png',
    name: 'To Do List',
    date: '2025',
    description: 'This is a simple To-Do List web application built using TypeScript, Angular, HTML, and CSS.',
    skills: ['Angular', 'HTML/CSS', 'Tyepscript'],
    link: 'https://github.com/NareinBod/To-Do-List-App'
  },
  {
    img: 'investmentCalc.png',
    name: 'Investment Calculator',
    date: '2025',
    description: 'This project is an Angular application that calculates investment growth over time based on user inputs.',
    skills: ['Angular', 'HTML/CSS', 'Tyepscript'],
    link: 'https://github.com/NareinBod/Investment-Calculator/tree/master'
  },
  {
    img: 'restaurant.png',
    name: 'Restaurant Management System',
    date: '2024',
    description: 'This Python script allows the user to view a menu, select items to order, and calculate the total price of the items selected. ',
    skills: ['Python', 'OOP', 'Git'],
    link: 'https://github.com/NareinBod/Restauarant-Management-System'
  }
]
}
