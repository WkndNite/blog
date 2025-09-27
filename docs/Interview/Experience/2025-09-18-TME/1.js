class Subscriber {
  constructor() {
    this.subscribers = new Map();
  }

  on(event, callback) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event).push(callback);
  }

  emit(event, ...args) {
    if (this.subscribers.has(event)) {
      this.subscribers.get(event).forEach((callback) => callback(...args));
    } else {
      console.error("No such event: " + event);
    }
  }

  off(event, callback) {
    if (this.subscribers.has(event)) {
      if (!callback) {
        this.subscribers.delete(event);
      } else {
        const before = this.subscribers.get(event);
        const after = before.filter((cb) => cb !== callback);
        this.subscribers.set(event, after);
        if (after.length === 0) this.subscribers.delete(event);
      }
    }
  }

  showAll() {
    for (let [event, callbacks] of this.subscribers) {
      console.log(event, callbacks);
    }
  }
}

const sub = new Subscriber();
sub.on("event1", (...args) => console.log(...args));
sub.on("event1", (a, b) => console.log(a + b));
sub.on("event2", () => console.log("event2 test..."));
sub.showAll();
sub.emit("event1", 1, 2);
sub.off("event1");
sub.emit("event1", "hello", "world");
sub.emit("event2");
sub.showAll();
