import { Injectable } from '@angular/core';
import {Animal, AnimalType} from "../models/animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  private animals: Animal[] = [{
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
  ];

  getAllAnimals(): Animal[]{
    return this.animals;
  }
}
