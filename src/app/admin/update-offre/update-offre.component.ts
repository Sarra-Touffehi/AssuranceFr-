import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Offre } from 'src/app/models/offre';
import { OffreserviceService } from 'src/app/services/offreservice.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  modifyOffreForm: FormGroup;
  offre: Offre;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UpdateOffreComponent>,
    private offreService: OffreserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.offre = data.offre;
    this.modifyOffreForm = this.formBuilder.group({
      nom: [this.offre.nom],
      conditions: [this.offre.conditions],
      couverture: [this.offre.couverture],
      frais_mrh: [this.offre.frais_mrh, Validators.pattern('^[0-9]*$')],
      taxe: [this.offre.taxe, Validators.pattern('^[0-9]*$')],
      prime_commerciale: [this.offre.prime_commerciale, Validators.pattern('^[0-9]*$')],
    });
  }

  ngOnInit(): void {}

  UpdateOffre() {
    const updatedOffre: Offre = {
      idOffre: this.offre.idOffre,
      nom: this.modifyOffreForm.value.nom,
      conditions: this.modifyOffreForm.value.conditions,
      couverture: this.modifyOffreForm.value.couverture,
      frais_mrh: this.modifyOffreForm.value.frais_mrh,
      taxe: this.modifyOffreForm.value.taxe,
      prime_commerciale: this.modifyOffreForm.value.prime_commerciale,
      compagnie: this.offre.compagnie
    };

    this.offreService.updateOffre(this.offre.idOffre, updatedOffre).subscribe(
      response => {
        console.log('Offre mise à jour avec succès:', response);
        this.dialogRef.close('updated');
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'offre:', error);
        // Gérer les erreurs
      }
    );
}


  Cancel() {
    this.dialogRef.close();
  }
}
