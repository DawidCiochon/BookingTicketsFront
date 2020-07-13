import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMovie } from '../models/Imovie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private url = 'https://localhost:5001/api/';
  movies: IMovie[];

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url + 'movie');
  }
}
