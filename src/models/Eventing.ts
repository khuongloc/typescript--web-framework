type Callback = () => void;
type Events = { [key: string]: Callback[] };

export class Eventing {
  events: Events = {};

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
