import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from '../service/calendar.service';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { CalendaraddComponent } from '../calendaradd/calendaradd.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService : CalendarService, public dialog : MatDialog, private userService : UsersService) { }
  displayedColumns: string[] = ['details', 'doctor', 'barangay','slot', 'time', 'actionsColumn'];
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

  
}
