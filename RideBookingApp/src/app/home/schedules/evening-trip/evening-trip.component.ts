import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookRideDialogComponent } from 'src/app/dialogs/book-ride-dialog/book-ride-dialog.component';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';

import { RoutesService } from 'src/app/services/routes/routes.service';

@Component({
  selector: 'app-evening-trip',
  templateUrl: './evening-trip.component.html',
  styleUrls: ['./evening-trip.component.scss']
})
export class EveningTripComponent implements OnInit {
  routes$;

  constructor(public dialog: MatDialog,
              private routesService: RoutesService) { }

  ngOnInit(): void {
  this.routes$ = this.routesService.getRoutes('evening')
  }

  bookRide(route: RideSchedules){
    const dialogRef = this.dialog.open(BookRideDialogComponent, {
      width: '350px',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
