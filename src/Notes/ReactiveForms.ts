// Reactive forms

Step-1: Creating/Adding controls related to Reactive forms
let us consider input fiels username and password as an example

// Outline Template
<div class="login-box">
    <form>
        <div class="form-group">
            <label for="login">Login</label>
            <input type="text" id="login" class="form-control" placeholder="Enter Login details">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" placeholder="Enter your password">
        </div>
    </form>
</div>

Step-2: Import FormGroup & FormControl form '@angular/forms'

  import { FormGroup, FormControl } from '@angular/forms';

Step-3: Create a new instance called form of FormGroup Object (Creating Explicitly form group and form control objects)

    myForm = new FormGroup({
      username: new FormControl(), // Key value pairs
      password: new FormControl()
    });

Step-4: Associating input fields with above form control objects

  -Applying Directive to the form element and assign to form obj
  <form [FormGroup]="myForm">
    
  - <input type="text" id="username" class="form-control" formControlName="username" placeholder="Enter Login details">
    <input type="password" id="password" class="form-control" formControlName="password" placeholder="Enter your password">
      
  - export class SignupFormComponent implements OnInit {
      myForm = new FormGroup({
        username: new FormControl(), // Key value pairs
        password: new FormControl()
      });
