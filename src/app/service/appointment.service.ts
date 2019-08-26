import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private fireBase : AngularFirestore) { }

  getAppointments(){
    return this.fireBase.collection("Appointments").valueChanges();
  }
}
