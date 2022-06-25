import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Roles, UserType } from '../interfaces/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore) { }


public signUpWithEmailAndPassword(form: any , userType: UserType)
{
  return  this.afAuth
              .createUserWithEmailAndPassword(form.email,form.password)
              .then(res => {
                this.addToUsersCollection(res.user.displayName, res.user.email, res.user.uid ,userType)
                return res.user;
              })
              .catch(error => console.log(error))
}

public loginWithEmailAndPassword(email: string, password: string){
  return this.afAuth.signInWithEmailAndPassword(email, password)
                    .then(res => `[AuthService] Successfully logged in user.`)
                    .catch(err => console.log(err))

}

private addToUsersCollection(displayName: string, email: string, userId: string, userType: UserType)
{
  const userDetails: any = { 
    displayName: displayName,
    email: email,
    uId: userId,
    id: userId,
    roles: {
      captain: userType === UserType.captain ? true : false,
      admin: false,
      passenger: userType === UserType.passenger ? true : false
    },
    createdOn: new Date()
  }

  this.db.collection(`users`).doc(userId).set(userDetails)
}
}

