import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';

import {UserService} from './user.service'
@Injectable()
export class ManagerGurd implements CanActivate{

  constructor(private authService:UserService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authService.getKindUser() == "Manager")
    {
      return true;
    }
    else{
      this.router.navigate(['/']);;
      return false;
    }
  }
}

