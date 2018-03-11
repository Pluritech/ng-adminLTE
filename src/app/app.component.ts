import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      $('html,body').animate({ scrollTop: 0 }, 'slow', () => {
        $('body').removeClass('sidebar-open');
      });
      const collapse = $('.navbar-collapse');
      if (collapse && collapse[0] && collapse[0].classList.contains('in')) {
        collapse[0].classList.remove('in');
      }
    });
  }

}
