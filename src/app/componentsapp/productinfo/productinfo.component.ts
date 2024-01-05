import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent {
  constructor(private servicedata:ServiceService){
    servicedata.headingpro.subscribe(e=>{this.product=e})
    servicedata.proimg.subscribe(e=>{this.proimg=e})
  }
  product=''
  proimg=''
}
