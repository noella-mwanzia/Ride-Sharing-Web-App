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


signUpWithEmailAndPassword(form: any , userType: UserType)
{
  return  this.afAuth
              .createUserWithEmailAndPassword(form.email,form.password)
              .then(res => this.addToUsersCollection(res.user.displayName, res.user.email, res.user.uid ,userType))
              .catch(error => console.log(error))
}

private addToUsersCollection(displayName: string, email: string, userId: string, userType: UserType)
{
  const userDetails = { 
    displayName: displayName,
    email: email,
    uId: userId,
    role: userType
  }

  this.db.collection(`users`).doc(userId).set(userDetails)
      .then((res) => console.log(`User successfully added to users collection`))
      .catch(error => console.log(error))

}
}

