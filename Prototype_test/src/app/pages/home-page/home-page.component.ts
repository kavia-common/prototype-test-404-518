import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <div class="home" style="padding:120px 24px;">
      <h1>Prototype Test</h1>
      <p>Open the Config Server to explore Profiles and switch to Rules using the in-page tabs. Use the in-screen buttons to add items.</p>
      <div style="display:flex; gap:12px; margin-top:12px;">
        <a class="btn btn-primary" routerLink="/config" aria-label="Go to Config Server">Open Config Server</a>
      </div>
    </div>
  `
})
export class HomePageComponent {}
