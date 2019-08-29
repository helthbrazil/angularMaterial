import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private readonly URL_USUARIOS = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) { }

  buscarUsuarios(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.URL_USUARIOS);
  }


}
