import { Component, Input } from '@angular/core';

export interface DataRowItem {
  profile: string;
  url: string;
  desc: string;
  createdDate: string;
  createdTime: string;
  modifiedDate: string;
  modifiedTime: string;
}

@Component({
  selector: 'app-data-row',
  standalone: true,
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.css']
})
export class DataRowComponent {
  @Input() item!: DataRowItem;
}
