import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  patients: Patient[] = [];
 
  constructor(private patientService: PatientService) { }
 
  ngOnInit() {
  	this.getPatients();
  	console.log("getting patients");
  }
 
  getPatients(): void {
    console.log("really get patients");
    console.log("done!!");
  	this.patientService.getPatients()
    .subscribe(patients => {this.patients = patients.slice(1, 5);
    console.log(patients)
    });
  }

 }