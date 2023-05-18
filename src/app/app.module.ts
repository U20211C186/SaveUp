import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';

/*proporciona servicios de red para las aplicaciones Angular. 
Permite realizar solicitudes HTTP a servidores remotos y 
recibir respuestas en formato JSON u otros formatos.*/
import {HttpClientModule} from '@angular/common/http'

/*proporciona servicios de enrutamiento para las aplicaciones 
web de Angular. Permite configurar la navegación de la aplicación 
y definir rutas que corresponden a distintas páginas o componentes 
de la misma.*/
import {RouterModule} from '@angular/router';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component'

import { MaterialModule } from 'src/shared/material.module';
import { LoginSessionComponent } from './components/login-session/login-session.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RecoverPasswordComponent,
    LoginSessionComponent,
    CheckInComponent,
    PaymentMethodComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
