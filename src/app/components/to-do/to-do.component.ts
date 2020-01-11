import { Component, OnInit } from '@angular/core';
import {  Todo } from '../../models/Todo'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos : Todo[];

  constructor(  private todoServices:TodoService  ) { }
     
  ngOnInit() {

    this.todoServices.getTodos().subscribe(
      todos => {
                 this.todos =todos;
        });
}

        
    }


