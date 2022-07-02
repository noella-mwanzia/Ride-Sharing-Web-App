import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookingService } from 'src/app/services/bookings/booking.service';
import { ActiveUserService } from 'src/app/services/active-user.service';

import { Booking } from 'src/app/interfaces/bookings.interface';
import { RideSchedules } from 'src/app/interfaces/ride-schedules';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-book-ride-form',
  templateUrl: './book-ride-form.component.html',
  styleUrls: ['./book-ride-form.component.scss']
})
export class BookRideFormComponent implements OnInit {

  @Input() rideDetails: RideSchedules
  @Input() period: string

  @Output() closeDialog : EventEmitter<boolean> = new EventEmitter

  bookRideForm : FormGroup;
  activeUser: User;

  constructor(private fb: FormBuilder,
              private bookingService: BookingService,
              private userService: ActiveUserService ) { }

  ngOnInit(): void {
    this.userService.getActiveUser().subscribe(u => this.activeUser = u);
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
      passengerName: this.activeUser.displayName,
      passengerPhone: this.activeUser.phone,
      userId: this.activeUser.uId,
    } as Booking

    this.bookingService.bookRide(booking, this.period);
  }

  cancel(){
    this.closeDialog.emit(true)
  }

}
