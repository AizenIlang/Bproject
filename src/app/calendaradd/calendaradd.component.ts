import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { CalendarService } from '../service/calendar.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-calendaradd',
  templateUrl: './calendaradd.component.html',
  styleUrls: ['./calendaradd.component.css']
})
export class CalendaraddComponent implements OnInit {

  constructor(private calendarService : CalendarService,
    private userService : UsersService) { }

  calendarData;
  form = new FormGroup({
    titleControl : new FormControl('',[Validators.required]),
    detailsControl : new FormControl('',[Validators.required]),    
    timeControl: new FormControl('',[Validators.required]),
    timeControl2 : new FormControl('',[Validators.required]),
    slotControl: new FormControl('',[Validators.required]),
    doctorControl: new FormControl('',[Validators.required])
  });

  get titleControl(){
    return this.form.get('titleControl');
  }

  get timeControl2(){
    return this.form.get('timeControl2');
  }

  get detailsControl(){
    return this.form.get('detailsControl');
  }

  get slotControl(){
    return this.form.get('slotControl');
  }

  get timeControl(){
    return this.form.get('timeControl');
  }

  get doctorControl(){
    return this.form.get('doctorControl');
  }


  ngOnInit() {
  }

  onAdd(){
    this.changeData();
    this.calendarService.addEvent(this.calendarData);
  }

  changeData(){
    console.log(this.timeControl.value + "This is the Time");
    this.calendarData = {
      title : this.titleControl.value,
      details : this.detailsControl.value,      
      slot : this.slotControl.value,
      time : this.timeControl.value,
      datestart : this.timeControl2.value,
      barangay : this.userService.barangay,
      doctor : this.doctorControl.value
    }
    
  }

}
