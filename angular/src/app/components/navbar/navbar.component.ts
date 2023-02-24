import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public routerService: Router) {
  }

  goHome() {
    this.routerService.navigate(['home']);
  }
  goAboutUs() {
    this.routerService.navigate(['about-us']);
  }
  goCart() {
    this.routerService.navigate(['cart']);
  }
  goLogin() {
    this.routerService.navigate(['login']);
  }
  goLogout() {
    this.routerService.navigate(['logout']);
  }
  goSignUp() {
    this.routerService.navigate(['sign-up']);
  }
}

