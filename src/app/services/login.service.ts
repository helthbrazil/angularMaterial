import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClientLogin: HttpClient;

  private readonly URL_LOGIN = 'https://springboot-jwt-brazil.herokuapp.com/login';
  // private readonly URL_LOGIN = 'http://localhost:8080/login';

  private readonly URL_ISLOGGED = 'https://springboot-jwt-brazil.herokuapp.com/isLogged';
  // private readonly URL_ISLOGGED = 'http://localhost:8080/isLogged';

  constructor(handler: HttpBackend, private httpClient: HttpClient, private router: Router) {
    this.httpClientLogin = new HttpClient(handler);
  }

  logar(dados): Observable<any> {
    return this.httpClientLogin.post(this.URL_LOGIN, dados, { observe: 'response' });
  }

  deslogar(): Observable<any> {
    return new Observable<any>(o => {
      localStorage.removeItem(User.STRING_TOKEN);
      this.router.navigate(['/login']);
      o.next(true);
      o.complete();
    });
  }

  isLogged(): Observable<boolean> {    
    return this.httpClient.get<boolean>(this.URL_ISLOGGED);
  }
}
