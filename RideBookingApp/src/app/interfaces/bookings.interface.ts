import { Timestamp } from "rxjs";

export interface Booking{
  pickUp: string,
  dropOff: string,
  passengerName: string,
  passengerPhone: string,
  userId: string,
  rideDate: Date
}