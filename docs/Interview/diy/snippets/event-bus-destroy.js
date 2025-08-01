class EventBus {
  // ...

  emit(eventName, ...args) {
    if (this.eventObj[eventName]) {
      const callbacks = this.eventObj[eventName];
      for (const id in callbacks) {
        callbacks[id](...args);
        if (id.indexOf("D" !== -1)) {
          delete this.eventObj[eventName][id];
        }
      }
    }
  }

  // ...

  once(eventName, callback) {
    if (!this.eventObj[eventName]) {
      this.eventObj[eventName] = {};
    }
    const id = "D" + this.callbcakId++;
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
}
