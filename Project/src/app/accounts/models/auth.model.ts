import { User } from './user.model';

export class Auth {
  currentUser: User;
  isAuthenticated: boolean;
  // tslint:disable-next-line:variable-name
  error_msg?: string;
  // tslint:disable-next-line:variable-name
  success_msg?: string;
}
