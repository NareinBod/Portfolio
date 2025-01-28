import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./main/home/home.component";
import { RouterLink, RouterModule } from '@angular/router';
import { AboutComponent } from './main/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,SidebarComponent, HeaderComponent, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
