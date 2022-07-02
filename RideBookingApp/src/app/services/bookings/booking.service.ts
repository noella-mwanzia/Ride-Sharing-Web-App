import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Booking } from 'src/app/interfaces/bookings.interface';

/**This service is responsible for making ride 
 * bookings
 */

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private afs: AngularFirestore ) { }

  bookRide( booking: Booking, period: string ){
    const bookingsCollectionRef = this.afs.collection<Booking>(`bookings/imara-daima/${period}`);
    return bookingsCollectionRef.add(booking);
  }

}
