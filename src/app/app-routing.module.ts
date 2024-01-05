import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentsapp/home/home.component';
import { ProductsComponent } from './componentsapp/products/products.component';
import { GalleryComponent } from './componentsapp/gallery/gallery.component';
import { ContactdetsComponent } from './componentsapp/contactdets/contactdets.component';
import { LoginpageComponent } from './componentsapp/loginpage/loginpage.component';
import { ProductinfoComponent } from './componentsapp/productinfo/productinfo.component';
import { GellaryinfoComponent } from './componentsapp/gellaryinfo/gellaryinfo.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactdetsComponent},
  {path:'login',component:LoginpageComponent},
  {path:'products-info',component:ProductinfoComponent},
  {path:'gallery-info',component:GellaryinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
