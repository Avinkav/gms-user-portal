import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  AppComponent
} from './app.component';
import {
  ToDoComponent
} from './to-do/to-do.component';
import {
  TodoService
} from './services/todo.service';
import {
  MessagesComponent
} from './messages/messages.component';

import {
  MatSidenavModule,
  MatButtonModule,
  MatSnackBarModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatDividerModule,
  MatChipsModule,
  MatIconModule,
  MatExpansionModule,
  MatStepperModule,
  MatBadgeModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  AppRoutingModule
} from './/app-routing.module';
import {
  RouterModule
} from '@angular/router';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  NavmenuComponent
} from './navmenu/navmenu.component';
import {
  FullCalendarModule
} from 'ng-fullcalendar';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  InstrumentsComponent
} from './instruments/instruments.component';
import {
  LessonsComponent
} from './lessons/lessons.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { BillingComponent } from './billing/billing.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    MessagesComponent,
    DashboardComponent,
    NavmenuComponent,
    ProfileComponent,
    InstrumentsComponent,
    LessonsComponent,
    MainToolbarComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    FullCalendarModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatStepperModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
