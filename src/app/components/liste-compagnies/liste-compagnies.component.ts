import { Component, OnInit } from '@angular/core';
import { Compagnie } from 'src/app/models/compagnie';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddcompagnieComponent } from '../addcompagnie/addcompagnie.component';
@Component({
  selector: 'app-liste-compagnies',
  templateUrl: './liste-compagnies.component.html',
  styleUrls: ['./liste-compagnies.component.css']
})
export class ListeCompagniesComponent implements OnInit {
lesCompagnies!: Compagnie[];
  constructor(private compagnieservice:CompagnieserviceService,private matDialog:MatDialog ) { }
 
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
  getLogoUrl(logo: Blob): any {
    return URL.createObjectURL(logo);
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
  openDialog(){
    this.matDialog.open(AddcompagnieComponent,{
      width:'400px',
      
      
      
    })
  }

  deleteComp(idcomp?: number) {
    if (idcomp !== undefined) {
      this.compagnieservice.supprimerCompagnie(idcomp).subscribe({
        next: (response) => {
          const index = this.lesCompagnies.findIndex(c => c.idcomp === idcomp);
          if (index !== -1) {
            this.lesCompagnies.splice(index, 1);
          }
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de la compagnie dans le composant', error);
        }
      });
    } else {
      console.log("ID non défini");
    }
  }
  


}

