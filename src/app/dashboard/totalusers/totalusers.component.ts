import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-totalusers',
  templateUrl: './totalusers.component.html',
  styleUrls: ['./totalusers.component.css']
})
export class TotalusersComponent implements OnInit {

  constructor(private firebase : AngularFirestore, private userService : UsersService) { }
  theSize = 0;
  ngOnInit() {
    this.getTotalUsers();
  }

  getTotalUsers = () => {
   
    this.userService.getTotalUsers().subscribe(res => {
      this.theSize = res.size;
    
    
     }
     );
 
     
   }

}
