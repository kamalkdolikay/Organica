import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// const router = new Router();

export const activateGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('id_token');
  const router = inject(Router);
  if(!token) {
    return true;
  } else {
    router.navigate(['/']);
    return true;
  }
};
