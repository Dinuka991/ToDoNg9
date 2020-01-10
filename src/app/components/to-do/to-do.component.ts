import { Component, OnInit } from '@angular/core';
import {  Todo } from '../../models/Todo'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos : Todo[];

  constructor() { }
     
  ngOnInit() {

    this.todos = [
       { 
      id: 1 ,
      name : 'HW' ,
      status : true
       },
       {
       id: 2 ,
       name : 'swiming' ,
       status : true
        },
        { 
        id: 1 ,
        name : 'cricket' ,
        status : false 
        },

      ]
    }

}
