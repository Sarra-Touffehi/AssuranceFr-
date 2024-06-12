import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  modifyUserForm: FormGroup;
  user :User;
  constructor(    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.user = data.user;
    this.modifyUserForm = this.formBuilder.group({
      nom: [this.user.nom],
      prenom: [this.user.prenom],
      email: [this.user.email],
      role: [this.user.role],
      idAgence : [this.user.agence.idAgence]
    });
     }

  ngOnInit(): void {
  }
  UpdateUser(): void {
    const updatedUser: User = {
      iduser: this.user.iduser,
      nom: this.modifyUserForm.value.nom,
      prenom: this.modifyUserForm.value.prenom,
      password:this.modifyUserForm.value.password,
      email: this.modifyUserForm.value.email,
      role: this.modifyUserForm.value.role,
      active:this.modifyUserForm.value.active,
      agence:this.modifyUserForm.value.agence
    };

    this.userService.updateUser(updatedUser.iduser, updatedUser).subscribe(() => {
    
      this.dialogRef.close('updated');
    }, error => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur : ', error);
    });
  }


  Cancel() {
    this.dialogRef.close();
  }
}
