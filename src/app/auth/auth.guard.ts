import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login'])
        }
        return true;
}
}