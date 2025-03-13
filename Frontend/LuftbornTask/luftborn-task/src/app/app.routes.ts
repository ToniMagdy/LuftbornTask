import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { inject } from '@angular/core';
import { LuftbornTaskAuthService } from './services/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [() => inject(LuftbornTaskAuthService).isAuthenticated$],
  },
  { path: '**', redirectTo: '' },
];
