import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { LessonsComponent } from './lessons/lessons.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
  { path: 'todo', component: ToDoComponent, data: {state: 'todo'} },
  { path: 'dashboard', component: DashboardComponent, data: {state: 'dash'} },
  { path: 'instruments', component: InstrumentsComponent, data: {state: 'intruments'} },
  { path: 'lessons', component: LessonsComponent , data: {state: 'lessons'} },
  { path: 'profile', component: ProfileComponent, data: {state: 'profile'} },
  { path: 'billing', component: BillingComponent, data: {state: 'billing'} },
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

