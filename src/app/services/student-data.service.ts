import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // NOTE ilker importing Http
import 'rxjs/add/operator/map'; // NOTE ilker importing react JS extension operator map

@Injectable()
export class StudentDataService {

  // NOTE ilker injecting Http via constructor
  constructor(public http:Http) { 
    console.log("StudentDataService constructor executing");
  }

  getTodos() {
    // NOTE ilker below returns an "observable" from rxjs (react JS extension)
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .map( response => response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }
}
