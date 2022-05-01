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
    let courses = [2, 4];
  }

  displayItems() {
    alert('Mouse Clicked on the button');
  }

}
