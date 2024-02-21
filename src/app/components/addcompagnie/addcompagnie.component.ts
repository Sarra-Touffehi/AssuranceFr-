import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Compagnie } from 'src/app/models/compagnie';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';

@Component({
  selector: 'app-addcompagnie',
  templateUrl: './addcompagnie.component.html',
  styleUrls: ['./addcompagnie.component.css']
})
export class AddcompagnieComponent implements OnInit {
  addCompForm!:FormGroup;
  compRequest:Compagnie={
   logo: null, 
   nom: '', 
   siege: '', 
   tel: '' 
  };
  constructor(private compagnieservice:CompagnieserviceService,private fb:FormBuilder) { }
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
     const compData=this.addCompForm.value;

     //récupérer le fichier
     const logoFile:File=this.addCompForm.get('logo')?.value;

     this.compagnieservice.addCompagnie(compData,logoFile)
     .subscribe(
      response=>{
        console.log('Compagnie a été ajoutée ',response)
      },
    
      error=>{
        console.log('Erreur lors de l\'ajout');
      }
     );
    }

    /*console.log(this.compRequest);
    this.compagnieservice.addCompagnie(this.compRequest)
    .subscribe({
      next:(Compagnie)=>{
        alert('compagnie a été ajouté avec succés!');
        
      }
    })*/
    }

    onFileChange(event:any){
      const file=event.target.files[0];
      this.addCompForm.patchValue({
        logo:file,
      });
    }
}
