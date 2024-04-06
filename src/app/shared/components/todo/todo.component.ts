import { Component, OnInit } from '@angular/core';
import { Istd } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // todoArr : Array<Itodo> = [ 
  //   // {
  //   //   todoItem : "javascript"
  //   // }
  // ]

  stdArr: Array<Istd>= [
    // {
    //   fname : "vijay",
    //   lname : "benkunde",
    //   email : "vijayb@123",
    //   contact : 8408802535
    // }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

  // onTodoAdd(todo : HTMLInputElement){
  //   console.log(todo.value)
  //   let todoObj : Itodo = {
  //       todoItem : todo.value
  //   }
  //   this.todoArr.push(todoObj)
  //   todo.value = '';
  // }

  onStdArr(fname : HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
       

    if(fname.value && lname.value && email.value && contact.value){
      let newstd : Istd = {
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        contact : +contact.value
       }
       console.log(newstd)
       fname.value = lname.value = email.value = contact.value = ''
       this.stdArr.push(newstd)
    }
  }

}
