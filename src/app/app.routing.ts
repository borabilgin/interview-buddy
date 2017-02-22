import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './app.guard';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],    
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
