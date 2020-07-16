import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private url = 'https://localhost:5001/api/movie';

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url);
    /*return [
      {
        MovieId: 1,
        Title: 'Batman',
        Description: 'dddwwwwwww',
        Picture: 'https://cdn.pixabay.com/photo/2020/03/19/07/28/batman-4946610_960_720.jpg',
        Duration: 120,
      },
      {
        MovieId: 2,
        Title: 'Superman',
        Description: 'ssssssssssssss',
        Picture: 'https://cdn.pixabay.com/photo/2017/08/07/09/50/wall-2602082_960_720.jpg',
        Duration: 150,
      },
    ];*/
  }
}
