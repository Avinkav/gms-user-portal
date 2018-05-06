import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './services/todo.service';
import { MessagesComponent } from './messages/messages.component';

import { MatSidenavModule, MatButtonModule, MatSnackBarModule, MatListModule,
  MatCardModule, MatInputModule, MatToolbarModule, MatDividerModule, MatChipsModule, MatIconModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    MessagesComponent,
    DashboardComponent,
    NavmenuComponent,
    ProfileComponent,
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
