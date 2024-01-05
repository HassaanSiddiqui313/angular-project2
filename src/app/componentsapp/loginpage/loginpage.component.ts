import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servicesapp/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  constructor(private servisedata: ServiceService, private router: Router) {
    servisedata.User.subscribe(e => { this.user = e })
    servisedata.singin.subscribe(e => { this.singin = e })
  }
  singin = true;
  user = 'user';
  logpass = false;
  f1(user: any, pass: any) {
    let a = 'welcome ';
    if (pass.value == 1234) {
      this.servisedata.User.next(this.user = a + user.value)
      this.servisedata.singin.next(this.singin = false);
      localStorage.setItem('userData', JSON.stringify({ user: user.value, pass: pass.value }))
      this.router.navigate(['home'])
    }
    else {
      this.logpass = true;
      pass.value = ''
      setTimeout(() => {
        this.logpass = false;
      }, 1000);
    }
  }
}
