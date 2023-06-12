import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { LoginSessionComponent } from './components/login-session/login-session.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ProductsComponent } from './components/products/products.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { CheckInCompanyComponent } from './components/check-in-company/check-in-company.component';
import { ConfirmPurchaseComponent } from './components/confirm-purchase/confirm-purchase.component';
import { CompraExitosaComponent } from './components/compra-exitosa/compra-exitosa.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'recover/password', component: RecoverPasswordComponent },
  { path: 'login/session', component: LoginSessionComponent },
  { path: 'check/in', component: CheckInComponent },
  { path: 'payment/method', component: PaymentMethodComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'chatbox', component: ChatboxComponent },
  { path: 'edit/profile', component: EditProfileComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'purchase/history', component: PurchaseHistoryComponent },
  { path: 'check/in/company', component: CheckInCompanyComponent },
  { path: 'confirm/purchase', component: ConfirmPurchaseComponent },
  { path: 'purchase/successful', component: CompraExitosaComponent },
  { path: 'close/session', component: CerrarSesionComponent },
  { path: 'profile/view', component: ProfileViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
