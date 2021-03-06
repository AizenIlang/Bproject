import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import * as d3 from "d3";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  bmi : Array<number> = [];

  constructor(private firestore : AngularFirestore) { }

  getPatientList(){    
    return this.firestore.collection('Patients').valueChanges();
  }

  getPatientListWithParent(){
    
   
     return this.firestore.collection('Patients').valueChanges();
    
   
  }

  getTotalPatient(){
    
    return this.firestore.collection('Patients').get();
  }


  getPatientListPerBarangay(){
    //Query Function where the component of filter will use
  }

  getAge(dateOfBirth : any): number{
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
      age --;
    }

    return age;
  }

  updatePatient(location ,PatientUpdate : PatientUpdate){
    return this.firestore.collection("Patients").doc(location).update(PatientUpdate).then(full =>{
      Swal.fire("File Patient Updated","File for patient is updated","success");
    },rejcted =>{
      Swal.fire("File Patient Update Failed !","File was not updated :" +rejcted,'error');
    })
  }

  editPatient(location, PatientEdit : PatientEdit){
    return this.firestore.collection("Patients").doc(location).update(PatientEdit).then(full =>{
      Swal.fire("File Patient Edited","File for Patient is Edited","success");
    }, rejected =>{
      Swal.fire("File Patient Edit Failed !","File was not edited :" +rejected,'error');
    })
  }

  getHealthHistory(weight : number, height : number){
    let BMI : number;

    BMI = weight/((height/100)*2)

    if(BMI < 18.5){
      return "Under Weight";
    }

    if(BMI > 18.6){
      if(BMI >= 25){
        return "Over Weight";
      }

      return "Normal";

    }
    
  }

  getAlllMalnutrition(){
    this.bmi = new Array<number>();
    this.bmi.push(0);
    this.bmi.push(1);
    this.bmi.push(4);
    this.bmi.push(9);
    this.bmi.push(16);
    this.bmi.push(25);
    this.bmi.push(36);
    //RoundofMultiNormal values
  
    
    return  Float64Array.from({length: 100}, d3.randomNormal());
  }

  getAllAgeMalnutrition(){
    this.bmi = new Array<number>();
    this.bmi.push(0);
    this.bmi.push(1);
    this.bmi.push(4);
    this.bmi.push(9);
    this.bmi.push(13);
    this.bmi.push(15);
    this.bmi.push(36);
    let allAge = this.getAge("AllAge");
    //RoundofMultiNormal values
    this.getPatientListWithParent();
    return Float64Array.from({length: 60},d3.randomNormal())
  }


}

export interface PatientUpdate{
  healthStatus : string;
  healthHistory: string;
  weight : number;
  height : number;
}

export interface PatientUpdateDialogInterface{
  firstName : string;
  lastName : string;
  height : number;
  weight : number;
  healthStatus : string;
  key : string;
}

export interface PatientEdit {
  firstName : string;
  lastName : string;
  age : number;
  parentsName : string;
  key : string;
}
