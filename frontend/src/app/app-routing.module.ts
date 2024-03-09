import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { activateGuard } from './services/activate.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
