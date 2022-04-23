import { Component, OnInit } from '@angular/core';
import {JokeResponse} from "../../models/joke";
import {JokeService} from "../../services/joke.service";

@Component({
  selector: 'app-joke-service',
  templateUrl: './joke-service.component.html',
  styleUrls: ['./joke-service.component.css']
})
export class JokeServiceComponent implements OnInit {

  joke?: JokeResponse;

  constructor(private jokeService: JokeService) { }

  getRandomJoke(){
    this.jokeService.getRandomJoke().subscribe((data: JokeResponse) =>
      this.joke = {...data}
    );
  }

  ngOnInit(): void {
    this.getRandomJoke();
  }

}
