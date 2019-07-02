import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMI';
  options : FormGroup;
  
  Logged = false;
  opened = false;
  constructor(fb : FormBuilder, private afAuth : AngularFireAuth, public userService : UsersService, private router : Router){
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    }); 
  }

  async ngOnInit() {
   this.userService.getIsloggedIn();
   this.ngCheckLogged();
   this.opened = this.userService.getIsloggedIn();
  }

  signOut(){
    this.userService.logOut();
    this.Logged = false;
    this.opened = false;
  }

  ngCheckLogged(){
    if(this.userService.isLoggedIn){
      this.Logged = true;
    }else{
      this.Logged = false;
    }
  }
  
}
