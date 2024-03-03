import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home page' },
];
