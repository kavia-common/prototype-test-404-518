import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BackButtonFloatingComponent } from './components/back-button-floating/back-button-floating.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, BackButtonFloatingComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // PUBLIC_INTERFACE
  get year(): number { return new Date().getFullYear(); }
}
