import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private snackbar:MatSnackBar) { }
  showSuccess(message: string):void {
    this.snackbar.open(message, 'Fermer',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top',
      //panelClass:['success-snackbar'],
    });
  }
}
