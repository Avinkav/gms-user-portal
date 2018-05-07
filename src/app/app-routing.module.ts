import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { LessonsComponent } from './lessons/lessons.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'instruments', component: InstrumentsComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'billing', component: BillingComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

