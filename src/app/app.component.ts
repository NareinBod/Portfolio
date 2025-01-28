import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./main/home/home.component";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
