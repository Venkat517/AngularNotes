
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






