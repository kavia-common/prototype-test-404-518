import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <div class="home" style="padding:120px 24px;">
      <h1>Prototype Test</h1>
      <p>Click Config Server to open the pixel-accurate screen.</p>
      <a class="btn btn-primary" routerLink="/config" aria-label="Go to Config Server">Open Config Server</a>
    </div>
  `
})
export class HomePageComponent {}
