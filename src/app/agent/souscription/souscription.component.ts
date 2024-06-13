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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Propriete } from 'src/app/models/propriete';

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
  riskLevel: string = '';
  sideNavStatus:boolean = false;
  private headers: HttpHeaders;
constructor(private clientservice:ClientServiceService,private creditservice:CreditService, private fb:FormBuilder, 
  private router : Router,
  private notificationservice : NotificationServiceService,
  private http: HttpClient,
  private authService : AuthService
  ) {
    this.headers = this.authService.getTokenHeaders();

   }

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
	 "duree":[],
   "assure": [], 
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
           this.notificationservice.clearError();
        },
        (error) => {
          console.log('Erreur lors de la récupération des infos client:', error);
        }
      );
  
      this.creditservice.getCreditByNumCompte(numcompte).subscribe(
        (data: Credit[]) => {
          this.lesCredits = data;
          console.log('Infos crédits:', this.lesCredits);
          if (this.lesCredits.length === 0) {
            this.notificationservice.showError('Ce compte n\'a pas de crédits associés.');
          } else {
            // Vérifier si le crédit est assuré
            const creditAssure = this.lesCredits.some(credit => credit.assure === true);
            this.FormCredit.patchValue({
              assureEnCredit: creditAssure
            });

            // Si des crédits sont trouvés, réinitialisez le message d'erreur
            this.notificationservice.clearError();
          }
        },
        (error: any) => {
          console.log('Erreur lors de la récupération des crédits:', error);
        }
      );
    } else {
      this.notificationservice.showError('Veuillez entrer un numéro de compte valide.');
    }
  }
  
  
  
  preparePredictionData(propriete: Propriete): any {
    return {
      SystemeSecurite: propriete.systemeSecurite,
      HistoriqueIncendie: propriete.historiqueIncendie,
      Meteo: propriete.meteo,
      MinTemp: propriete.minTemp,
      MaxTemp: propriete.maxTemp,
      AnneeAchat: propriete.anneeAchat,
      Surface: propriete.surface,
    };
  }

  getPrediction(Data: any) {
    this.http.post<any>('http://localhost:5000/predict', Data, { headers: this.headers }).subscribe(
      (response) => {
        this.riskLevel = response.risk_level;
      },
      (error) => {
        console.error('Erreur lors de la prédiction:', error.error);
      }
    );
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
            dateEcheance: credit.dateEcheance,
            assure: credit.assure
          });

          this.creditservice.getProprieteByNumCredit(numCredit).subscribe(
            (propriete: Propriete) => {
              const Data = this.preparePredictionData(propriete);
              this.getPrediction(Data);
            },
            (error) => {
              console.error('Erreur lors de la récupération des propriétés:', error);
            }
          );
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
  
    if (this.FormCredit.get('assureEnCredit')?.value === true) {
      this.notificationservice.showError('Ce crédit est déjà assuré.');
      return;
    }


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
  

  getColor() {
    switch (this.riskLevel) {
      case 'Elevé':
        return 'red';
      case 'Faible':
        return 'green';
      case 'Modéré':
        return 'orange';
      default:
        return 'black';
    }
  }

  reset() {
    this.FormClient.reset();
    this.FormCredit.reset();
    this.lesClients = [];
    this.lesCredits = [];
  }
  
}
