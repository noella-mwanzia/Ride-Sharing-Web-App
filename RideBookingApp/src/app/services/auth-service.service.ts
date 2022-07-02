import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Roles, UserType } from '../interfaces/roles';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore) { }

//function used to create new users.
public signUpWithEmailAndPassword(form: any , userType: UserType)
{
  return  this.afAuth
              .createUserWithEmailAndPassword(form.email,form.password)
              .then(res => {
                this.addToUsersCollection(res.user.displayName, res.user.email, res.user.uid ,userType,form.phoneNumber)
                return res.user;
              })
              .catch(error => console.log(error))
}

//function used to log in existing users
public loginWithEmailAndPassword(email: string, password: string){
  return this.afAuth.signInWithEmailAndPassword(email, password)
                    .then(res => `[AuthService] Successfully logged in user.`)
                    .catch(err => console.log(err))

}

//Once a new user has been created, add them to the user's collection.
private addToUsersCollection(displayName: string, email: string, userId: string, userType: UserType, phone: number)
{
  const userDetails: User = { 
    displayName: displayName,
    email: email,
    uId: userId,
    id: userId,
    roles: {
      captain: userType === UserType.captain ? true : false,
      admin: false,
      passenger: userType === UserType.passenger ? true : false
    },
    phone: phone,
    createdOn: new Date()
  }

  this.db.collection(`users`).doc(userId).set(userDetails)
}
}

