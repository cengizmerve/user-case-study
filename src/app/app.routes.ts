import { Routes } from '@angular/router';
import {UserListComponent} from './app/pages/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./app/pages/user-detail/user-detail.component').then(
        (m) => m.UserDetailComponent
      ),
  },
];
