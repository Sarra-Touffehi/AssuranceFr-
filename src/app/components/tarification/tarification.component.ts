import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tarification',
  templateUrl: './tarification.component.html',
  styleUrls: ['./tarification.component.css']
})
export class TarificationComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<TarificationComponent>,
    ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
}

onSaveClick(): void {
    
}
}
