import { Component } from '@angular/core';
import { ServiceService } from './servicesapp/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a6';
  constructor(private servicedata: ServiceService, private router: Router) {
    servicedata.login.subscribe(e => { this.login = e })
    servicedata.nav.subscribe(e => { this.nav = e })
    if ((localStorage.getItem('userData') as any)) {
      router.navigate(['home']);
    } else {
      router.navigate(['login']);
    }
    console.log(JSON.parse(localStorage.getItem('userData') as any))
  }
  nav = true;
  login = true;
}
