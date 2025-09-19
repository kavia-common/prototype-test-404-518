import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConfigServerPageComponent } from './pages/config-server-page/config-server-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'config', component: ConfigServerPageComponent, title: 'Config Server' },
  { path: 'rules', component: RulesPageComponent, title: 'Rules' },
  { path: '**', redirectTo: '' }
];
