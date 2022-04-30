import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() {
    let itemFlag: boolean = false;

  }


  ngOnInit(): void {
  }

  displayItems() {
    alert('Mouse Clicked on the button');
  }

}
