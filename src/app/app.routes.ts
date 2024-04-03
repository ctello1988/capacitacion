import { Routes } from '@angular/router';
import { securityGuard } from '@guard/security.guard';
// import { securityGuard } from '@guard/security.guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
        canActivate: [securityGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.routes')
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./pages/sign-in/sign-in.component')
    },
    {
        path: 'sign-out',
        loadComponent: () => import('./pages/sign-out/sign-out.component')
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }

];
