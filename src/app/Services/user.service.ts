import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private BasetUrl = 'https://localhost:5001/api';

  constructor(private fb: FormBuilder, private http: HttpClient) {

   }

   formModel = this.fb.group({
     FirstName: ['', Validators.required],
     LastName: ['', Validators.required],
     Email: ['', Validators.email],
     Password: ['', [Validators.required, Validators.minLength(8)]],
   });


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
    return this.http.post(this.BasetUrl + '/user/authenticate', formData);
   }
}
