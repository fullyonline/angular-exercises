import { Pipe, PipeTransform } from '@angular/core';
import {Animal, AnimalType} from "../models/animal";

@Pipe({
  name: 'animalFilterPipe'
})
export class AnimalFilterPipePipe implements PipeTransform {

  transform(value: Animal[], animalType: AnimalType): unknown {
    return value.filter((animal) => animal.type === animalType);
  }

}
