import { Injectable } from '@angular/core';

@Injectable()
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if (username === 'in28minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }

  logOut(){
    sessionStorage.removeItem('authenticaterUser');
  }

}
