import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { UploadService } from './upload.service';
import { MobilenotificationService } from './mobilenotification.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private firebase : AngularFirestore, private uploadService : UploadService,
    private mobileNotifService : MobilenotificationService) { }

  notif;
  getCalendarBarangay(Barangay){
    return this.firebase.collection("Calendar").valueChanges();
  }

  addEvent(calendarData : CalendarInterface){
    let thekey : any;
    thekey = this.firebase.createId();
    console.log(thekey);
    console.log(calendarData.barangay);
    this.firebase.collection("Calendar").doc(thekey).set(calendarData).then(full =>{
      Swal.fire("Calendar Add","Calendar has been added",'success');
      this.createNotif(calendarData);
      this.uploadService.mobileNotificationKey = thekey;
      this.mobileNotifService.addMobileNotification(this.notif,thekey).then(full =>{
        Swal.fire("The Event has been added to the Mobile Notifications");
      })
    }, rejected =>{
      Swal.fire("Calendar Add","Event add failed !" + rejected,'error');
    })

  
  }

  createNotif(data){
    this.notif = {
      type: "Calendar",
      title : data.title,
      image : '',      
      data : data.details,
      date : data.time
    }    
  }

}

export interface CalendarInterface{
  title : string;
  details : string;
  date : string;
  slot : number;
  barangay : string;
  doctor : string;

}