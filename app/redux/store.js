import { configureStore } from '@reduxjs/toolkit';
import eventReducer, { loadEvents } from './eventsSlice';

const store = configureStore({
  reducer: { events: eventReducer },
});

store.dispatch(loadEvents()); 

export default store;
