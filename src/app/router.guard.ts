import { CanActivateFn } from '@angular/router';

export const routerGuard: CanActivateFn = (route, state) => {
  return true;
};
