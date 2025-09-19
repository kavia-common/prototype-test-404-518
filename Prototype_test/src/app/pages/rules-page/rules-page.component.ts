import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { FiltersBarComponent } from '../../components/filters-bar/filters-bar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-rules-page',
  standalone: true,
  imports: [BreadcrumbsComponent, PageTitleComponent, TabsComponent, FiltersBarComponent, SearchBarComponent, PrimaryButtonComponent],
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.css']
})
export class RulesPageComponent {}
