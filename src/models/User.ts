interface IUser {
  name?: string;
  age?: number;
}

type Callback = () => void;
type Events = { [key: string]: Callback[] };

export class User {
  events: Events = {};
  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(user: IUser): void {
    Object.assign(this.data, user);
  }

  on(eventName: string, callback: Callback): void {
    const callbackList = this.events[eventName] || [];
    callbackList.push(callback);
    this.events[eventName] = callbackList;
  }

  trigger(eventName: string) {
    const events = this.events[eventName];
    if (!events || events.length === 0) {
      return;
    }
    events.forEach((event) => event());
  }
}
