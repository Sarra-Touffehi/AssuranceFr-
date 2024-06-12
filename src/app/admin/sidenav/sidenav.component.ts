import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus : boolean = false;
  user!: User;
  userEmail!: string | null;
  
  menuStatus:boolean=false;
  constructor(private userService: UserService, private authService: AuthService,private router:Router) {
  
    
   }
  
  
  
  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
  
    this.getUserIdByEmail();
    this.getUserByEmail();
  
  }
  
  getUserIdByEmail(): void {
    this.userService.getUserIdByMail(this.userEmail).subscribe(id => {
      console.log('ID de l\'utilisateur :', id);
      this.user.iduser = id; // Mettez à jour l'ID de l'utilisateur une fois reçu
    });
  }
  getUserByEmail(): void {
    if (this.userEmail) { 
      this.userService.getUserByEmail(this.userEmail)
        .subscribe(user => this.user = user);
    }
  }

}
