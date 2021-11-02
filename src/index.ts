import { User } from './models/User';

const myUser = new User({});

myUser.sync.save({ id: 1, name: 'new updated name' });
myUser.sync.fetch(1);
