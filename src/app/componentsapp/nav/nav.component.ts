import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private servicedata:ServiceService){
    servicedata.login.subscribe(e=>{this.login=e})
  }
  login=true;
f1(){
  this.servicedata.login.next(this.login=false)
}
f2(){
  this.servicedata.login.next(this.login=true)
}

}
