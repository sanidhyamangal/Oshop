import { Injectable } from '@angular/core';
import { CanActivate,Router,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router) { }

  canActivate(route,state:RouterStateSnapshot){
    return this.authService.user$.map(user=>{
      if(user) return true

      this.router.navigate(['/login'],{
        queryParams:{
          returnUrl:state.url
        }
      });
      return false
    })
  }
}
