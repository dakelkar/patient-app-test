import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PATIENTS } from '../mock-patients';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	
	patients = PATIENTS; // this line was a problem. patient = PATIENTS did 
						//	not work. Not sure what patients is referring to


  constructor() { }

  ngOnInit() {
  }

}
