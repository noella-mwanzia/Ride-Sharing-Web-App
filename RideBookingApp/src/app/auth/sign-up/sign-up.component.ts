import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';
import { Roles, UserType } from 'src/app/interfaces/roles';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(  private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signUpForm = this.fb.group({
      "name": ['',Validators.required],
      "phoneNumber": ['', Validators.required],
      "email": ['', [Validators.required,Validators.email]],
      "password": ['', Validators.required]
    })
  }

  signUpUser(){

    if(this.signUpForm.valid)
    {
      this.authService.signUpWithEmailAndPassword(this.signUpForm.value, UserType.passenger)
      .then((res) => {
        console.log(`User details, ${res}`)
        this.router.navigate(['/home'])
      })
    }
    
  }

}
