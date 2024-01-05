import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentsapp/nav/nav.component';
import { LoginComponent } from './componentsapp/login/login.component';
import { HomeComponent } from './componentsapp/home/home.component';
import { ContactdetsComponent } from './componentsapp/contactdets/contactdets.component';
import { ProductsComponent } from './componentsapp/products/products.component';
import { GalleryComponent } from './componentsapp/gallery/gallery.component';
import { CntactComponent } from './componentsapp/cntact/cntact.component';
import { Nav2Component } from './componentsapp/nav2/nav2.component';
import { LoginpageComponent } from './componentsapp/loginpage/loginpage.component';
import { ProductinfoComponent } from './componentsapp/productinfo/productinfo.component';
import { GellaryinfoComponent } from './componentsapp/gellaryinfo/gellaryinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    ContactdetsComponent,
    ProductsComponent,
    GalleryComponent,
    CntactComponent,
    Nav2Component,
    LoginpageComponent,
    ProductinfoComponent,
    GellaryinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
