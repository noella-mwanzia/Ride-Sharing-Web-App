import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookingService } from 'src/app/services/bookings/booking.service';

import { Booking } from 'src/app/interfaces/bookings.interface';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';

@Component({
  selector: 'app-book-ride-form',
  templateUrl: './book-ride-form.component.html',
  styleUrls: ['./book-ride-form.component.scss']
})
export class BookRideFormComponent implements OnInit {

  @Input() rideDetails: RideSchedules
  @Input() period: string

  bookRideForm : FormGroup;

  constructor(private fb: FormBuilder,
              private bookingService: BookingService) { }

  ngOnInit(): void {
    this.rideDetails;
    this.initForm()
  }

  initForm(){
    this.bookRideForm = this.fb.group({
            "pickUp": [ this.rideDetails?.pickUp, Validators.required],
            "dropOff":[ this.rideDetails?.dropOff, Validators.required],
            "rideDate":[ new Date(),Validators.required]
    })
  }

  bookRide()
  {
    const bookFormData = this.bookRideForm.value;

    const booking = {
      pickUp: bookFormData.pickUp,
      dropOff: bookFormData.dropOff,
      rideDate: bookFormData.rideDate,
    } as Booking

    this.bookingService.bookRide(booking, 'morning')

  }

}
