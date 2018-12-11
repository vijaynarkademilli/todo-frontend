import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Todo} from "../../list-todos/list-todos.component";
import {API_URL} from './../../app.const';

@Injectable()
export class TodoService {

  constructor(
    private http:HttpClient
  ) { }

  executeTodoService(name){
    return this.http.get<Todo[]>(`${API_URL}/users/${name}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retriveTodo(username,id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  addTodo(username,todo){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(`${API_URL}/users/${username}/todos/`,todo);
  }

}
