import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-ride-form',
  templateUrl: './book-ride-form.component.html',
  styleUrls: ['./book-ride-form.component.scss']
})
export class BookRideFormComponent implements OnInit {

  bookRideForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.bookRideForm = this.fb.group({
            "pickUp": ["Jaharis", Validators.required],
            "dropOff":["Westlands", Validators.required],
            "name":["",Validators.required],
            "date":["",Validators.required]
    })
  }

  bookRide(){

  }

}
