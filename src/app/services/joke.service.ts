import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JokeResponse} from "../models/joke";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<JokeResponse>{
    return this.http.get<JokeResponse>('http://api.icndb.com/jokes/random');
  }

}
