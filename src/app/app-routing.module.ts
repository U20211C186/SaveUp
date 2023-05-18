import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { LoginSessionComponent } from './components/login-session/login-session.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'recover/password', component: RecoverPasswordComponent },
  { path: 'login/session', component: LoginSessionComponent },
  { path: 'check/in', component: CheckInComponent },
  { path: 'payment/method', component: PaymentMethodComponent },
  { path: 'products', component: ProductsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
