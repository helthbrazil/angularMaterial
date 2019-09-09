import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let dupReq;
    if (token) {
      dupReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
    } else {
      dupReq = req.clone();
    }

    return next.handle(dupReq).pipe(catchError((error, caught) => {
      console.log(error);
      if (error.status) {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else if (error.status === 403) { // TODO consertar backend
          this.router.navigate(['/login']);
        }
      }
      return throwError(error);
    }) as any);
  }
}




@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor { }