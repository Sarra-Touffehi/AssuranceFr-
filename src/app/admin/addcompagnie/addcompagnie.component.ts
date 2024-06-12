import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compagnie } from 'src/app/models/compagnie';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcompagnie',
  templateUrl: './addcompagnie.component.html',
  styleUrls: ['./addcompagnie.component.css']
})
export class AddcompagnieComponent implements OnInit {
  addCompForm!:FormGroup;
  logoFile!:File;
userFile: any;
logoURL:any;
 imagePath:any;
message!:String;
  compRequest:Compagnie={
    idcomp: 0,
   logo: null, 
   nom: '', 
   siege: '', 
   tel: '' ,
   logoUrl: null,
   offres: []
  };
  constructor(private compagnieservice:CompagnieserviceService,private fb:FormBuilder, private router:Router, private notificationservice:NotificationServiceService,private snackBar: MatSnackBar, private matdialogref:MatDialogRef<AddcompagnieComponent>) { }
  ngOnInit(): void {
    this.addCompForm=this.fb.group(
  {
    logo: [null],
      nom: ['', Validators.required],
      siege: ['', Validators.required],
      tel: ['+216', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]]

})

  }
  /*
  AddComp(){
    if(this.addCompForm.valid){
     const compData=this.addCompForm.value ;
     console.log('Company Data:', compData);

     //récupérer le fichier
     const logoFile:File=this.addCompForm.get('logo')?.value;
     console.log('Logo File:', logoFile);


     this.compagnieservice.addCompagnie(compData,logoFile)
     .subscribe(
      response=>{
        console.log('Compagnie a été ajoutée ',response)
        this.notificationservice.showSuccess('Compagnie ajoutée avec succées');
       this.router.navigate(['/listecompagnie']);
      },
    
      error=>{
        console.log('Erreur lors de l\'ajout');
        this.notificationservice.showSuccess('Veuillez remplir les champs');
      }
     );
    }

   
    }
*/

AddComp(){
  if (this.addCompForm.valid && this.logoFile) {
    const formData = new FormData();
    formData.append('file', this.logoFile);
    /*formData.append('nom', this.addCompForm.get('nom')?.value);
    formData.append('siege', this.addCompForm.get('siege')?.value);
    formData.append('tel', this.addCompForm.get('tel')?.value);*/
    formData.append('compagnie', JSON.stringify(this.addCompForm.value)); // Ajouter les détails de la compagnie


   this.compagnieservice.addCompagnie(formData).subscribe(
    response=>{
      console.log('Compagnie a été ajoutée ',response)
      this.notificationservice.showSuccess('Compagnie ajoutée avec succées');
      this.matdialogref.close('added');
    },
  
    error=>{
      console.log('Erreur lors de l\'ajout');
      this.notificationservice.showSuccess('Veuillez remplir les champs');
    }
   );
  }

 
  }
  
  resetForm(): void {
    this.compRequest.nom = '';
    this.compRequest.siege = '';
    this.compRequest.tel = '';
    this.compRequest.logo = null;
  }

    /*onFileChange(event:any){
      //console.log(event)
      if(event.target.files.length>0){
      const file=event.target.files[0];
      
      this.addCompForm.patchValue({
        logo:file,
        
      });
    }
  }*/

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.logoFile = event.target.files[0];
      var mimeType = this.logoFile.type;
      if (mimeType.match(/image\/*/)==null) {
        this.message = "only images are supported.";
        return;
      }
      var reader = new FileReader();
      this.imagePath = this.logoFile;
      reader.readAsDataURL(this.logoFile);
      reader.onload = (_event) => {
        this.logoURL = reader.result;   
      }
    }
  }
  
//a verifier
    Cancel(){
this.matdialogref.close();
    }
    
}
