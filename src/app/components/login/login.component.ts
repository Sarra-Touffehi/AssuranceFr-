import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  dataReceived:any;
  sessionId:any="";
  errorMessage: string = '';
  constructor(private authService : AuthService,
    private fb : FormBuilder
    , private router: Router) { }

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
    //  this.userService.setToken(response.token);
      this.router.navigate(['/header']); // Rediriger vers la page de dashboard après la connexion
    },
    (error) => {
      this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
    }
  );
}

}
