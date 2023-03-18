import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleComponent } from './pages/single/single.component';
import { ProductsComponent } from './pages/products/products.component';
import { MakeupComponent } from './pages/products/makeup/makeup.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';

import { FoundationComponent } from './pages/products/makeup/foundation/foundation.component';
import { EyeshadowComponent } from './pages/products/makeup/eyeshadow/eyeshadow.component';
import { PrimerComponent } from './pages/products/makeup/primer/primer.component';
import { LipstickComponent } from './pages/products/makeup/lipstick/lipstick.component';
import { CartComponent } from './pages/cart/cart.component';
import { ReviewComponent } from './pages/review/review.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleComponent,
    LoginComponent,
    ProductsComponent,
    MakeupComponent,
    SignupComponent,
    ContactComponent,
    FoundationComponent,
    EyeshadowComponent,
    PrimerComponent,
    LipstickComponent,
    CartComponent,
    ReviewComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
