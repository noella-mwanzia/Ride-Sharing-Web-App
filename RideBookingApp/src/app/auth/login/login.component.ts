import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(  private _fb: FormBuilder,
                private _router: Router,
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

    this._authService.loginWithEmailAndPassword(email,password)
                      .then((res) => this._router.navigate['/home'])
                      .catch((err) => console.log(err))
  }

}
