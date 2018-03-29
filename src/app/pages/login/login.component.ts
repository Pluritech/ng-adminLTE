import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilsService } from './../../providers/utils/utils.service';
import { CustomError } from './../../models/custom-error';
import { ToasterService } from 'angular2-toaster';
import { configuration } from './../../configuration';
import { AuthService } from '@pluritech/auth-service';
import { Credential } from './../../models/credential';
import { LoginService } from './../../providers/login/login.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private toasterService: ToasterService,
    private utilsService: UtilsService,
  ) {}

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // public async login(formValue: any, isValid: boolean): Promise<void> {
  //   this.errorMsg = '';
  //   this.isFormSubmitted = true;
  //   const credentials = new Credential(formValue['email'], formValue['password']);
  //   if (!isValid) { return; }

  //   try {
  //     const token = await this.loginService.login(credentials);
  //     await this.authService.login(token);
  //     this.router.navigate(['/report']);
  //   } catch (e) {
  //     this.utilsService.handleError(e);
  //   }
  // }

  public login(formValue: any, isValid: boolean): void {
    this.errorMsg = '';
    this.isFormSubmitted = true;
    setTimeout(async () => {
      await this.authService.login({accessToken: 'logged', expires: 1312312});
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
