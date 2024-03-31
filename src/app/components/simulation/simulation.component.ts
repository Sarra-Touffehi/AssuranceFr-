import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Compagnie } from 'src/app/models/compagnie';
import { Offre } from 'src/app/models/offre';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { OffreserviceService } from 'src/app/services/offreservice.service';
import { TarificationComponent } from '../tarification/tarification.component';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  offres: Offre[]= [];;
  lesCompagnies!: Compagnie[];
  idCompagnie!: number;
 

  constructor( private route: ActivatedRoute, private offreService :OffreserviceService, private matDialog:MatDialog,
    private compagnieService : CompagnieserviceService) { }

  ngOnInit(): void {
    this.AfficherOffres();
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
  
  openDialog() {
    const dialogRef = this.matDialog.open(TarificationComponent, {
      width: '400px',
    });
  }

  

 



}
