import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../../services/student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name:string = 'ilker Kiris';
  age:number;
  email: string;
  addressObject: {
    street: string,
    city: string,
    state: string
  };
  address: Address;
  languages: string[];
  other: any;
  todos: Todo[];
  isEditable: boolean = false;
  isToDisplayTodos: boolean = false;

  // NOTE ilker injecting the StudentDataService instance below
  constructor(private studentDataService:StudentDataService) { 
    console.log('StudentComponent constructor executed');
    this.name = 'ILKER KIRIS';
  }

  ngOnInit() {
    console.log('StudentComponent ngOnInit executed');
    this.name += '(added by ngOnInit)';
    this.age = 20;
    this.email = "ilker@gmail.com";
    this.addressObject = {
      street: '1 main st',
      city: 'NYC',
      state: 'NY'
    };
     this.address = {
      street: '2 main st',
      city: 'NYC',
      state: 'NY'
    };
    this.languages = ['JavaScript', 'TypeScript', 'Java'];
    this.other = 1; // NOTE ilker any type will allow setting to anything like; 'two', [1,2,3]
 
    this.studentDataService.getTodos().subscribe( (todos) => {
      console.log(todos);
      this.todos = todos;
    });
 }

  onClick() {
    this.name += " onClickAdded ";
    this.languages.push('Added a language');  // NOTE ilker "push" adds an element to tail end of array
  }

  addLanguage(language) {
    console.log(language);
    this.languages.unshift(language); // NOTE ilker unshift adds to the beginning of array
    return false;
  }

  toggleEditable() {
    this.isEditable = !this.isEditable;
  }

  toggleToDisplayTodos() {
    this.isToDisplayTodos = !this.isToDisplayTodos;
  }

  deleteLanguage(language){
    for(let i=0; i < this.languages.length; i++) {
      if(this.languages[i] === language) {
        this.languages.splice(i,1);
      }
    }
  }
}

// NOTE ilker could have declared this interface in a separete file like models/address.ts for other components to share as well
interface Address {
  street: string,
  city: string,
  state: string
}

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}