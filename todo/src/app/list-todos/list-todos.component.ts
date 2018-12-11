import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/data/todo.service";
import {Router} from '@angular/router';

export class Todo {
  constructor(public id:number,
              public description:string,
              public done:boolean,
              public targetDate:Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(
    private todoDataService:TodoService,
    private router:Router
  ) {
  }

  todos: Todo[]
  message: string

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.executeTodoService('in28Minutes').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoDataService.deleteTodo('in28Minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
