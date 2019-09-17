import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private fireBase : AngularFirestore) { }

  getAppointments(){
    return this.fireBase.collection("Appointments").valueChanges();
  }

  updateAppointment(key,data){
    console.log("The key to update appointment is : " + key);
    console.log(data);
    this.fireBase.collection("Appointments").doc(key).update(data).then(full =>{
      Swal.fire("Appointment Updated","File for patient is updated","success");
    },rejcted =>{
      Swal.fire("Appointment Update Failed !","File was not updated :" +rejcted,'error');
    });
  }
}
