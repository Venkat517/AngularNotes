// Creating a Service 

Ng g s service_name

// Register the service as a provider in the app.module.ts

Provider: [PostService]

// Inject http class in the constructor

constructor(private http: HttpClient) { }

// import that relavant class

import { HttpClient } from '@angular/common/http';

// specify the each http methods are below

getPosts() {
    return this.http.get(this.url)
  }

createPost(post) {
    return this.http.post(this.url, post)
  }

updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, { isReadOnly: true })
  }

deletePost(post) {
    return this.http.delete(this.url + '/' + post.id)
  }


