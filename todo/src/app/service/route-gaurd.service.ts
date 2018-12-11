import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {HardcodedAuthenticationService} from "./hardcoded-authentication.service";

@Injectable()
export class RouteGaurdService implements CanActivate {

  constructor(private hardCodedAuthenticationService:HardcodedAuthenticationService,private router: Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if (this.hardCodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}