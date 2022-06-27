import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

}
