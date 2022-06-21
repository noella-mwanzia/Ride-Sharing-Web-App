import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Roles } from '../interfaces/roles';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth: AngularFireAuth) { }

  signUpWithEmailAndPassword(displayName: string, email: string, password: string, roles: Roles)
{
  return  this.afAuth
              .createUserWithEmailAndPassword(email,password)
              .then(res => console.log(res.user))
              .catch(error => console.log(error))
}
}
