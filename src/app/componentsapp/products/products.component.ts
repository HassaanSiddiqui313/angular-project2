import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private router:Router,private servicedata:ServiceService){
    servicedata.nav.subscribe(e=>{this.nav=e})
    servicedata.navproduct.subscribe(e=>{this.navproduct=e})
    servicedata.headingpro.subscribe(e=>{this.headingpro=e})
    servicedata.proimg.subscribe(e=>{this.proimg=e})
  }
  proimg='';
  nav=true;
  navproduct=true;
  headingpro='';
  f1(e:any,i:any){
    this.servicedata.nav.next(this.nav=false);
    this.servicedata.navproduct.next(this.navproduct=true);
    this.router.navigate(['products-info'])
    this.servicedata.headingpro.next(this.headingpro=e.innerHTML)
    this.servicedata.proimg.next(this.proimg=i.getAttribute('src'))
  }
}
