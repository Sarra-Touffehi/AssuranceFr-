import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Client } from 'src/app/models/client';
import { Credit } from 'src/app/models/credit';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SouscriptionComponent implements OnInit {
  FormClient !:FormGroup;
  //FormCredit!:FormGroup;
  lesClients: Client[]=[];
  lesCredits:Credit[]=[];
constructor(private clientservice:ClientServiceService,private creditservice:CreditService, private fb:FormBuilder) { }

  ngOnInit(): void {
   this.FormClient= this.fb.group({
    'numcompte':[ Validators.required],
    'idClient': [],
    'nom': [],
    'prenom': [],
    'cin': [],
    'email': [],
    'dateNaissance': [],
    'tel': [],
    'revenu': []
   }),

 /*  this.FormCredit= this.fb.group({
   
    "numCredit":[],
	 "typeCredit":[],
	 "montant":[],
	"dateAccord":[],
	 "dateEcheance":[],
	 "duree":[]
   }),
 */
    this.FormClient.get('numcompte')?.valueChanges.subscribe((value) => {
      if(!value){
        this.FormClient.reset();
        //this.lesClients = [];
      }else{
        this.afficherClientsByNumCompte();
      }
    });

    this.FormClient.get('idClient')?.valueChanges.subscribe((value) => {
      if (value) {
        this.afficherCreditsByCodeClient();
      }
    });
  }

  afficherClientsByNumCompte() {
    if(this.FormClient.valid){
     
      const numcompte=this.FormClient.get('numcompte')?.value;
      //vider le tableau avant de le remplir 
      this.lesClients = [];
    this.clientservice.getClientByNumCompte(numcompte).subscribe(
      (data:Client) => {
        this.lesClients.push(data); 
        console.log('Infos clients:', this.lesClients);
      }
    ,
      (error: any) => {
        console.log('Erreur lors de la récupération des infos client:', error);
      }
      
    );
    
  }
  }




  afficherCreditsByCodeClient() {
    if (this.FormClient.valid) {
      const idClient = this.FormClient.get('idClient')?.value;
      // vider le tableau avant de le remplir
      this.lesCredits = [];
      
      this.creditservice.getCreditByCodeClient(idClient).subscribe(
        (data: Credit[]) => {
          // Notez que j'ai changé `Credit` en `Credit[]` ici pour refléter que getCreditsByCodeClient peut retourner une liste
          this.lesCredits = data;
          console.log('Infos credits:', this.lesCredits);
        },
        (error: any) => {
          console.log('Erreur lors de la récupération des infos credit:', error);
        }
      );
    }
  }
  
}
