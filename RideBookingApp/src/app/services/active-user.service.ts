import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";


/**
 * This service returns the authentication
 * status and details of the current user.
 */
@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {

  constructor( private afAuth: AngularFireAuth) { }

  //check current authentication state of user.
  public getActiveUser(){
    return this.afAuth.authState;
  }
}
