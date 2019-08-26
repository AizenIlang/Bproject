import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { MobilenotificationService, MobileNotificationInterface } from './mobilenotification.service';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  notif : any;
  constructor(private firebase : AngularFirestore, private mobileNotifService : MobilenotificationService,
    private uploadService : UploadService) { }

  getEventsList(){
    return this.firebase.collection("Events").valueChanges();
  }

  addEvent(eventData : EventsInterface){
    let thekey : any;
    thekey = this.firebase.createId();
    console.log(thekey);
    this.firebase.collection("Events").doc(thekey).set(eventData).then(full =>{
      Swal.fire("Events Add","Events has been added",'success');
      this.createNotif(eventData);
      this.uploadService.mobileNotificationKey = thekey;
      this.mobileNotifService.addMobileNotification(this.notif,thekey).then(full =>{
        Swal.fire("The Event has been added to the Mobile Notifications");
      })
    }, rejected =>{
      Swal.fire("Events Add","Event add failed !" + rejected,'error');
    })

  
  }

  createNotif(data){
    this.notif = {
      type: "Event",
      title : data.title,
      image : data.image,
      data : data.details,
      date : data.time
    }    
  }

  deleteEvent(id){
    this.firebase.firestore.collection("Events").doc(id).delete();
    this.firebase.firestore.collection("MobileNotification").doc(id).delete();
  }

  
}

export interface EventsInterface{
  title : string;
  details : string;
  image : string;
  type : string;
  time : string;
}

export class EventNotif implements MobileNotificationInterface{
  title: string;  
  date: string;
  image: string;
  type: string;
  details: string;

  constructor(){

  }


}
