import {Component, OnInit} from '@angular/core';
import {Animal, AnimalType} from "../../models/animal";

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animals: Animal[] = [{
    type: AnimalType.MAMMAL,
    name: 'Mammal1'
  },{
    type: AnimalType.MAMMAL,
    name: 'Mammal2'
  },{
    type: AnimalType.BIRD,
    name: 'Birb1'
  },{
    type: AnimalType.BIRD,
    name: 'Birb2'
  },{
    type: AnimalType.REPTILE,
    name: 'Reptile1'
  },{
    type: AnimalType.REPTILE,
    name: 'Reptile2'
  },
  ]
}
