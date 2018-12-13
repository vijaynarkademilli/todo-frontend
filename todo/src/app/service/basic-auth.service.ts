import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable()
export class BasicAuthService {

  constructor(
    private http:HttpClient
  ) { }

    executeAuthenticationService(username,password){
      let basicAuthHeaderString = 'Basic '+window.btoa(username + ':' +password);
      let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
      return this.http.get<AuthenticationBean>(`http://localhost:8099/basicauth`,{headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,basicAuthHeaderString);
            return data;
          }
        )
      );
    }

  executeJWTAuthenticationService(username,password){


    //noinspection TypeScriptUnresolvedFunction
    return this.http.post<any>(`http://localhost:8099/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token} `);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }

  logOut(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean{
    constructor(public message:string){}
}
