import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';

/** This service is responsible for retrieving/adding routes
 * to the DB.
 */

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor( private afs: AngularFirestore) { }

  //Returns the ride schedules sorted by the pick up time.
  getRoutes(time: string): Observable<RideSchedules[]>{
    return this.afs.collection<RideSchedules>(`route-schedules/imara-daima/${time}`, ref => ref.orderBy('pickUpTime'))
                    .snapshotChanges()
                    .pipe(map(routes => 
                      routes.map(route => {
                        const data = route.payload.doc.data();
                        const id = route.payload.doc.id;
                        return { id, ...data}
                      })))

  }


}
