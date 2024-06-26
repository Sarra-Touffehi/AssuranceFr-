import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Compagnie } from 'src/app/models/compagnie';
import { Offre } from 'src/app/models/offre';
import { CompagnieserviceService } from 'src/app/services/compagnieservice.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { OffreserviceService } from 'src/app/services/offreservice.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  addOffresForm!: FormGroup;
  idCompagnie: number=0;
  lesCompagnies!: Compagnie[];

  constructor(private offreService: OffreserviceService,
    private compagnieService : CompagnieserviceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private notificationservice: NotificationServiceService,
    private snackBar: MatSnackBar,
    private matdialogref: MatDialogRef<AddOffreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idCompagnie: number }) {
      this.idCompagnie = data.idCompagnie;

      
  }

  ngOnInit(): void {
    this.addOffresForm = this.fb.group({
      nom: ['', Validators.required],
      conditions: ['', Validators.required],
      couverture: ['', Validators.required],
      frais_mrh: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      taxe: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      prime_commerciale: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      compagnie: [this.idCompagnie, Validators.required]
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

  AddOffre(): void {
    if (this.addOffresForm.valid) {
      const offreData = this.addOffresForm.value;
      this.offreService.addOffresPourCompagnie(this.idCompagnie, offreData).subscribe(
        response => {
          if (response.includes('Offre ajoutée avec succès')) {
            this.notificationservice.showSuccess('Offre ajoutée avec succès');
            this.matdialogref.close('added');
          } else {
            this.notificationservice.showError('Erreur lors de l\'ajout');
          }
        },
        error => {
          this.notificationservice.showError('Erreur lors de l\'ajout');
        }
      );
    }
  }

  Cancel() {
    this.matdialogref.close();
  }
}
