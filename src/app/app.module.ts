import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientService } from './patient.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [
      PatientService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
