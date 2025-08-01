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
        if (id.indexOf("D") !== -1) {
          delete this.eventObj[eventName][id];
        }
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

  once(eventName, callback) {
    if (!this.eventObj[eventName]) {
      this.eventObj[eventName] = {};
    }
    const id = "D" + this.callbackId++;
    this.eventObj[eventName][id] = callback;
    return id;
  }

  del(eventName) {
    if (this.eventObj[eventName]) {
      delete this.eventObj[eventName];
    }
  }

  clear() {
    this.eventObj = {};
  }

  getEvents() {
    console.log(this.eventObj);
  }
}

const bus = new EventBus();
const id1 = bus.on("click", (data) => {
  console.log("click-id1", data);
});
const id2 = bus.on("click", (data) => {
  console.log("click-id2", data);
});
const id3 = bus.once("double-click", (data) => {
  console.log("double-click-id3", data);
});
bus.getEvents();
// {
//     click: { '0': [Function (anonymous)], '1': [Function (anonymous)] },
//     'double-click': { D2: [Function (anonymous)] }
// }
bus.emit("click", "data1");
// click-id1 data1
// click-id2 data1
bus.emit("double-click", "data2");
// double-click-id3 data2
bus.getEvents();
// {
//     click: { '0': [Function (anonymous)], '1': [Function (anonymous)] },
//     'double-click': {}
// }
bus.off("click", id1);
bus.getEvents();
// { click: { '1': [Function (anonymous)] }, 'double-click': {} }
bus.del("click");
bus.getEvents();
// { 'double-click': {} }
bus.clear();
bus.getEvents();
// {}
