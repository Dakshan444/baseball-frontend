import { NgModule } from '@angular/core';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './users/homepage/homepage.component';
import {HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './admin/displayuser/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { VenueComponent } from './admin/venue/venue.component';
import { EditVenueComponent } from './admin/venue/edit-venue/edit-venue.component';
import { ViewVenueComponent } from './admin/venue/view-venue/view-venue.component';
import { DeleteVenueComponent } from './admin/venue/delete-venue/delete-venue.component';
import { RefreeComponent } from './admin/refree/refree.component';
import { AddRefreeComponent } from './admin/refree/add-refree/add-refree.component';
import { EditRefreeComponent } from './admin/refree/edit-refree/edit-refree.component';
import { AddVenueComponent } from './admin/venue/add-venue/add-venue.component';
import { DeleteRefreeComponent } from './admin/refree/delete-refree/delete-refree.component';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { EditTeamComponent } from './admin/teams/edit-team/edit-team.component';
import { AddTeamComponent } from './admin/teams/add-team/add-team.component';
import { DeleteTeamComponent } from './admin/teams/delete-team/delete-team.component';
import { DisplayuserComponent } from './admin/displayuser/displayuser.component';
import { ViewEventComponent } from './users/view-event/view-event.component';
import { BookeventComponent } from './users/bookevent/bookevent.component';
import { ViewbookedEventComponent } from './users/viewbooked-event/viewbooked-event.component';
import { EditBookingComponent } from './users/bookevent/edit-booking/edit-booking.component';
import { AuthComponent } from './auth/auth.component';
import { DeleteUserComponent } from './admin/displayuser/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    DisplayuserComponent,
    EditUserComponent,
    AdminComponent,
    VenueComponent,
    EditVenueComponent,
    ViewVenueComponent,
    DeleteVenueComponent,
    RefreeComponent,
    AddRefreeComponent,
    EditRefreeComponent,
    AddVenueComponent,
    DeleteRefreeComponent,
    UsersComponent,
    TeamsComponent,
    EditTeamComponent,
    AddTeamComponent,
    DeleteTeamComponent,
    ViewEventComponent,
    BookeventComponent,
    ViewbookedEventComponent,
    EditBookingComponent,
    AuthComponent,
    DeleteUserComponent
  
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
