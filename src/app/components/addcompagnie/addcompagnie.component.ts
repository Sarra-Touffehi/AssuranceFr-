import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  compRequest:Compagnie={
    idcomp: 0,
   logo: null, 
   nom: '', 
   siege: '', 
   tel: '' ,
   logoUrl: null,
  };
  constructor(private compagnieservice:CompagnieserviceService,private fb:FormBuilder, private router:Router, private notificationservice:NotificationServiceService,private snackBar: MatSnackBar, private matdialogref:MatDialogRef<AddcompagnieComponent>) { }
  ngOnInit(): void {
    this.addCompForm=this.fb.group(
  {logo:[null],
    nom:[''],
  siege:[''],
  tel:[''],

})

  }
  
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



    onFileChange(event:any){
      //console.log(event)
      const file=event.target.files[0];
      
      this.addCompForm.patchValue({
        logo:file,
        
      });
    }
//a verifier
    Cancel(){
this.matdialogref.close(AddcompagnieComponent);
    }
    
}
