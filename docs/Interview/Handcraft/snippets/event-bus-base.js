class EventBus {
  constructor() {
    this.eventObj = {};
  }

  on(eventName, callback) {
    if (!this.eventObj[eventName]) {
      this.eventObj[eventName] = [];
    }
    this.eventObj[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (this.eventObj[eventName]) {
      this.eventObj[eventName].forEach((callback) => {
        callback(...args);
      });
    }
  }
}

const eventBus = new EventBus();
eventBus.on("click", (data) => {
  console.log("click", data);
});
eventBus.emit("click", "data1"); // click data1
eventBus.emit("click", "data2"); // click data2
