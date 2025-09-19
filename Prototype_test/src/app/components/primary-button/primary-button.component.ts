import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `
    <button class="btn btn-primary" [attr.aria-disabled]="disabled" [disabled]="disabled" [style.left.px]="left" [style.top.px]="top" style="position:absolute;width:120px;">
      <span>{{label}}</span>
    </button>
  `,
  styles: [``]
})
export class PrimaryButtonComponent {
  @Input() label = 'Add Profile';
  @Input() disabled = false;
  @Input() left = 1546;
  @Input() top = 158;
}
