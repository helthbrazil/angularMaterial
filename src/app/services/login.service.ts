import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClientLogin: HttpClient;

  constructor(handler: HttpBackend, private httpClient: HttpClient ) {
    this.httpClientLogin = new HttpClient(handler);
  }

  logar(dados): Observable<any> {
    return this.httpClientLogin.post('http://localhost:8080/login', dados, { observe: 'response' });
  }

  isLogged(): Observable<boolean> {
    return this.httpClient.get<boolean>('http://localhost:8080/isLogged');
  }
}
