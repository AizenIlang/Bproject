import { Component, OnInit, Inject } from '@angular/core';
import { CalendarService } from '../service/calendar.service';
import { UsersService } from '../service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-calendaredit',
  templateUrl: './calendaredit.component.html',
  styleUrls: ['./calendaredit.component.css']
})
export class CalendareditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private calendarService : CalendarService,
    private userService : UsersService) { }

    calendarData;
  form = new FormGroup({
    
    detailsControl : new FormControl(this.data.details,[Validators.required]),    
    timeControl: new FormControl(this.data.time,[Validators.required]),
    timeControl2 : new FormControl(this.data.datestart,[Validators.required]),
    slotControl: new FormControl(this.data.slot,[Validators.required]),
    doctorControl: new FormControl(this.data.doctor,[Validators.required])
  });

  onEdit(){
    this.changeData();
    this.calendarService.editEvent(this.data,this.calendarData);
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

  changeData(){
    console.log(this.timeControl.value + "This is the Time");
    this.calendarData = {
      
      details : this.detailsControl.value,      
      slot : this.slotControl.value,
      time : this.timeControl.value,
      datestart : this.timeControl2.value,
      barangay : this.userService.barangay,
      doctor : this.doctorControl.value
    }
    
  }

  onAdd(){
    
  }

}
