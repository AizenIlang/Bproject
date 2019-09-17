import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from '../service/calendar.service';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { CalendaraddComponent } from '../calendaradd/calendaradd.component';
import { UsersService } from '../service/users.service';
import Swal from 'sweetalert2';
import { CalendareditComponent } from '../calendaredit/calendaredit.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService : CalendarService, public dialog : MatDialog, private userService : UsersService) { }
  displayedColumns: string[] = ['details', 'doctor', 'barangay','slot','datestart', 'time', 'actionsColumn'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getCalendar();
  }

  barangayList;

  getCalendar = () => {
    this.calendarService.getCalendarBarangay(this.userService.barangay).subscribe(res => {
    this.barangayList = res;
      this.loadData();
      console.log(this.barangayList);
    }
    );


  }

  editCalendar(theKey,dt,dr,slt,st,datetime){
    this.dialog.open(CalendareditComponent,{
      data : {
        'details' : dt,
        'datestart' : st,
        'key' : theKey,
        'slot' : slt,
        'time' : datetime,
        'doctor' : dr
        
      }
    })
  }

  onAdd(){
    
  }

  loadData() {
    this.dataSource = new MatTableDataSource(this.barangayList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  openAddCalendar(){
    this.dialog.open(CalendaraddComponent);
  }

  deleteCalendar(thekey){
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.calendarService.removeEvent(thekey);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
  }
}
