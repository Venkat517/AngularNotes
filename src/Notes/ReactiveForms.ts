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
    
 Step-5:Adding Validations
 
    - Import validators
    import { Validators } from '@angular/forms';

    - Add the validators 
     username: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)

    - Displaying the error messages inthe template
      <div class="alert alert-danger">
          Username is Required
      </div>
      - Accesing the form objects in the template
      
        get username() {
          return this.myForm.get('username');
        }
      - Displaying the erro message based on the conditions
      
        *ngIf="username?.touched && username?.invalid"

<div *ngIf="username?.touched && username?.invalid" class="alert alert-danger">
     <div *ngIf="username?.errors?.['required']">
           Username is Required
     </div>
     <div *ngIf="username?.errors?.['minlength']">
           Username should be greater than {{ username?.errors?.['minlength'].requiredLength }} characters
     </div>
</div>

  myForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });

// Adding Custom Validations

- Add a new file in the existing folder
- Insert a import statement which includes the following
    import { AbstractControl, ValidationErrors } from '@angular/forms'
- create a class name UsernameValidators and export it
    export class UsernameValidators {
    }
- Create a static function of type AbstractControl as follows 

    export class UsernameValidators {
    // Username should not contain any spaces
    static cannoutContainSpaces(control: AbstractControl): ValidationErrors | any {
        if ((control.value).indexOf(' ') != -1) {
            return {
                cannoutContainSpaces: true,
            }
            return null;
        }
    }
}

- Add the validator in the ts file
    UsernameValidators.cannoutContainSpaces
- Add a error message in the template as follows

    <div *ngIf="username?.errors?.['cannoutContainSpaces']">
         Username Cannout Contain Spaces
    </div>
     

           
