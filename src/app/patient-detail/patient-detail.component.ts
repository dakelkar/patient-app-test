import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})



export class PatientDetailComponent implements OnInit {
	@Input () patient: Patient;
	
  constructor(
    private route: ActivatedRoute,
    private heroService: PatientService,
    private location: Location
) { }

  ngOnInit() {
  }

}
