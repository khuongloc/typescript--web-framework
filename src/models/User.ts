import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface IUser {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  static URL = 'http://localhost:3000/users';

  events: Eventing = new Eventing();
  sync: Sync<IUser> = new Sync<IUser>(User.URL);
}
