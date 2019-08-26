import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)

  });


  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userService.getIsloggedIn();
  }

  login(){
     this.userService.logInUser(this.form.get('username').value,this.form.get('password').value);
  }

  onCreate(){

  }




  ResetPass(){

  }

}
