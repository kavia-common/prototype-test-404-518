import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  active = 'profile';
  @Output() changed = new EventEmitter<string>();

  constructor(private router: Router) {}

  select(tab: 'profile' | 'rules') {
    this.active = tab;
    this.changed.emit(tab);
    if (tab === 'profile') this.router.navigate(['/config']);
    if (tab === 'rules') this.router.navigate(['/rules']);
  }
}
