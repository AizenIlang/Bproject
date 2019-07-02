import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoggedIn = false;
  theEmail;
  constructor(private afAuth : AngularFireAuth, private router : Router) { }

  getUser(){
    if(this.getIsloggedIn){
      return this.afAuth.auth.currentUser.displayName;
    }
  }

  getIsloggedIn() : boolean{
    
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        
        this.router.navigate(['patient']);
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
      },onreject =>{
        console.log("Rejected " + onreject);
        Swal.fire("Incorrect Log In","Please double check your credentials : " + onreject, 'warning');
      }
    )
  }

  logOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }
}
