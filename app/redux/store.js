import { configureStore } from '@reduxjs/toolkit';
import eventReducer, { loadEvents } from './eventsSlice';

const store = configureStore({
  reducer: { events: eventReducer },
});

store.dispatch(loadEvents()); // Load stored events on app startup

export default store;
