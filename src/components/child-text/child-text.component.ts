import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-text',
  templateUrl: './child-text.component.html',
  styleUrls: ['./child-text.component.css']
})
export class ChildTextComponent implements OnInit {

  @Output() onInputSubmit = new EventEmitter<string>();

  userInput = '';

  submitInput(){
    this.onInputSubmit.emit(this.userInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
