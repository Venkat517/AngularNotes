// Creating a Service 

Ng g s service_name

// Register the service as a provider in the app.module.ts

Provider: [PostService]

// Inject http class in the constructor

constructor(private http: HttpClient) { }

// import that relavant class

import { HttpClient } from '@angular/common/http';


