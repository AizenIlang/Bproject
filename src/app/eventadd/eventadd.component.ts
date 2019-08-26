import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { EventService, EventsInterface } from '../service/event.service';
import { UploadComponent } from '../upload/upload.component';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-eventadd',
  templateUrl: './eventadd.component.html',
  styleUrls: ['./eventadd.component.css']
})
export class EventaddComponent implements OnInit {

  eventData;
  theTime;
  constructor(@Inject(MAT_DIALOG_DATA) public data: EventsInterface,private eventService : EventService,
  public dialog : MatDialog, public uploadService : UploadService) { }

  form = new FormGroup({
    titleControl : new FormControl('',[Validators.required]),
    detailsControl : new FormControl('',[Validators.required]),
    imageControl : new FormControl('',[Validators.required]),
    typeControl : new FormControl('',[Validators.required]),
    timeControl: new FormControl('',[Validators.required])
  });

  get titleControl(){
    return this.form.get('titleControl');
  }

  get detailsControl(){
    return this.form.get('detailsControl');
  }

  get imageControl(){
    return this.form.get('imageControl');
  }

  get typeControl(){
    return this.form.get('typeControl');
  }

  get timeControl(){
    return this.form.get('timeControl');
  }


  ngOnInit() {

  }

  onAdd(){
    this.changeData();
    this.eventService.addEvent(this.eventData);
  }

  changeData(){
    console.log(this.timeControl.value + "This is the Time");
    this.eventData = {
      title : this.titleControl.value,
      details : this.detailsControl.value,
      image : this.imageControl.value,
      type : this.typeControl.value,
      time : this.timeControl.value
    }
    
  }

  openUploadComponent(){
    this.dialog.open(UploadComponent);
  }

}
