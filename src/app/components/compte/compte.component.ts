import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  email!: string;
  user!: User;
  userEmail!: string | null;
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
