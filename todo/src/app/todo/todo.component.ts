import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/data/todo.service";
import {ActivatedRoute,Router} from '@angular/router';
import {Todo} from "../list-todos/list-todos.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo

  constructor(private todoDataService:TodoService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //For Dummy Initialization of resource
    this.todo = new Todo(this.id,'', false, new Date());
    if (this.id != -1) {
      this.todoDataService.retriveTodo('in28minutes', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoDataService.addTodo('in28Minutes',this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoDataService.updateTodo('in28Minutes', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
