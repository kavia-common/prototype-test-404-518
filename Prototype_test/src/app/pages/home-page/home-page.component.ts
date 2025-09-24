import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <div class="home" style="padding:120px 24px;">
      <h1>Prototype Test</h1>
      <p>Use the links below to open the Figma-extracted screens:</p>
      <div style="display:flex; gap:12px; margin-top:12px;">
        <a class="btn btn-primary" routerLink="/config" aria-label="Go to Add Profile screen">Add Profile (Config)</a>
        <a class="btn btn-primary" routerLink="/rules" aria-label="Go to Add Rule screen">Add Rule (Rules)</a>
      </div>
    </div>
  `
})
export class HomePageComponent {}
