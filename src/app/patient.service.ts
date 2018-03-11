import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { MessageService } from './message.service';

@Injectable()
export class PatientService {

  constructor(private messageService: MessageService) { }

getPatient(): Observable<Patient[]> {
	// 	Todo: send the messsage_after_fetching patients
	this.messageService.add('PatientService: fetched patients');
    return of(PATIENTS);
  }
}