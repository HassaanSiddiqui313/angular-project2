import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  constructor(private router:Router,private servicedata:ServiceService){
    servicedata.nav.subscribe(e=>{this.nav=e})
    servicedata.navproduct.subscribe(e=>{this.navproduct=e})
    servicedata.headinggal.subscribe(e=>{this.headinggal=e})
    servicedata.galimg.subscribe(e=>{this.galimg=e})
  }
  galimg='';
  navproduct=true;
  nav=true;
  headinggal='';
  f1(e:any,i:any){
    this.router.navigate(['gallery-info']);
    this.servicedata.nav.next(this.nav=false);
    this.servicedata.navproduct.next(this.navproduct=false);
    this.servicedata.headinggal.next(this.headinggal=e.innerHTML);
    this.servicedata.galimg.next(this.galimg=i.getAttribute('src'));
  }
}
