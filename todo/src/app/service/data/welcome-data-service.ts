import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {BasicAuthService} from "../basic-auth.service";


export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable()
export class WelcomeDataServiceService {

  constructor(
    private http:HttpClient,
    private basicAuthService: BasicAuthService
  ) { }

  executeHelloWorldBeanService(name){
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8099/hello-world/path-variable/${name}`,{headers});
  }


}
