import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomError } from './../models/CustomError';
import { ToasterService } from 'angular2-toaster';
import { configuration } from './../configuration';
import { AuthService } from '@pluritech/auth-service';
import { Credential } from './../models/Credential';
import { LoginService } from './../providers/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private classes = ['hold-transition', 'login-page'];
  public projectName = configuration.projectName;
  public isFormSubmitted: boolean;
  public loginForm: FormGroup;
  public errorMsg: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private toasterService: ToasterService) {
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // public login(formValue: any, isValid: boolean): void {
  //   this.errorMsg = '';
  //   this.isFormSubmitted = true;
  //   const credentials = new Credential(formValue['email'], formValue['password']);
  //   if (isValid) {
  //     this.loginService.login(credentials)
  //       .then(data => {
  //         this.authService.login(data);
  //         this.router.navigate(['/report']);
  //       })
  //       .catch(err => {
  //         switch (err.status) {
  //           case 'IsNotAPilot':
  //             this.errorMsg = err.message;
  //             break;
  //           case 'UserNotExists':
  //             this.errorMsg = 'Email ou senha incorretos.';
  //             break;
  //           default:
  //             this.errorMsg = 'Algum erro inesperado aconteceu. Tente novamente, se persistir, entre em contato.';
  //             break;
  //         }
  //       });
  //   }
  // }

  public login(formValue: any, isValid: boolean): void {
    this.errorMsg = '';
    this.isFormSubmitted = true;
    setTimeout(() => {
      this.authService.login({accessToken: 'logged', expires: 1312312});
      this.router.navigate(['/main']);
    }, 1000);
  }

  ngOnInit() {
    this.initForm();
    const body = document.getElementsByTagName('body')[0];
    for (const cl of this.classes) {
      body.classList.add(cl);
    }
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    for (const cl of this.classes) {
      body.classList.remove(cl);
    }
  }

}
