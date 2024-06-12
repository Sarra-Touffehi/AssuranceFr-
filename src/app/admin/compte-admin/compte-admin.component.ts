import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css']
})
export class CompteAdminComponent implements OnInit {

 
  email!: string;
  user!: User;
  userEmail!: string | null;
  sideNavStatus:boolean = false;

  constructor(private userService: UserService, private authService: AuthService) { 
  //  this.userEmail=localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();

    this.getUserByEmail();
  }

  getUserByEmail(): void {
    if (this.userEmail) { 
      this.userService.getUserByEmail(this.userEmail)
        .subscribe(user => this.user = user);
    }
  }

}
