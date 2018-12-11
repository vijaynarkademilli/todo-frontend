import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler} from '@angular/common/http';
import {BasicAuthService} from "../basic-auth.service";

@Injectable()
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) {
  }


  intercept(request:HttpRequest<any>, next:HttpHandler) {


    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let userName = this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && userName){
      //noinspection TypeScriptUnresolvedFunction
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }



}
