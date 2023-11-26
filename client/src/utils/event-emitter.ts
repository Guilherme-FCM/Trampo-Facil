interface Emitter {
  emit: (eventName: string, value: any) => void;
  on: (
    eventName: string,
    callback: (event: any) => void
  ) => void;
}

export const EventEmitter: Emitter = {
  emit(eventName, value) {
    const event = new CustomEvent(eventName, {
      detail: value,
    });
    dispatchEvent(event);
  },

  on(eventName, callback) {
    addEventListener(eventName, (e: Event) => {
      const event = e as CustomEvent;
      callback(event.detail);
    })
  }
}