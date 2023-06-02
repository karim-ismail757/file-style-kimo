import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'src/core/Authentication/pages/auth/auth.module';
import { LoginComponent } from 'src/core/Authentication/pages/auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/core/Authentication/pages/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'core',
    loadChildren: () =>
      import('src/core/Pages/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('src/core/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('src/core/cart/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
