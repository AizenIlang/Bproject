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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientComponent,
    PatientupdateComponent,
    PatienteditComponent,
    EventComponent,
    EventaddComponent
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
        component : LoginComponent
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
    OwlDateTimeModule,
    OwlNativeDateTimeModule
    
    
    
  ],
  entryComponents: [
    PatientupdateComponent,
    PatienteditComponent,
    EventaddComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
