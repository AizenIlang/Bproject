import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MobilenotificationService {

  constructor(private firestore : AngularFirestore) {


   }

  addMobileNotification(theData : MobileNotificationInterface, id : any){

      
      return this.firestore.collection("MobileNotification").doc(id).set(theData);
  
   
  }
}

export interface MobileNotificationInterface{
  title : string;
  date : string;
  image : string;
  type : string;
  details : string;

}
