//Directives in Angular//

- Directives are the basic building blocks of elements which can change the apperance and behaviour of the elements.
- Directives are the instructions placed in the DOM, where we can add the DOM element or remove DOM element.

// Types of directives//

- There are 3 different kinds of directives

1) Component Directive
    - These are used in the main class
    - They contains the details how component should be processed

2) Structual Directives
    - These are used to mainpulate and change the structure
        - These are preccded with * sign
        - eg ngIF, ngFor

3) Attribure Directives
    - These are used to change the look and behaviour of the DOM elements
        - These are also called style directive
            - eg ngClass, ngStyle

NgSwitch -
    it actually comprised of two directives, one is structural directive and another is attriburte directive,
    
NgFor- Example

<ul>
  <li *ngFor="let course of courses">
    {{ course.name}}
  </li>
</ul>

<!-- To get the exported values such as index lets do it as below -->
<!-- To find the all exported values visit the link below -->
<!-- visit angular.io and search for NgForOF -->

<ul>
  <li *ngFor="let course of courses; index as i">
    {{i}} - {{ course.name}}
  </li>
</ul>

<!-- To display a style or something for even rows -->

<ul>
  <li *ngFor="let course of courses; even as isEven">
    {{ course.name}}
    <span *ngIf="isEven">(it's Even Row)- Styles needs to be added</span>
  </li>
</ul>

<hr>

<h3 style="text-align:center">Ng For Directive in change detection</h3>

<button (click)="onAdd()">Add</button>
<ul>
  <li *ngFor="let subject of subjects;">
    {{ subject.name}}
    <button (click)="onRemove(subject)">Remove</button>
  </li>
</ul>
