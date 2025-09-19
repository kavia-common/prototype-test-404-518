import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  template: `<h1 class="page-title">{{title}}</h1>`,
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  @Input() title = 'Config Server';
}
