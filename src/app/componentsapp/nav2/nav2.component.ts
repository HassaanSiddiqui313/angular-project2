import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component {
  constructor(private servicedata:ServiceService,private router:Router){
    servicedata.nav.subscribe(e=>{this.nav=e})
    servicedata.navproduct.subscribe(e=>{this.navproduct=e})
  }
  navproduct=true;
  nav=true;
  f1(){
    this.servicedata.nav.next(this.nav=true);
    this.router.navigate(['gallery'])
  }
  f2(){
    this.servicedata.nav.next(this.nav=true);
    this.router.navigate(['products'])
  }
}
