import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService, PatientUpdateDialogInterface } from '../service/patient.service';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { PatientupdateComponent } from '../patientupdate/patientupdate.component';
import { PatienteditComponent } from '../patientedit/patientedit.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientDetails = {
    firstName: '',
    lastName: ''
  }

  constructor(private patientService: PatientService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'height', 'weight', 'age', 'barangay', 'healthstatus', 'parentsName', 'actionsColumn'];
  dataSource: MatTableDataSource<any>;
  datatoPass : PatientUpdateDialogInterface;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  patientList;

  ngOnInit() {
    this.getPatientList();


  }
  getPatientList = () => {
    this.patientService.getPatientList().subscribe(res => {
    this.patientList = res;
      this.loadData();
      console.log(this.patientList)
    }
    );


  }

  loadData() {
    this.dataSource = new MatTableDataSource(this.patientList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  openUpdateDialog(fn,ln,w,h,hs,key){
    this.dialog.open(PatientupdateComponent, {
      data: {
        firstName: fn,
        lastName : ln,
        weight : w,
        height : h,
        healthstatus : hs,
        key : key
      }
    });
 
  }

  openEditDialog(fn,ln,a,pn,key){
    this.dialog.open(PatienteditComponent,{
      data : {
        firstName : fn,
        lastName : ln,
        age : a,
        parentsName : pn,
        key : key
      }
    })
  }

}


export class PatientDataSource extends DataSource<any>{

  constructor(private patientService: PatientService) {
    super()
  }

  connect() {
    return this.patientService.getPatientList();

  }

  disconnect() {

  }


}