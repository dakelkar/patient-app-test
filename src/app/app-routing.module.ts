import { NgModule } from '@angular/core';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

      
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },	
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: PatientDetailComponent},
  { path: 'patients', component: PatientComponent}
   
  ];

@NgModule({

  exports: [ RouterModule ],

  imports: [ RouterModule.forRoot(routes) ], 
  
  })

export class AppRoutingModule { }