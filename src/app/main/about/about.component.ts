import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills: string[] = ["Python", "C++", "JavaScript", "TypeScript", "MySQL", "HTML" ,"CSS", "Matlab", "VBA", "LabView", "Angular", "Numpy", "Pandas", "Matplotlib", "OpenAPI", "Git", "GitHub"]

}
