import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent {
  @Input() columns: string[] = ['Profile Name','Enter repository URL','Description','Created Date','Modified Date','Actions'];
}
