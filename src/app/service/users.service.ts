import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  theUser;
  isLoggedIn = false;
  isAdmin = false;
  theEmail;
  barangay;
  constructor(private afAuth : AngularFireAuth,
     private router : Router, 
     private firestore : AngularFirestore) { }

  getUser(){
    if(this.getIsloggedIn){
      return this.afAuth.auth.currentUser.displayName;
    }
  }

  getTotalUsers(){
    return this.firestore.collection('Users').get();
  }

  getNewUser(){
    return this.firestore.collection('NewUser').doc('NewUser').valueChanges();
  }

  getIsloggedIn() : boolean{
    
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        
        this.router.navigate(['dashboard']);
        console.log('user is logged in :' + this.afAuth.auth.currentUser.email);
        this.theEmail = this.afAuth.auth.currentUser.email;
        Swal.fire("BMI Check", "Welcome back :" + this.afAuth.auth.currentUser.email, 'info');
        this.isLoggedIn = true;
        return true;
        
      } else {
        this.isLoggedIn = false;
        console.log('user not logged in');
        this.router.navigate(['login']);
        return false;
      }

    });

    return false;
  }

  logInUser(username,password){
    this.afAuth.auth.signInWithEmailAndPassword(username,password).then(
      fullfilled=>{
        console.log("GotLoggedIn")
        this.isLoggedIn = true;
        this.onAuthenticate(username);
        
      },onreject =>{
        console.log("Rejected " + onreject);
        Swal.fire("Incorrect Log In","Please double check your credentials : " + onreject, 'warning');
      }
    )
  }

  onAuthenticate = (username) => {
    this.authenticateUser(username).subscribe(res => {
    this.theUser = res;
    console.log(this.theUser);
      this.isAdmin = this.theUser[0].admin;
      this.barangay = this.theUser[0].barangay;
      console.log("The user is an admin :" +this.isAdmin);
      console.log("The user is an barangay is :" +this.barangay);
    }
    );


  }

  authenticateUser(username){
   return this.firestore.collection('Users' , ref => ref.where('email','==',username )).valueChanges();
  }

  logOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  getParent(key){
    return this.firestore.collection('Users').doc(key).get()
  }
}
