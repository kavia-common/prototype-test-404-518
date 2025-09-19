import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { FiltersBarComponent } from '../../components/filters-bar/filters-bar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { DataRowComponent, DataRowItem } from '../../components/data-row/data-row.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-config-server-page',
  standalone: true,
  imports: [
    BreadcrumbsComponent, PageTitleComponent, TabsComponent, FiltersBarComponent,
    SearchBarComponent, PrimaryButtonComponent, TableHeaderComponent, DataRowComponent, NgFor
  ],
  templateUrl: './config-server-page.component.html',
  styleUrls: ['./config-server-page.component.css']
})
export class ConfigServerPageComponent {
  items: DataRowItem[] = [
    {
      profile: 'Default Profile',
      url: 'https://cpeconfigbe-dms-\ntest.dish.com/datacollector',
      desc: 'This profile will be returned when\nnone of the rules match',
      createdDate: '04/25/2025',
      createdTime: '2:44:16 PM',
      modifiedDate: '04/25/2025',
      modifiedTime: '2:44:16 PM'
    }
  ];
}
