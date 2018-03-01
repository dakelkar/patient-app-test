import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PATIENTS } from '../mock-patients';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	
	patients = PATIENTS;

	selectedPatient: Patient;


  constructor() { }

  ngOnInit() {
  }

  	onSelect(patient: Patient): void {
		this.selectedPatient = patient;
	}
}
