import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { RideSchedules } from '../interfaces/ride-schedules';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  constructor(private db: AngularFirestore) { }

  //add designated bus stops in a particular area
  addAreaStage(route:RideSchedules, period: 'morning' | 'evening'){
    const collectionRef = this.db.collection<RideSchedules>(`rides/imara-daima/route-schedules/${period}`);
    return collectionRef.add(route);
  }
}
