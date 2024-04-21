import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  constructor(private userService: UserService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.afficherUsers();
  }

  afficherUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users.filter(user => user.role !== 'ADMIN_GLOBAL');
    });
  }
/*  searchByEmail(email: string): void {
    if (email.trim() === '') {
      this.filteredUsers = [...this.users];
    } else {
      this.userService.getUserByEmail(email).subscribe(
        user => {
          if (user) {
            this.filteredUsers = [user];
          } else {
            this.filteredUsers = [];
          }
        },
        error => {
          console.error('Error fetching user by email:', error);
          this.filteredUsers = [];
        }
      );
    }
  } */
  
  searchText ='';
  
  openModifyDialog(user: User): void {
    const dialogRef = this.matDialog.open(UpdateUserComponent, {
      width: '400px',
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.afficherUsers();
      }
    });
  }

  toggleUserStatus(user: User): void {
    if (user.active) {
      this.userService.deactivateUser(user.iduser).subscribe(() => {
        user.active = false;
      });
    } else {
      this.userService.activateUser(user.iduser).subscribe(() => {
        user.active = true;
      });
    }
  }

}
