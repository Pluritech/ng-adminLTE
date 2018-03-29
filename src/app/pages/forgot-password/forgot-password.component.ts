import { Utils } from './../../utils/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from './../../providers/login/login.service';
import { configuration } from './../../configuration';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  private classes = ['hold-transition', 'login-page'];
  public emailToRecovery: string;
  public isSubmitting = false;
  public msgFeedback: string;
  public projectName = configuration.projectName;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
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

  public async recoveryPassword(): Promise<void> {
    this.isSubmitting = true;
    this.msgFeedback = '';
    try {
      await this.loginService.recoveryPassword(this.emailToRecovery)
      this.msgFeedback = 'Email de recuperação enviado com sucesso.';
    } catch (e) {
      switch (e.status) {
        case 'InvalidEmail':
          this.msgFeedback = 'Email inválido ou não encontrado entre os alunos cadastrados.';
          break;
        default:
          this.msgFeedback = 'Um erro inesperado aconteceu';
          break;
      }
    }
    this.isSubmitting = false;
  }

  // public recoveryPassword(): void {
  //   this.isSubmitting = true;
  //   this.msgFeedback = '';
  //   setTimeout(() => {
  //     this.msgFeedback = 'Email de recuperação enviado com sucesso.';
  //     this.isSubmitting = false;
  //   }, 1000);
  // }

}
