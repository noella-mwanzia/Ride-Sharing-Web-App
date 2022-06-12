import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BookRideDialogComponent } from 'src/app/dialogs/book-ride-dialog/book-ride-dialog.component';

@Component({
  selector: 'app-morning-trip',
  templateUrl: './morning-trip.component.html',
  styleUrls: ['./morning-trip.component.scss']
})
export class MorningTripComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   
  bookRide(){
    const dialogRef = this.dialog.open(BookRideDialogComponent, {
      width: '350px',
      height: '400px',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
