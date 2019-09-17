import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AppointmentService } from '../service/appointment.service';
import { PatientupdateComponent } from '../patientupdate/patientupdate.component';
import { AppointmentupdateComponent } from '../appointmentupdate/appointmentupdate.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService : AppointmentService, public dialog : MatDialog) { }
  displayedColumns: string[] = ['referenceCode', 'guardianName', 'childName','operatedBy', 'eventName','barangay', 'appointDate','height','weight','actionsColumn'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getAppointments();
  }

  selected;

  appointmentList;

  getAppointments = () => {
    this.appointmentService.getAppointments().subscribe(res => {
    this.appointmentList = res;
      this.loadData();
      console.log(this.appointmentList);
    }
    );


  }

  loadData() {
    this.dataSource = new MatTableDataSource(this.appointmentList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  openUpdateDialog(key,keyappoint){
    this.dialog.open(AppointmentupdateComponent, {
      data: {     
        key : key,
        keyappoint : keyappoint
      }
    });
 
  }

  

}
