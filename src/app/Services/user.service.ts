import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';

import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private BasetUrl = 'https://localhost:5001/api';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

   formModel = this.fb.group({
     FirstName: ['', Validators.required],
     LastName: ['', Validators.required],
     Email: ['', Validators.email],
     Password: ['', [Validators.required, Validators.minLength(8)]],
   });

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
   }

   register() {
     let body = {
       FirstName: this.formModel.value.FirstName,
       LastName: this.formModel.value.LastName,
       Email: this.formModel.value.Email,
       Password: this.formModel.value.Password,
     };
     return this.http.post(this.BasetUrl + '/user', body);
   }

   login(formData){
    return this.http.post(this.BasetUrl + '/user/authenticate', formData)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return user;
      }));
   }


    logout() {
      localStorage.removeItem('currentUser');
      /*this.router.navigate(['/cinema']);*/
      this.currentUserSubject.next(null);
    }
   


   updateUser(user: User): Observable<User>{
     return this.http.put(this.BasetUrl + '/user' + user.id, user)
        .map((res: Response) => {
            const data = res.json();
            console.log('updateUser status: ' + data.status);
            return data.user;
        })
        .catch(this.handleError);
   }

   getUser(id: string) : Observable<User> {
    return this.http.get<User>(this.BasetUrl + '/user' + id)
               .pipe(catchError(this.handleError));
   }

   insertUser(user: User) : Observable<User> {
    return this.http.post(this.BasetUrl + '/user', user)
        .map((res: Response) => {
          const data = res.json();
          console.log('insertCustomer status: ' + data.status);
          return data.user;
        })
          .catch(this.handleError)
   }

   private handleError(error: any) {
    console.error('server error:', error); 
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch(err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'ASP.NET Core server error');
}

}
