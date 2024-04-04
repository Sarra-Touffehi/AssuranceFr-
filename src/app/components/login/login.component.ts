import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private userService : UserService,
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
  } */

  submit() {
    // Appel à getTokenHeaders() sans argument
    const headers = this.userService.getTokenHeaders(); // Assurez-vous que cette méthode ne prend pas d'argument
    this.userService.login(this.LoginForm.value).subscribe(
      (response) => {
        this.dataReceived = response;
        this.userService.saveData(this.dataReceived.token); 
        console.log(response);
        if (response.token) {
          console.log("token : " + response.token);
          this.router.navigate(['/header']);
        }
      }
    )
  }
  

}
