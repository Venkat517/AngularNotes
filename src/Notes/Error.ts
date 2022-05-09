// Types of errors //

There are 2 kinds of errors:
  - Unexpected Errors
  - Expected Errors
  
Unexpected Errors
  - Server is offline
  - Network is down
  - unhandled exceptions
  
Expected Errors
  - Not found error (404)
  - Bad Request error (400)

// Handling unexpected errors

this.service.getPosts()
    .subscribe(data => {
        this.posts = data
        console.log(data);       // logging an error
     }, err => {
        alert('An unexpected error occurred');
        console.log(err);
});
