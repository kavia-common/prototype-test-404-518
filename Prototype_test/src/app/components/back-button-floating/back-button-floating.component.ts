import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button-floating',
  standalone: true,
  templateUrl: './back-button-floating.component.html',
  styleUrls: ['./back-button-floating.component.css']
})
export class BackButtonFloatingComponent {
  constructor(private location: Location) {}
  // PUBLIC_INTERFACE
  goBack(): void { this.location.back(); }
}
