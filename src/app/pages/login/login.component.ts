import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/shared/models/user';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isMobile = false;
  showLoading = false;

  public todo: FormGroup;

  username: string;
  password: string;

  formularioMobile = {
    username: '',
    password: ''
  };

  formulario = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router, private snackBar: MatSnackBar, private deviceService: DeviceDetectorService) {
    const deviceInfo = this.deviceService.getDeviceInfo();
    if (deviceInfo['os'].toLowerCase() === 'android'
      || deviceInfo['os'].toLowerCase() === 'ios'
      || deviceInfo['os'].toLowerCase() === 'windows-phone') {
      this.isMobile = true;

      this.todo = this.fb.group({
        title: ['', Validators.required],
        description: [''],
      });

    }
  }

  formHasError = false;

  ngOnInit() {
  }

  logForm() {
    console.log(this.todo.value);
  }

  logar() {
    debugger
    let dados;
    dados = this.formulario.value;

    this.showLoading = true;
    setTimeout(() => { // SIMULATE DELAY
      this.loginService.logar(dados).subscribe((res) => {
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
