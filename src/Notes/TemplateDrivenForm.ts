
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
FormGroup - represents the group of Form controls


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

3)Adding specific validations errors

- Minlength
- Maxlength
- required
- Pattern

<div class="form-group">
     <label for="firstName">First Name</label>
     <input required minlength="4" ngModel name="firstName" #firstName="ngModel" id="firstName" (change)="log(firstName)" type="text" class="form-control">
     <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">
         <div *ngIf="firstName.errors">First Name is Required</div>
         <div *ngIf="firstName.errors?.['minLength']">First Name Should Be Min 3 Characters</div>
     </div>
 </div>

//required length can be seen in the object related to ngModel
<div *ngIf="firstName.errors?.['minlength']">First Name Should Be Min {{firstName.errors?.['minlength'].requiredlength}} Characters</div>

4) Styling invalid input fields
- Identify the input classes and apply the style accordingly

.form-control.ng-invalid.ng-touched {
    border: 1px solid red;
}

ngForm(directive) 
- It is directly applied to the form tag
- Create a Template variable reference
<form #f="ngForm">

// Control classes and directives
  
- In angular we have two classes, i.e FormControl & FormGroup
- To keep track of the state of the input field and thier validity
- FormControl represents only one input fields
- FormGroup represents group of input fields
- When we apply ngModel directive on the input fields, angular automatically creates a Formcontrol object 
- When we have a complex form we apply ngModelGroup, it is similar to ngForm and creates Formobject in that form.

// diff b/w ngForm and ngModel group

- It exposes output property ngSubmit, which is used to handle to submit events of the forms
- ngModelGroup doesn't have that output property.

// Disabling the submit button

<button type="submit" class="btn btn-primary" [disabled]="!f.valid">Submit</button>

// Working with checkboxes

 <div class="checkbox">
     <label>
         <input type="checkbox" ngModel name="isSubscribed">Subscribe to newsmail notifications
     </label>
 </div>
        
<p>{{f.value | json }}</p>

// working with drop down

 <div class="form-group">
     <label for="contactMethod">Contact Method</label>
     <select ngModel name="contactMethod" id="contactMethod" class="form-control">
        <option value=""></option>
        <option *ngFor="let method of contactMethods" [value]="method.id">{{ method.name }}</option>
     </select>
 </div>

**** if u want send the whole object then use [ngValue]="method"
**** if u want to select the multiple otions then use multiple keyword in select tag

// sample prj with input field, dropdown and checkbox

<div class="custom-box">
    <form #fm="ngForm" (ngSubmit)="submit1(fm)">
        <!-- Input field for text box -->
        <div class="form-group">
            <label for="courseName">Course Name</label>
            <input type="text" class="form-control" required name="courseName" ngModel #courseName="ngModel" minlength="5">
            <!-- displaying error message -->
            <div *ngIf="courseName.touched && courseName.invalid" class="alert alert-danger">
                <div *ngIf="courseName.errors?.['required']">
                    Course Name is Required
                </div>
                <div *ngIf="courseName.errors?.['minlength']">
                    Course Name Should Be Min {{courseName.errors?.['minlength'].requiredLength}} Characters
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="categoryName">Category</label>
            <select ngModel required name="categoryName" id="categoryName" class="form-control" (change)="logCategory(categoryName)">
                <option value=""></option>
                <option *ngFor="let category of categoryName" [value]="category.id ">{{ category.name }}</option>
            </select>
            <!-- displaying error messages -->
            <div *ngIf="categoryName?.['touched'] && categoryName?.['invalid']" class="alert alert-danger">
                Category Name is Required
            </div>
        </div>

        <div class="form-group">
            <div class="checkbox">
                <label>
                    <input type="checkbox" ngModel name="hasGuarantee" required>30-day-money-back-guarantee
                </label>
            </div>
        </div>
        <p>{{fm.value | json }}</p>
        <button type="submit" class="btn btn-primary" [disabled]="!fm.valid">Submit</button>
    </form>
</div>




















