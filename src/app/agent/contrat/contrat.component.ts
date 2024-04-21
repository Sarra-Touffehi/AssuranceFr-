import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Compagnie } from 'src/app/models/compagnie';
import { Credit } from 'src/app/models/credit';
import { Offre } from 'src/app/models/offre';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { CreditService } from 'src/app/services/credit.service';
import { OffreserviceService } from 'src/app/services/offreservice.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  idClient!: number;
  numCredit!: number;
  idOffre!:number;
  client: Client | undefined;
  credit: Credit[] = [];
  compagnie: Compagnie | undefined;
  offre: Offre | undefined;
  currentDate: Date = new Date();
  
  constructor(private route: ActivatedRoute, private clientService: ClientServiceService, private creditService : CreditService,
    private compagnieService: CompagnieserviceService,
    private offreService: OffreserviceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idClient = params['idClient'];
      this.numCredit = params['numCredit'];
      this.idOffre= params['idOffre'];
    });

    this.AfficherClient();
    this.AfficherCredit();
    this.AfficherCompagnie();
    this.AfficherOffre();
  }

  AfficherClient() {
    this.clientService.getClientById(this.idClient).subscribe(
      (client: Client) => {
        this.client = client;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des informations du client:', error);
      }
    );
  }

  AfficherCredit() {
    this.creditService.getCreditByNumCredit(this.numCredit).subscribe(
      (credit: Credit[]) => {
        this.credit = credit;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des informations du crédit:', error);
      }
    );
  }

  AfficherCompagnie() {
    this.compagnieService.getCompagnieByOffreId(this.idOffre).subscribe(
      (compagnie: Compagnie) => {
        this.compagnie = compagnie;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des informations de la compagnie:', error);
      }
    );
  }
  AfficherOffre() {
    this.offreService.getOffreById(this.idOffre).subscribe(
      (offre: Offre) => {
        this.offre = offre;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des informations de l\'offre:', error);
      }
    );
  }
}
