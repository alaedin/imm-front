import {Role} from './role';

export class Users {
  id: number;
  username: string;
  password: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  enabled: boolean;
  role: Role;

}
