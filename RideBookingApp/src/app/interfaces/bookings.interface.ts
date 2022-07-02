import { Timestamp } from "rxjs";

export interface Booking{
  pickUp: string,
  dropOff: string,
  passengerName: string,
  passengerPhone: number,
  userId: string,
  rideDate: Date
}