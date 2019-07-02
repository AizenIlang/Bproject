import { Component, OnInit , ViewChild} from '@angular/core';
import { EventService } from '../service/event.service';
import { MatTableDataSource, MatSort, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { EventaddComponent } from '../eventadd/eventadd.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {



  constructor(private eventService : EventService, public dialog : MatDialog) { }

  displayedColumns: string[] = ['title', 'details', 'image', 'type','time', 'actionsColumn'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  eventList;

  ngOnInit() {
    this.getPatientList();
  }

  getPatientList = () => {
    this.eventService.getEventsList().subscribe(res => {
    this.eventList = res;
      this.loadData();
      console.log(this.eventList);
    }
    );


  }

  loadData() {
    this.dataSource = new MatTableDataSource(this.eventList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddEvent(){
    this.dialog.open(EventaddComponent);
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

}
