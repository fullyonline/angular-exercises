import {Component, OnInit} from '@angular/core';
import {Animal, AnimalType} from "../../models/animal";
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
  }

  animals = this.animalService.getAllAnimals();
}
