import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { HeaderComponent } from '../components/header/header.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, HeaderComponent, AboutMeComponent, ExperienceComponent, ProjectsComponent, ContactsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
}