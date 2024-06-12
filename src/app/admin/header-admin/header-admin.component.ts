import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  user!: User;
  userEmail!: string | null;
  @Output() sideNavToggled=new EventEmitter<boolean>();

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
  sideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log("déconnexion réussie")
      this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur lors de la déconnexion :', error);
      }
    );
  }
}
