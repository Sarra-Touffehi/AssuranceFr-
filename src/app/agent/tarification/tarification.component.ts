import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Offre } from 'src/app/models/offre';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { SouscriptionService } from 'src/app/services/souscription.service';

@Component({
  selector: 'app-tarification',
  templateUrl: './tarification.component.html',
  styleUrls: ['./tarification.component.css']
})
export class TarificationComponent implements OnInit {
  offre!: Offre;
  client!:Client;
  idClient!:number;
  numCredit!:number;
  constructor(  public dialogRef: MatDialogRef<TarificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private souscriptionService: SouscriptionService,
    private notificationservice : NotificationServiceService,
    public router : Router
    ) { }

  ngOnInit(): void {
    this.offre = this.data.offre;
    this.client= this.data.clientData;
    this.idClient = this.data.idClient;
    this.numCredit  = this.data.numCredit;
  }
  onNoClick(): void {
    this.dialogRef.close();
    
}
/*onSaveClick(){

} */

confirmSouscription(): void {
  this.notificationservice.showConfirmation('Confirmez-vous la souscription ?', () => {
    this.souscrire();
  });
}

souscrire(): void {
  this.souscriptionService.souscrire(this.idClient, this.offre.idOffre, {}).subscribe(
    (response: any) => {
      console.log('Souscription réussie:', response);
      this.notificationservice.showSuccess(response.message);
      this.dialogRef.close();
      this.router.navigate(['/contrat'], {
        queryParams: {
          idClient: this.idClient,
          numCredit: this.numCredit,
          idOffre : this.offre.idOffre,
        }
      });
    },
    (error) => {
      console.error('Erreur lors de la souscription:', error);
    }
  );
}

}
