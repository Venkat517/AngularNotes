
// Authentication

On Client Side - We build a login page
On Server Side - We build an API End point which will validate a user.

Client- when user clicks on login button, angular app will call the api endpoint (eg /api/authenticate) which pass the username and password.
Server- If the userdetails are valid, then it going to return a JSON Webtoken or (JWT Tokens). Its a Json which includes certain details of the login person
        
- After getting the JWT Token to the client,then we need to store those in a persistent, Such that they can exists across the session without expiry
- For this storage, we need to local storage, with the JWT Token on client, we can show
  - Display userName
  - Show/Hide parts of the page
  - Acess to certain routes

// Authorization
  
Client- While sending a request to the server to exctract the details only to authorized users u need to send the JWT in the request HEADER.
Server- then it should extract it and validate and return the list of orders, or else it should return unauthorized reponse with the status code 401

// JSON WEB TOKENS

