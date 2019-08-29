import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('token');
        if (token) {
            return this.loginService.isLogged().pipe(map(dat => {
                if (dat) {
                    return true;
                }
            }, err => {
                this.router.navigate(['/login']);
                return false;
            }));
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
