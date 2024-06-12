import { Component, OnInit } from '@angular/core';
import { Compagnie } from 'src/app/models/compagnie';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddcompagnieComponent } from '../addcompagnie/addcompagnie.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
@Component({
  selector: 'app-liste-compagnies',
  templateUrl: './liste-compagnies.component.html',
  styleUrls: ['./liste-compagnies.component.css']
})
export class ListeCompagniesComponent implements OnInit {
lesCompagnies!: Compagnie[];
private headers: HttpHeaders;
sideNavStatus:boolean = false;

  constructor(private compagnieservice:CompagnieserviceService,private matDialog:MatDialog ,private authService : AuthService,  private notificationService: NotificationServiceService) { 
    this.headers = this.authService.getTokenHeaders();

  }
 
  ngOnInit(): void {
   this.afficherCompagnies();
      
    
  }



 /* getLogoUrl(logo: Blob | null): string | null {
    if (logo instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(logo);
      reader.onloadend = () => {
        return reader.result as string;
      };
    }
    return null;
  }
  */
 /* getLogoUrl(logo: Blob): any {
    return URL.createObjectURL(logo);
  }
  getLogoUrl(logo: File | null): string | null {
    if (logo instanceof File) {
      return URL.createObjectURL(logo);
    }
    return null;
  } */


  getLogoUrl(logo: File | null): string | null {
    if (logo) {
      const headers = this.authService.getTokenHeaders();
      return (`http://localhost:9630/images/${logo}` + {headers: this.headers});
    }
    return null;
  }
  
  
  
  
  
  afficherCompagnies() {
    this.compagnieservice.getCompagnies().subscribe(
      data => {
        this.lesCompagnies = data;
        console.log('Liste des compagnies:', this.lesCompagnies);
      },
      error => {
        console.log('Erreur lors de la récupération des compagnies:', error);
      }
    );
  }


 /* afficherCompagnies() {
    this.compagnieservice.getCompagnies().subscribe(
      data => {
        data.forEach(compagnie => {
          compagnie.logoUrl = '/Images/' + compagnie.logo;
        });
        this.lesCompagnies = data;
        console.log('Liste des compagnies:', this.lesCompagnies);
      
      },
      error => {
        console.log('Erreur lors de la récupération des compagnies:', error);
      }
    );
  }*/
  openDialog(){
    const dialogRef = this.matDialog.open(AddcompagnieComponent,{
      width:'350px',
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-container'
      
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'added') {
        this.afficherCompagnies();
      }
    });
    
  }

  deleteComp(idcomp?: number) {
    if (idcomp !== undefined) {
      this.notificationService.showConfirmation('Êtes-vous sûr de vouloir supprimer cette compagnie ?', () => {
        this.compagnieservice.supprimerCompagnie(idcomp).subscribe({
          next: (response) => {
            const index = this.lesCompagnies.findIndex(c => c.idcomp === idcomp);
            if (index !== -1) {
              this.lesCompagnies.splice(index, 1);
            }
            this.notificationService.showSuccess("Compagnie supprimée avec succès !");
            this.afficherCompagnies();
          },
          error: (error) => {
            const errorMessage = error.error && error.error.message ? error.error.message : 'Erreur lors de la suppression de la compagnie.';
            this.notificationService.showError(errorMessage);
            console.error('Erreur lors de la suppression de la compagnie dans le composant', error);
          }
        });
      });
    } else {
      console.log("ID non défini");
    }
  }


  


}