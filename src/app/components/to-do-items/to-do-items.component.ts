import { Component, OnInit , Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

     @Input() todo : Todo;

  constructor() { }

  ngOnInit() {
  }

  //set Dynamic class
   

  setClasses(){
    let classes = {
      todo: true , 
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    

  }
  onDelete(todo){
    console.log('delete');

  }

}
