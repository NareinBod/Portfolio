import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ContactComponent } from './main/contact/contact.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Experience', component: ExperienceComponent},
    {path: 'Contact', component: ContactComponent}
];
