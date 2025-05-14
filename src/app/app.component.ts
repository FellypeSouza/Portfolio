import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
}