import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import {MovieServiceService} from './Services/movie-service.service';
import {UserService} from './Services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SeatsComponent } from './seats/seats.component';
import { HomeComponent } from './home/home.component';
import { CinemaComponent } from './cinema/cinema.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { Interceptor } from './_helpers/interceptor';
import { platformBrowser } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    NavbarComponent,
    MovieComponent,
    DatePickerComponent,
    SeatsComponent,
    HomeComponent,
    CinemaComponent,
    UpdateAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, /*.forRoot([], {useHash: true})*/
    MatDatepickerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [MovieServiceService, UserService,
  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [BrowserModule]
})
export class AppModule { }
