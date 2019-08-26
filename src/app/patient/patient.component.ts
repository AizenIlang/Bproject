import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService, PatientUpdateDialogInterface } from '../service/patient.service';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { PatientupdateComponent } from '../patientupdate/patientupdate.component';
import { PatienteditComponent } from '../patientedit/patientedit.component';
import {SelectionModel} from '@angular/cdk/collections';
import { UsersService } from '../service/users.service';

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

  selected;

  constructor(private patientService: PatientService, public dialog: MatDialog, private userService : UsersService) { }

  displayedColumns: string[] = ['select','firstName','middleName', 'lastName', 'height', 'weight', 'birthDate', 'barangay', 'healthStatus', 'parentsName','district','gender','healthHistory','siblings', 'actionsColumn'];
  dataSource: MatTableDataSource<any>;
  datatoPass : PatientUpdateDialogInterface;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  patientList;

  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    
  }

  ngOnInit() {
    this.loadData();
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