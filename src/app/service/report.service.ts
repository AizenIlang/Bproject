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
}
