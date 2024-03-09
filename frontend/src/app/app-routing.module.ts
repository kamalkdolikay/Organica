import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { activateGuard } from './services/activate.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [activateGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [activateGuard]
  },
  {
    path: 'account',
    component: ConsumerComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
