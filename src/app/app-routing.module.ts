import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { UserLoginComponent } from 'src/app/user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/userregister', pathMatch: 'full' },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'userregister', component: UserRegisterComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
