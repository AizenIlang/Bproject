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

  form = new FormGroup({    
    weightControl : new FormControl(this.data.weight,[Validators.required]),
    heightControl : new FormControl(this.data.height,[Validators.required]),
    healthstatusControl : new FormControl(this.data.healthstatus,[Validators.required])
  });

  get weightControl(){
    return this.form.get('weightControl');
  }

  get heightControl(){
    return this.form.get('heightControl');
  }

  get healthstatusControl(){
    return this.form.get('healthstatusControl');
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
    
    this.updateData = {
      healthstatus : this.healthstatusControl.value,
      height : this.heightControl.value,
      weight : this.weightControl.value
    }
    // console.log("Updated the Health Status :" + this.updateData + " " + this.weightControl.value);
    // this.updateData.healthstatus = this.healthstatusControl.value;
    // this.updateData.height = this.heightControl.value;
    // this.updateData.weight = this.weightControl.value;
    
  }

}
