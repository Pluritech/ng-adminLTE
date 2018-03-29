import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { configuration } from './../../configuration';
import { AuthService } from '@pluritech/auth-service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy {

  public projectName: any = configuration.projectName;
  public userDefault: string = configuration.userDefaultImage;
  private classes: string[] = [configuration.skin, 'sidebar-mini'];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public async logout(): Promise<void> {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (e) {
      console.log('err logout', e);
    }
  }

  ngOnInit() {
    $(document).ready(() => {
      const layout = $('body').data('lte.layout');
      if (layout) {
        layout.fix();
      }
      const trees: any = $('[data-widget="tree"]');
      if (trees) {
        trees.tree();
      }
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
