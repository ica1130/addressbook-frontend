# addressbook-frontend

When I try to communicate with the server from the Google Chrome I always get some kind of mistake.

I keep getting this error: "Access to fetch at 'http://localhost:8080/api/contacts' from origin 'null' has been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."

I tried to put mode: 'no-cors' but then I just get 403 error which also doesnt help.. 

The last thing I tried was to add @CrossOrigin(origins = "http://localhost:8080") tag to the Controller class and restarting the server but that won't work..

Going in the direction to see how to optimize the server to handle CORS requests..
