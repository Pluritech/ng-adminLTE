import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@pluritech/auth-service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy {

  private classes = ['hold-transition', 'skin-green', 'sidebar-mini'];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public logout(): void {
    this.authService.logout()
      .then(() => {
          this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log('err logout', err);
      });
  }

  ngOnInit() {
    $(document).ready(() => {
      $.AdminLTE.layout.fix();
    });
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
