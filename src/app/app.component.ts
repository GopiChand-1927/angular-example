import { Component, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Employee } from './Employee';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example';
  
  e:Employee =new Employee();
  save(){

    
    
    console.log(this.e);
    
  }
  m1(){ 
    this.students=[
      {"id":3,"name":"s3"

    },
    {
      "id":4,"name":"s4"
    }

    ]
  }
  students:Student[] =[
    {"id":1,"name":"s1"

    },
    {
      "id":2,"name":"s2"
    }
  ];
  
 
  
}
