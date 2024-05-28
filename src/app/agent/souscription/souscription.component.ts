import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Client } from 'src/app/models/client';
import { Credit } from 'src/app/models/credit';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { CreditService } from 'src/app/services/credit.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SouscriptionComponent implements OnInit {
  FormClient !:FormGroup;
  FormCredit!:FormGroup;
  lesClients: Client[]=[];
  lesCredits:Credit[]=[];
  sideNavStatus:boolean = false;
constructor(private clientservice:ClientServiceService,private creditservice:CreditService, private fb:FormBuilder, 
  private router : Router,
  private notificationservice : NotificationServiceService,
  ) { }

  ngOnInit(): void {
   this.FormClient= this.fb.group({
    'numcompte':[ null, Validators.required],
    'idClient': [],
    'nom': [],
    'prenom': [],
    'cin': [],
    'email': [],
    'dateNaissance': [],
    'tel': [],
    'revenu': [],
    'adresse':[]
   }),

 this.FormCredit= this.fb.group({
   
    "numCredit":[],
	 "typeCredit":[],
	 "montant":[],
	"dateAccord":[],
	 "dateEcheance":[],
	 "duree":[]
   }),
 
    this.FormClient.get('numcompte')?.valueChanges.subscribe((value) => {
      if(!value){
        this.FormClient.reset();
        //this.lesClients = [];
      }else{
        this.afficherClientsByNumCompte();
      }
    });

    
  }

afficherClientsByNumCompte() {
    if (this.FormClient.valid) {
      const numcompte = this.FormClient.get('numcompte')?.value;
      this.lesClients = []; 

      this.clientservice.getClientByNumCompte(numcompte).subscribe(
        (data: Client) => { 
          this.lesClients.push(data); 
          console.log('Infos clients:', this.lesClients);
        },
        (error: any) => {
          console.log('Erreur lors de la récupération des infos client:', error);
        }
      );
      

      this.creditservice.getCreditByNumCompte(numcompte).subscribe(
        (data: Credit[]) => {
          this.lesCredits = data;
          console.log('Infos crédits:', this.lesCredits);
        },
        (error: any) => {
          console.log('Erreur lors de la récupération des crédits:', error);
        }
      );
    }
  }

  
/*  afficherCreditsByNumCompte() {
    const numcompte = this.FormClient.get('numcompte')?.value;
    this.creditservice.getCreditByNumCompte(numcompte).subscribe(
      (data: Credit[]) => {
        this.lesCredits = data;
        console.log('Crédits associés au compte:', this.lesCredits);
        //this.afficherCreditByNumCredit();
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des crédits:', error);
      }
    );
  } */




  afficherCreditByNumCredit() {
    const numCredit = this.FormCredit.get('numCredit')?.value;
    this.creditservice.getCreditByNumCredit(numCredit).subscribe(
      (data: Credit[]) => {
        if (data.length > 0) {
          const credit = data[0];
          this.FormCredit.patchValue({
            typeCredit: credit.typeCredit,
            montant: credit.montant,
            duree: credit.duree,
            dateAccord: credit.dateAccord,
            dateEcheance: credit.dateEcheance
          });
          console.log('Infos crédit:', data);
        } else {
          console.log('Aucune information sur le crédit pour le numéro de crédit sélectionné.');
        }
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des infos crédit:', error);
      }
    );
  }
  



  
  simuler() {
   
    const numCredit = this.FormCredit.get('numCredit')?.value;
  
    this.creditservice.getCreditByNumCredit(numCredit).subscribe(
      (credit: any) => {
        if (credit) {
          this.router.navigate(['/simulation'], { queryParams: { idClient: this.lesClients[0].idClient , numCredit : numCredit } });
        } else {
          alert('Le client n\'a pas de crédit associé.'); 
        }
      },
      (error: any) => {
        console.log('Erreur lors de la récupération du crédit:', error);
        this.notificationservice.showError('Le client n\'a pas de crédit associé.');
      }
    );
    
  } 
  
  reset() {
    this.FormClient.reset();
    this.FormCredit.reset();
    this.lesClients = [];
    this.lesCredits = [];
  }
  
}
