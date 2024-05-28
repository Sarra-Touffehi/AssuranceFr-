import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/offreservice.service';
import { AddOffreComponent } from '../add-offre/add-offre.component';
import { MatDialog } from '@angular/material/dialog';
import { Compagnie } from 'src/app/models/compagnie';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { UpdateOffreComponent } from '../update-offre/update-offre.component';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  offres: Offre[]= [];;
  lesCompagnies!: Compagnie[];
  idCompagnie!: number;
 
  sideNavStatus:boolean = false;

  constructor( private route: ActivatedRoute, private offreService :OffreserviceService, private matDialog:MatDialog,
    private compagnieService : CompagnieserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCompagnie = params['idcomp'];
      this.AfficherOffres();
    });
    this.loadCompagnies();
  }
  loadCompagnies(): void {
    this.compagnieService.getCompagnieById(this.idCompagnie).subscribe(
      data => {
        this.lesCompagnies = [data];
      },
      error => {
        console.log('Erreur lors du chargement des compagnies:', error);
      }
    );
  }
  AfficherOffres() {
    if (this.idCompagnie !== null) {
      this.offreService.getOffresPourCompagnie(this.idCompagnie).subscribe(
        data => {
          this.offres = data;
          console.log('Liste des offres pour la compagnie avec l\'ID ' + this.idCompagnie + ':', this.offres);
        },
        error => {
          console.log('Erreur lors de la récupération des offres pour la compagnie:', error);
        }
      );
    }
  }

  

 /* openDialog(){
    this.matDialog.open(AddOffreComponent,{
      width:'400px',
      
      
      
    })
  } */
  openDialog() {
    // Passer l'ID de la compagnie au dialogue AddOffreComponent
    const dialogRef = this.matDialog.open(AddOffreComponent, {
      width: '400px',
      
      data: { idCompagnie: this.idCompagnie } ,
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-container'
    });
  }
 
  openModifyDialog(offre: Offre) {
    const dialogRef = this.matDialog.open(UpdateOffreComponent, {
        width: '400px',
        data: { offre: offre }
    });

    dialogRef.afterClosed().subscribe(result => {
        // Actualisez la liste des offres après la modification si nécessaire
        if (result === 'updated') {
            this.AfficherOffres();
        }
    });
}

  

}