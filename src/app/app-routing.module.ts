import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { LessonsComponent } from './lessons/lessons.component';
import { BillingComponent } from './billing/billing.component';
import { MessagingComponent } from './messaging/messaging.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: {state: 'dash'} },
  { path: 'messaging', component: MessagingComponent, data: {state: 'messages'} },
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

