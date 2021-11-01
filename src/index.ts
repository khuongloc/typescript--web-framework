import { User } from './models/User';

const myUser = new User({});

myUser.set({ name: 'loc', age: 25 });

myUser.on('click', () => {
  console.log('hello');
});

myUser.on('click', () => {
  console.log('hello 123');
});

console.log(myUser);
myUser.trigger('click');
