import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  RegisterForm!: FormGroup;
  sideNavStatus: boolean = false;
  showAgenceField: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notificationservice: NotificationServiceService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.onRoleChange();
  }



  createForm() {
    this.RegisterForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      agence: [null],
      active: [false]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  onRoleChange() {
    this.RegisterForm.get('role')?.valueChanges.subscribe(role => {
      this.showAgenceField = role === 'AGENT';
      if (this.showAgenceField) {
        this.RegisterForm.get('agence')
      } else {
       // this.RegisterForm.get('agence')?.clearValidators();
      }
    //  this.RegisterForm.get('agence')?.updateValueAndValidity();
    });
  }

  
  submit() {
    if (this.RegisterForm.valid) {
      const signRequest = this.RegisterForm.value;
      console.log('Données soumises:', signRequest); 
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
