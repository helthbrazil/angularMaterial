import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoading = false;

  formulario = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router, private snackBar: MatSnackBar) {
  }

  formHasError = false;

  ngOnInit() { }

  logar() {
    this.showLoading = true;
    setTimeout(() => { // SIMULATE DELAY
      this.loginService.logar(this.formulario.value).subscribe((res) => {
        this.formHasError = false;
        localStorage.setItem(User.STRING_TOKEN, res.headers.get('Authorization'));
        this.router.navigate(['']);
        this.showLoading = false;
      }, err => {
        this.formHasError = true;
        console.error(err);
        this.snackBar.open('Usuário ou senha inválidos', undefined, { duration: 4000/* , panelClass: ['error-snackbar'] */ });
        this.showLoading = false;
      });
    }, 300);
  }

}
