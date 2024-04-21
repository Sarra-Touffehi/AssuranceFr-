import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Compagnie } from 'src/app/models/compagnie';
import { Credit } from 'src/app/models/credit';
import { Offre } from 'src/app/models/offre';
import { Souscription } from 'src/app/models/souscription';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { CreditService } from 'src/app/services/credit.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { OffreserviceService } from 'src/app/services/offreservice.service';
import { SouscriptionService } from 'src/app/services/souscription.service';

@Component({
  selector: 'app-liste-contrats',
  templateUrl: './liste-contrats.component.html',
  styleUrls: ['./liste-contrats.component.css']
})
export class ListeContratsComponent implements OnInit {

  souscriptions: Souscription[]=[];

  clients: Client[] = [];
  offres: Offre[]= [];
  compagnies: Compagnie[]= [];
  credits: Credit[]= [];
  compagnie: Compagnie | undefined;
  offre: Offre | undefined;
  client: Client | undefined;

  constructor(private souscriptionService: SouscriptionService,
    private clientService : ClientServiceService,
    private offreService :OffreserviceService,
    private compagnieService : CompagnieserviceService,
    private notificationservice : NotificationServiceService,
    private creditService : CreditService
  ) { }

  ngOnInit(): void {
    this.getSouscriptions();  
  
    this.AfficherOffres();
    this.getClients();

    this.getCredits();

    this.getCompagnies();
    }

    searchText ='';
    
  getSouscriptions(): void {
    this.souscriptionService.getAllSouscriptions()
      .subscribe(souscriptions => this.souscriptions = souscriptions);
  }

  souscriptionsValide(): Souscription[] {
    return this.souscriptions.filter(souscription => souscription.statut === 'validé');
  }
  getCredits(): void {
    this.creditService.getAllCredits()
      .subscribe(
        credits => this.credits = credits
      );
  }

  afficherCreditByNumCompte(numCompte: number): Observable<Credit[]> {
    return this.creditService.getCreditByNumCompte(numCompte);
  }

  getCompagnies(): void {
    this.compagnieService.getCompagnies()
      .subscribe(
        compagnies => this.compagnies = compagnies
      );
  }

  afficherCompagnieByIdOffre(idOffre: number): Observable<Compagnie> {
    return this.compagnieService.getCompagnieByOffreId(idOffre);
  }



  

 

 
getOffres(): void {
  this.offreService.getOffres()
    .subscribe(
      offres => this.offres = offres
    );
}
getOffreName(offreId: number): string {
  const offre = this.offres.find(offre => offre.idOffre === offreId);
  return offre ? offre.nom : 'N/A'; 
}




getClients(): void {
  this.clientService.getAllClients()
    .subscribe(
      clients => {
        this.clients = clients;
        
      },
      error => {
        console.error('Erreur lors de la récupération des clients :', error);
      }
    );
}

getClientNumCompte(clientId: number): number {
  const client = this.clients.find(client => client.idClient === clientId);
  return  client ? client.numCompte : 0; 
}
 


getCompagnieLogo(offreId: number): File | string | null{
  const offre = this.offres.find(offre => offre.idOffre === offreId);
  return offre && offre.compagnie ? offre.compagnie.logo : 'N/A'; 
}

AfficherOffres() {
  this.offreService.getOffres().subscribe(
    data => {
      this.offres = data;
      this.offres.forEach(offre => {
        this.compagnieService.getCompagnieByOffreId(offre.idOffre).subscribe(
          compagnieData => {
            offre.compagnie = compagnieData; 
          },
          error => {
            console.log('Erreur lors du chargement de la compagnie pour l\'offre:', error);
          }
        );
      });
      console.log('Liste des offres:', this.offres);
    },
    error => {
      console.log('Erreur lors de la récupération des offres:', error);
    }
  );
}


  resilierContrat(idSousc: number) {
    this.souscriptionService.resilierContrat(idSousc).subscribe(
      response => {
        console.log('Contrat resilié avec succes:', response);
        this.notificationservice.showSuccess("Contrat résilié");
        
        this.souscriptions = this.souscriptions.filter(souscription => souscription.idSousc !== idSousc);
      },
      error => {
        console.error('Erreur :', error);
      }
    );
  }

}
