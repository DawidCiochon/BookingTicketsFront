import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {  NavbarComponent} from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { CinemaComponent } from './cinema/cinema.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'movie', component: MovieComponent},
  { path: 'cinema', component: CinemaComponent},
  /*{ path: '', redirectTo: 'cinema', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
