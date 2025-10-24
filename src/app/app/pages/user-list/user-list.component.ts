import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { finalize } from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzEmptyComponent} from 'ng-zorro-antd/empty';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSpinModule,
    NzSkeletonModule,
    NzButtonModule,
    NzEmptyComponent,
  ],  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm = '';
  loading = false;
  error = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = false;
    this.userService
      .getUsers()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          this.users = res;
          this.filteredUsers = res;
        },
        error: () => (this.error = true),
      });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredUsers = this.users.filter((u) =>
      u.name.toLowerCase().includes(term)
    );
  }
}
