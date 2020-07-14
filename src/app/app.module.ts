import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MovieServiceService} from './Services/movie-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    NavbarComponent,
    MovieComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, /*.forRoot([], {useHash: true})*/
    MatDatepickerModule,
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
