import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-text',
  templateUrl: './parent-text.component.html',
  styleUrls: ['./parent-text.component.css']
})
export class ParentTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = 'Sample Text';
  updateText(text: string){
    this.text = text;
  }

}
