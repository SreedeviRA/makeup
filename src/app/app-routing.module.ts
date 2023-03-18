import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MakeupComponent } from './pages/products/makeup/makeup.component';
import { ProductsComponent } from './pages/products/products.component';
import { SingleComponent } from './pages/single/single.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FoundationComponent } from './pages/products/makeup/foundation/foundation.component';
import { EyeshadowComponent } from './pages/products/makeup/eyeshadow/eyeshadow.component';
import { PrimerComponent } from './pages/products/makeup/primer/primer.component';
import { LipstickComponent } from './pages/products/makeup/lipstick/lipstick.component';
import { CartComponent } from './pages/cart/cart.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'products',component:ProductsComponent

  },
  {
    path:'makeup',component:MakeupComponent

  },
  
  {
    path:'signup',component:SignupComponent

  },
  {
    path:'contact',component:ContactComponent

  },
  {
    path:'single',component:SingleComponent
  },

  {
    path:'foundation',component:FoundationComponent
  },
  {
    path:'eyeshadow',component:EyeshadowComponent
  },
  {
    path:'primer',component:PrimerComponent
  },
  {
    path:'lipstick',component:LipstickComponent
  },
  {
    path:'cart',component:CartComponent
  },

{
  path:'review',component:ReviewComponent
}



  

] 






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
