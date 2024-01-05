import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() { }
  login=new BehaviorSubject<boolean>(true);
  nav=new BehaviorSubject<boolean>(true);
  singin=new BehaviorSubject<boolean>(true);
  navproduct=new BehaviorSubject<boolean>(true);
  User=new BehaviorSubject<string>('WELCOME ');
  headingpro=new BehaviorSubject<string>('');
  headinggal=new BehaviorSubject<string>('');
  proimg=new BehaviorSubject<string>('');
  galimg=new BehaviorSubject<string>('');
}
