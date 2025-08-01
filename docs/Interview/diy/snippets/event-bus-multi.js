class EventBus {
  constructor() {
    this.eventObj = {};
    this.callbackId = 0;
  }
  on(eventName, callback) {
    if (!this.eventObj[eventName]) {
      this.eventObj[eventName] = {};
    }
    const id = this.callbackId++;
    this.eventObj[eventName][id] = callback;
    return id;
  }

  emit(eventName, ...args) {
    if (this.eventObj[eventName]) {
      const callbacks = this.eventObj[eventName];
      for (const id in callbacks) {
        callbacks[id](...args);
      }
    }
  }

  off(eventName, id) {
    if (this.eventObj[eventName] && this.eventObj[eventName][id]) {
      delete this.eventObj[eventName][id];
    }
    console.info(`off ${eventName} ${id}`);
    if (!Object.keys(this.eventObj[eventName]).length) {
      delete this.eventObj[eventName];
    }
  }
}

const eventBus = new EventBus();
const id1 = eventBus.on("click", (data) => {
  console.log("click-id1", data);
});
const id2 = eventBus.on("click", (data) => {
  console.log("click-id2", data);
});

eventBus.emit("click", "hello");
// click-id1 hello
// click-id2 hello
eventBus.off("click", id1);
eventBus.emit("click", "hello");
// off click 0
// click-id2 hello
