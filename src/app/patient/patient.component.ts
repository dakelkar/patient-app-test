import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	
  patients: Patient[];

	
  constructor(private PatientService: PatientService) { }


  ngOnInit() {
      this.getPatient();
  }

  getPatient(): void {
      this.PatientService.getPatient()
      .subscribe(patient => this.patients = patient);
  }

}
