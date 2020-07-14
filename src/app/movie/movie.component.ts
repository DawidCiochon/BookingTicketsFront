import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { IMovie } from '../models/Imovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],

})
export class MovieComponent implements OnInit {
  movies: IMovie[];
  constructor(private movieService: MovieServiceService) { }


  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(data => { this.movies = data; });
  }


}
