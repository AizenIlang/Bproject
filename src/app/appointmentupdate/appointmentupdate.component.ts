import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppointmentService } from '../service/appointment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-appointmentupdate',
  templateUrl: './appointmentupdate.component.html',
  styleUrls: ['./appointmentupdate.component.css']
})
export class AppointmentupdateComponent implements OnInit {

  updateData : any;
  passedData : any;
  updateDataAppointment : any;
  healthStatus;

  selected;


  form = new FormGroup({    
    weightControl : new FormControl(this.data.weight,[Validators.required]),
    heightControl : new FormControl(this.data.height,[Validators.required]),
    operatedbyControl : new FormControl('',Validators.required),
    healthHistoryControl : new FormControl("",),
    selectedFormControl : new FormControl("")
  });

  get operatedbyControl(){
    return this.form.get('operatedbyControl');
  }
  get selectedFormControl(){
    return this.form.get('selectedFormControl');
  }
  get weightControl(){
    return this.form.get('weightControl');
  }

  get heightControl(){
    return this.form.get('heightControl');
  }

  get healthHistoryControl(){
    return this.form.get('healthHistoryControl');
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private appointmentService : AppointmentService,
  private patientService : PatientService) { }

  ngOnInit() {
  }

  onUpdate(){
    this.changeData();
    this.patientService.updatePatient(this.data.key,this.updateData);
    this.appointmentService.updateAppointment(this.data.keyappoint,this.updateData);
  }


  changeData(){
    let hs = this.patientService.getHealthHistory(this.weightControl.value,this.heightControl.value)
    console.log("Healt Status is :" + hs);
    console.log("Operated by :" +this.operatedbyControl.value);
    this.updateData = {
      healthStatus : hs,
      height : this.heightControl.value,
      weight : this.weightControl.value,
      healthHistory : this.healthHistoryControl.value,
      operatedBy : this.operatedbyControl.value
    }

    
    // console.log("Updated the Health Status :" + this.updateData + " " + this.weightControl.value);
    // this.updateData.healthstatus = this.healthstatusControl.value;
    // this.updateData.height = this.heightControl.value;
    // this.updateData.weight = this.weightControl.value;
    console.log("The Updated data:" + this.updateData.healthStatus);
    
  }

  doSomething(event){
    console.log(event.value);
    console.log(this.selected);
  }


}
