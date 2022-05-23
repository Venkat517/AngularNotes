
// Building a bootstrap form //

<form>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" class="form-control">
    </div>

    <div class="form-group">
        <label for="comment">Comment</label>
        <input id="comment" type="text-area" class="form-control" cols="30" rows="10">
    </div>
      
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

// Types of forms //

we need to create a FORM GROUP object to the form and FORM CONTROL object for the each input field in the form

// Two ways to create the control objects //

1) Directives (Template Driven): Angular will create these implicitilly under the hood
2) Code (Reactive): Explicitly creating the control objects.

Template-Driven 
- Used to create the simple form
- Simple Validation

Reactive-Forms
- Good for complex forms
- Unit testable
- More control over validation logic

// Validation using template driven approach

1) Instanciate the form obj
for getting the change detection in the form object

<input ngModel name="firstName" #firstName="ngModel" id="firstName" (change)="log(firstName)" type="text" class="form-control">
  
2) Adding the validation to the exitsting form

- required keyword is mandatory for basic validation
- add a div with class alert alert-danger for displaying the error
- ngIf condition for checking the foucus (i.e touched or not) && valid state based on the reference varaiable for ngModel 

 <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">First Name is Required</div>







