import { Component, OnInit } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoArr : Array<Itodo> = [ 
    // {
    //   todoItem : "javascript"
    // }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(todo : HTMLInputElement){
    console.log(todo.value)
    let todoObj : Itodo = {
        todoItem : todo.value
    }
    this.todoArr.push(todoObj)
    todo.value = '';
  }

}
