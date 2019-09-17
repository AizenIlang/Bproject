import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private fireStore : AngularFirestore) { }

  getOverweight(){
    return this.fireStore.collection('Patients',ref => ref.where('healthStatus', '==', 'Over Weight')).valueChanges();
  }

  getUnderweight(){
    return this.fireStore.collection('Patients',ref => ref.where('healthStatus','==','Under Weight')).valueChanges();
  }

  getAppointmentBarangay(barangay){
    if(barangay == "All"){
      return this.fireStore.collection('Appointments').valueChanges();
    }
    return this.fireStore.collection('Appointments',ref => ref.where('barangay', '==', barangay)).valueChanges();
  }

  getAppointmentAllOW(){
    return this.fireStore.collection('Appointments', ref => ref.where('healthStatus', '==', 'Over Weight')).valueChanges();
  }

  getAppointmentAllUW(){
    return this.fireStore.collection('Appointments', ref => ref.where('healthStatus', '==', 'Under Weight')).valueChanges();
  }

  getAppointmentAllNorm(){
    return this.fireStore.collection('Appointments', ref => ref.where('healthStatus', '==', 'Normal')).valueChanges();
  }

  // getUnderweightBarangay(barangay){
  //   return this.fireStore.collection('Appointments', ref => ref.where('barangay','==', barangay)).valueChanges();
  // }

  
}
