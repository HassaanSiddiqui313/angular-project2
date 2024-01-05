import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private servisedata:ServiceService){
    servisedata.User.subscribe(e=>{this.user=e})
    servisedata.singin.subscribe(e=>{this.singin=e})
  }
  singin=true;
  user='USER';
  f1(){
    this.servisedata.singin.next(this.singin=true)
  }
}
