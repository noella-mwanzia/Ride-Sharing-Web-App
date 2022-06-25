import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(  private _fb: FormBuilder,
                private _authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm()
  {
    this.logInForm = this._fb.group({
      "email": ['',[Validators.required]],
      "password": ['', Validators.required]
    })
  }

  login()
  {
    const email = this.logInForm.controls['email'].value;
    const password = this.logInForm.controls['password'].value;

    this._authService.loginWithEmailAndPassword(email,password);
  }

}
