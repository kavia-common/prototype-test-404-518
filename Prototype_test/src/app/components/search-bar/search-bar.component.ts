import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  // PUBLIC_INTERFACE
  /**
   * Emits current text value when the user types into the search input.
   * Accepts the native input event and extracts target.value safely.
   */
  onInput(ev: Event): void {
    const target = ev.target as HTMLInputElement | null;
    this.search.emit(target?.value ?? '');
  }
}
