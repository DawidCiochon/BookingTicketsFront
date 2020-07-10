import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private accessPointUrl = 'https://localhost:5001/api/user';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json, charset = utf-8'});
   }

   // tslint:disable-next-line: typedef
   public get(){
     return this.http.get(this.accessPointUrl, {headers: this.headers});


    }
}
