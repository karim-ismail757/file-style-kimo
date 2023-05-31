import { HeaderComponent } from './../core/Authentication/pages/auth/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/core/Authentication/pages/auth/auth-services/authguard.service';
import { AuthModule } from 'src/core/Authentication/pages/auth/auth.module';
import { LoginComponent } from 'src/core/Authentication/pages/auth/login/login.component';
import { CoreModule } from 'src/core/Pages/core/core.module';
import { CartModule } from 'src/core/cart/cart/cart.module';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'auth', loadChildren: () => import('src/core/Authentication/pages/auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuardService]},
  { path: 'core', loadChildren: () => import('src/core/Pages/core/core.module').then(m => m.CoreModule) , canActivate: [AuthGuardService]},
  { path: 'account', loadChildren: () => import('src/core/account/account.module').then(m => m.AccountModule) , canActivate: [AuthGuardService] },
  { path: 'cart', loadChildren: () => import('src/core/cart/cart/cart.module').then(m => m.CartModule)  , canActivate: [AuthGuardService]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
