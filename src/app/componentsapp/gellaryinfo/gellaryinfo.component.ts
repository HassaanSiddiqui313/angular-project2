import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servicesapp/service.service';

@Component({
  selector: 'app-gellaryinfo',
  templateUrl: './gellaryinfo.component.html',
  styleUrls: ['./gellaryinfo.component.scss']
})
export class GellaryinfoComponent {
  constructor(private servicedata:ServiceService){
    servicedata.headinggal.subscribe(e=>{this.photo=e})
    servicedata.galimg.subscribe(e=>{this.galimg=e})
  }
  photo=''
  galimg=''
}
