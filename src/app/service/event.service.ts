import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firebase : AngularFirestore) { }

  getEventsList(){
    return this.firebase.collection("Events").valueChanges();
  }

  addEvent(eventData : EventsInterface){
    this.firebase.collection("Events").add(eventData).then(full =>{
      Swal.fire("Events Add","Events has been added",'success');
    }, rejected =>{
      Swal.fire("Events Add","Event add failed !" + rejected,'error');
    })
  }

  
}

export interface EventsInterface{
  title : string;
  details : string;
  image : string;
  type : string;
  time : string;
}
