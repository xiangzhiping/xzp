// eventBus.js
import { reactive } from 'vue';

const eventBus = reactive({});

function emit(event, ...args) {
    const handlers = eventBus[event] || [];
    handlers.forEach((handler) => handler(...args));
}

function on(event, handler) {
    if (!eventBus[event]) {
        eventBus[event] = [];
    }
    eventBus[event].push(handler);
}

function off(event, handler) {
    const handlers = eventBus[event];
    if (handlers) {
        eventBus[event] = handlers.filter((h) => h !== handler);
    }
}

export default {
    emit,
    on,
    off,
};
