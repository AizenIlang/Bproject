import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-totalpatients',
  templateUrl: './totalpatients.component.html',
  styleUrls: ['./totalpatients.component.css']
})
export class TotalpatientsComponent implements OnInit {

  constructor(private firebase : AngularFirestore, private patientService : PatientService) { }
  theSize = 0;
  ngOnInit() {
    this.getTotalPatients();
  }

  getTotalPatients = () => {
   
    this.patientService.getTotalPatient().subscribe(res => {
      this.theSize = res.size;
    
    
     }
     );
 
     
   }

}
