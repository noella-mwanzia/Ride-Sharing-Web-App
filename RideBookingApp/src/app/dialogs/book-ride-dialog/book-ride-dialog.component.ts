import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-ride-dialog',
  templateUrl: './book-ride-dialog.component.html',
  styleUrls: ['./book-ride-dialog.component.scss']
})
export class BookRideDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<BookRideDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
