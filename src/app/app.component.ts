import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jwt';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLogged();
  }

  private isLogged() {
    this.loginService.isLogged().subscribe(res => {
      console.log('está logado');
    }, err => {
      console.error('Não está logado');
      this.router.navigate(['/login']);
    });
  }

}
