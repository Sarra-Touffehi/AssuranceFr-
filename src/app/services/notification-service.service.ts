import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private snackbar:MatSnackBar) { }
  showSuccess(message: string): void {
    this.snackbar.open(message, 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  }

  showError(message: string): void {
    this.snackbar.open(message, 'Fermer', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }

  showConfirmation(message: string, callback: () => void): void {
    const confirmation = this.snackbar.open(message, 'Confirmer', {
      duration: 0,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    confirmation.onAction().subscribe(() => {
      callback();
    });
  }


  clearError() {
    // Fermer le snackbar
    this.snackbar.dismiss();
  }
}
