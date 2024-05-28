import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  RegisterForm!: FormGroup;
  sideNavStatus:boolean = false;

  constructor(private authService : AuthService,
    private fb : FormBuilder, private notificationservice:NotificationServiceService) {
      this.createForm();
     }

  ngOnInit(): void {
  }
  createForm() {
    this.RegisterForm = this.fb.group({
      nom: ['', Validators.required], 
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    },{ validators : this.passwordMathValidator}
    );
  }
  passwordMathValidator(formGroup :FormGroup){
const password = formGroup.get('password')?.value;
const confirmPassword = formGroup.get('confirmPassword')?.value;

    if(password!=confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({passwordMismatch:true});

    }else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }


  submit() {
    if (this.RegisterForm.valid) { 
      const signRequest = this.RegisterForm.value; 
      this.authService.register(signRequest).subscribe(
        (response) => {
          console.log('Utilisateur inscrit avec succès!', response);
          this.notificationservice.showSuccess('Utilisateur inscrit avec succès!');

          this.RegisterForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'inscription de l\'utilisateur', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
