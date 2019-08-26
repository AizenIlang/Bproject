import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private storage: AngularFireStorage,
  private db: AngularFirestore, private uploadService : UploadService) { }

  task : AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  photos = [];
  isHovering: boolean;

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    //file obeject just get the first one
    // const file = event.item(0);

    Array.from(event).forEach(file => {
      if (file.type.split('/')[0] !== 'image') {
        Swal.fire("Not a supported Image");
        return;
      }
    });

    Array.from(event).forEach(file => {
      const path = `Events/${new Date().getTime()}_${file.name}`;

      this.task = this.storage.upload(path, file);
  
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges();

      this.task.then(t => {
        const ref = this.storage.ref(path);
        const DL = ref.getDownloadURL().subscribe(url => {
          const Url = url;
          this.downloadURL = url;
          this.photos.push(url);
          console.log(Url);
        })
        var key = this.db.createId();
        let tempImage = new TheImage();
        tempImage.image = path;
        tempImage.key = key;
        this.db.collection('MobileNotification').doc(this.uploadService.mobileNotificationKey).update({image : path});
      });

    });
  



  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}

export class TheImage{
  image : any;
  key : string;
}
