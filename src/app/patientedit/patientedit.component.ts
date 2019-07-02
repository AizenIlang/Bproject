import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PatientEdit, PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patientedit',
  templateUrl: './patientedit.component.html',
  styleUrls: ['./patientedit.component.css']
})
export class PatienteditComponent implements OnInit {

  editData : any;

  form = new FormGroup({
    firstNameControl : new FormControl(this.data.firstName,[Validators.required]),
    lastNameControl : new FormControl(this.data.lastName,[Validators.required]),
    ageControl : new FormControl(this.data.age,[Validators.required]),
    parentsNameControl : new FormControl(this.data.parentsName,[Validators.required])
  });

  get firstNameControl(){
    return this.form.get('firstNameControl');
  }

  get lastNameControl(){
    return this.form.get('lastNameControl');
  }

  get ageControl(){
    return this.form.get('ageControl');
  }

  get parentsNameControl(){
    return this.form.get('parentsNameControl');
}

  constructor(@Inject(MAT_DIALOG_DATA) public data: PatientEdit, private patientService : PatientService) { }

  ngOnInit() {
  }

  onEdit(){
    this.changeData();
    this.patientService.editPatient(this.data.key,this.editData);
  }

  changeData(){
    this.editData = {
      firstName : this.firstNameControl.value,
      lastName : this.lastNameControl.value,
      age : this.ageControl.value,
      parentsName : this.parentsNameControl.value
    }
  }

}
