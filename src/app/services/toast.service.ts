import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showToast(title: string, undo?: string, callback?: Function, duration?: number) {
    let snackBarRef = this.snackBar.open(title, undo != undefined ? undo : undefined, {
      duration: duration ? duration : 3000
    });

    snackBarRef.onAction().subscribe(event => {
      if (callback) {
        callback(event);
      }
    });
  }

}
