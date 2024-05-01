import { Component, OnInit,Inject } from '@angular/core';
import { Role, User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User(0, '', '', '', '', Role.AGENT, false);
  userEmail!: string | null;
  constructor(private userService: UserService, private authService: AuthService) {

    
   }

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();

    this.getUserIdByEmail();
  }

  getUserIdByEmail(): void {
    this.userService.getUserIdByMail(this.userEmail).subscribe(id => {
      console.log('ID de l\'utilisateur :', id);
      this.user.iduser = id; // Mettez à jour l'ID de l'utilisateur une fois reçu
    });
  }

}
