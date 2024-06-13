import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  dataReceived:any
  errorMessage: string = '';
  userEmail!: string | null;

  constructor(private authService : AuthService,
    private fb : FormBuilder
    , private router: Router,
  private userService : UserService,  private notificationservice:NotificationServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.LoginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    }
    );
  }

 /* submit(){
    this.userService.login(this.LoginForm.value).subscribe(
      (response) =>{
        console.log(response);
        if(response.jwt != null){
          console.log("token : " +response.jwt)
        }
      }
    )
  }

  
  
  submit() {
    this.userService.login(this.LoginForm.value).subscribe(
      (response) => {
   if(response){
    this.sessionId=response.sessionId;

    sessionStorage.setItem(
      'token',
      this.sessionId
    );
    this.router.navigate(['/header']);
   }
   else
   {
    alert("authentification failed !")
   }
      }
    )
  } 

  submit() {
    const headers = this.userService.getTokenHeaders().headers; // Récupération des en-têtes HTTP
    this.userService.login(this.LoginForm.value, { headers: headers }).subscribe(
      (response) => {
        this.dataReceived = response;
        this.userService.saveData(this.dataReceived.token); 
        console.log(response);
        if (response.token) {
          console.log("token : " + response.token);
          this.router.navigate(['/header']);
        }
      }
    );
  }
*/

submit(): void {
  if (this.LoginForm.invalid) {
    return;
  }

  const credentials = {
    email: this.LoginForm.value.email,
    password: this.LoginForm.value.password
  };

  this.authService.login(credentials).subscribe(
    (response) => {
      localStorage.setItem('token', response.token);
      this.getMailToConnect(); // Appel de la méthode après authentification réussie
    },
    (error) => {
      console.error('Identifiants incorrects. Veuillez réessayer.', error);
      this.notificationservice.showError('Identifiants incorrects. Veuillez réessayer.');
    }
  );
}

getMailToConnect(): void {
  const email = this.LoginForm.value.email;
  this.userService.getUserByEmail(email).subscribe(
    (user) => {
      if (user.active) {
        // Vérifier le rôle de l'utilisateur
        if (user.role === 'ADMIN') {
          this.router.navigate(['/accueilAdmin']);
        } else if (user.role === 'AGENT') {
          this.router.navigate(['/accueilAgent']);
        } else if (user.role === 'ADMIN_GLOBAL') {
          this.router.navigate(['/accueilAdminGlobal']);
        } else {
          console.error('Rôle non reconnu :', user.role);
          this.notificationservice.showError('Rôle non reconnu : Veuillez contacter l\'administrateur.');
        }
      } else {
        console.error('Accès refusé : l\'utilisateur n\'est pas activé');
        this.notificationservice.showError('Accès refusé : Votre compte est désactivé');
      }
    },
    (error) => {
      console.error('Une erreur s\'est produite lors de la récupération des données utilisateur :', error);
    //  this.notificationservice.showError('Une erreur s\'est produite lors de la récupération des données utilisateur.');
    }
  );
}




}
