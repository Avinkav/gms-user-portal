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
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTreeModule,
  MatTooltipModule
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
import { BookLessonComponent } from './book-lesson/book-lesson.component';
import { BillComponent } from './bill/bill.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import {Ng2FabSpeedDialModule} from 'ng2-fab-speed-dial';
import {SmdFabSpeedDialModule} from 'angular-speed-dial';
import { MessagingComponent } from './messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavmenuComponent,
    ProfileComponent,
    InstrumentsComponent,
    LessonsComponent,
    MainToolbarComponent,
    BillingComponent,
    BookLessonComponent,
    BillComponent,
    NotificationBarComponent,
    MessagingComponent
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
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatStepperModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatTooltipModule,
    Ng2FabSpeedDialModule,
    SmdFabSpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent, NotificationBarComponent]
})
export class AppModule {}
