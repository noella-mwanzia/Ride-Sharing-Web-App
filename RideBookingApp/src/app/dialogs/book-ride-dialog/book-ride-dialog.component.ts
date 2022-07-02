import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';

@Component({
  selector: 'app-book-ride-dialog',
  templateUrl: './book-ride-dialog.component.html',
  styleUrls: ['./book-ride-dialog.component.scss']
})
export class BookRideDialogComponent implements OnInit {

  rideDetails: RideSchedules;
  period: string;

  constructor( public dialogRef: MatDialogRef<BookRideDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.rideDetails = this.data.rideDetails;
    this.period = this.data.period;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
