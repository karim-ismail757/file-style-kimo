import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./authentication/authentication.module').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },
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
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
