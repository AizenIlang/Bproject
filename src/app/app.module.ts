import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { UsersService } from './service/users.service';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientupdateComponent } from './patientupdate/patientupdate.component';
import { PatienteditComponent } from './patientedit/patientedit.component';
import { EventComponent } from './event/event.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UploadComponent } from './upload/upload.component';
import { CalendaraddComponent } from './calendaradd/calendaradd.component';
import { ReportsComponent } from './reports/reports.component';
import { LatestuserComponent } from './dashboard/latestuser/latestuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalpatientsComponent } from './dashboard/totalpatients/totalpatients.component';
import { TotalusersComponent } from './dashboard/totalusers/totalusers.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportageComponent } from './reportage/reportage.component';
import { ReportbyageComponent } from './reportbyage/reportbyage.component';
import { AppointmentupdateComponent } from './appointmentupdate/appointmentupdate.component';
import { ReportallbarangayComponent } from './reportallbarangay/reportallbarangay.component';
import { ReportinterpretationComponent } from './reportinterpretation/reportinterpretation.component';
import { CalendareditComponent } from './calendaredit/calendaredit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientComponent,
    PatientupdateComponent,
    PatienteditComponent,
    EventComponent,
    EventaddComponent,
    AppointmentComponent,
    CalendarComponent,
    UploadComponent,
    CalendaraddComponent,
    ReportsComponent,
    LatestuserComponent,
    DashboardComponent,
    TotalpatientsComponent,
    TotalusersComponent,
    AnalyticsComponent,
    ReportageComponent,
    ReportbyageComponent,
    AppointmentupdateComponent,
    ReportallbarangayComponent,
    ReportinterpretationComponent,
    CalendareditComponent
  ],
  imports: [
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
    RouterModule.forChild([
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },

      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'lobby',
        component : AppComponent
      },
      {
        path : 'patient',
        component : PatientComponent
      },{
        path : 'event',
        component : EventComponent
      },{
        path : 'calendar',
        component : CalendarComponent
      },{
        path : 'appointment',
        component : AppointmentComponent
      },{
        path : 'report',
        component : ReportsComponent
      },{
        path : 'analytics',
        component : AnalyticsComponent
      }
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    OwlDateTimeModule,
    OwlNativeDateTimeModule
    
    
    
  ],
  entryComponents: [
    PatientupdateComponent,
    PatienteditComponent,
    EventaddComponent,
    UploadComponent,
    CalendaraddComponent,
    AppointmentupdateComponent,
    CalendareditComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
