import { Component, OnInit ,Inject} from '@angular/core';
import { PatientUpdate, PatientService, PatientUpdateDialogInterface } from '../service/patient.service';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientupdate',
  templateUrl: './patientupdate.component.html',
  styleUrls: ['./patientupdate.component.css']
})
export class PatientupdateComponent implements OnInit {

  updateData : any;
  passedData : PatientUpdateDialogInterface;
  healthStatus;

  selected;

  form = new FormGroup({    
    weightControl : new FormControl(this.data.weight,[Validators.required]),
    heightControl : new FormControl(this.data.height,[Validators.required]),
    healthHistoryControl : new FormControl("",),
    selectedFormControl : new FormControl("")
  });

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


  constructor(@Inject(MAT_DIALOG_DATA) public data: PatientUpdateDialogInterface, private patientService : PatientService) {

   }

  ngOnInit() {
    
  }



  onUpdate(){
    this.changeData();
    this.patientService.updatePatient(this.data.key,this.updateData);
  }

  changeData(){
    let hs = this.patientService.getHealthHistory(this.weightControl.value,this.heightControl.value)
    console.log("Healt Status is :" + hs);
    this.updateData = {
      healthStatus : hs,
      height : this.heightControl.value,
      weight : this.weightControl.value,
      healthHistory : this.healthHistoryControl.value
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
