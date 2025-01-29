import { Component } from '@angular/core';
import { Job } from './experience.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Job[] = [
    {
      logo: 'danlaw.png',
      title: 'Software Applications Intern' ,
      date: 'Jan 2025 - Present',
      description: [
        'Enhance an existing Angular application by creating new pages, modifying functionalities, and improving the designs to deliver responsive and user-friendly features',
        'Author and maintain comprehensive API documentation using OpenAPI specification, ensuring clarity and accssibility for developers and stakeholders',
        'Collaborate with other team members to troubleshoot, debug and deliver high-quality solutions while actively contributing to successful project outcomes'
      ],
    },
    {
      logo: 'uc.png',
      title: 'Engineering Design Teaching Assistant' ,
      date: 'Aug 2024 - Dec 2024 ' ,
      description: [
        'Assisted students during in-class activities and peer mentoring sessions, providing targeted assistance to enhance their understanding and engagement with course material',
        'Collaborated with the teaching team to evaluate assignments, exams, and project demonstrations, ensuring fair and consistent grading while offering insights for continuous improvements',
        'Facilitated hands-on learning experiences in the classroom, helping students apply theoretical knowledge through practical exercises and problem-solving activities'
      ],
    }
  ]

}
