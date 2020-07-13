import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {  NavbarComponent} from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'movie', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
