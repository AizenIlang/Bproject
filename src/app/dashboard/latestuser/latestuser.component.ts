import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-latestuser',
  templateUrl: './latestuser.component.html',
  styleUrls: ['./latestuser.component.css']
})
export class LatestuserComponent implements OnInit {

  constructor(private firestore : AngularFirestore, private userService : UsersService) { }

  email;
  fullname;
  mobile;
  bdate;
  barangay;
  ngOnInit() {
    this.getNewUser();
  }

  getNewUser = () => {
    let met :any;
    this.userService.getNewUser().subscribe(res => {
      met = res;
     this.email = met.email;
     this.barangay = met.barangay;
     this.fullname = met.fullName;
     this.bdate = met.birthDate;
     this.mobile = met.mobile;
     console.log(met);
     }
     );
 
     
   }

}
