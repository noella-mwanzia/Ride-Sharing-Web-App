import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { BookRideDialogComponent } from 'src/app/dialogs/book-ride-dialog/book-ride-dialog.component';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';
import { RoutesService } from 'src/app/services/routes/routes.service';

@Component({
  selector: 'app-morning-trip',
  templateUrl: './morning-trip.component.html',
  styleUrls: ['./morning-trip.component.scss']
})
export class MorningTripComponent implements OnInit {

  routes$: Observable<RideSchedules[]>

  constructor(public dialog: MatDialog,
              private routesService: RoutesService) { }

  ngOnInit(): void {
    this.routes$ = this.routesService.getRoutes('morning')
  }
   
  bookRide(){
    const dialogRef = this.dialog.open(BookRideDialogComponent, {
      width: '350px',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
