import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';


/**
 * This service returns the authentication
 * status and details of the current user.
 */
@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {

  constructor(  private _afAuth: AngularFireAuth,
                private _afs: AngularFirestore) { }

  //check current authentication state of user.
  public getActiveUser()
  {
    return this._afAuth
                .user
                .pipe(switchMap(user =>
                          // Switch to subscription, if doc changes everything changes.
                          ((user && user.uid) ? this._afs.doc<User>(`users/${user.uid}`).valueChanges()
                                              : of(null)) as Observable<User>),
                      tap(u => {
                        if(!!u){
                          console.log(`[UserService] Retrieved user ${(u as User).id}`)
                        }
                        else{
                          console.log(`User not set`);
                        }}));
  }
}
