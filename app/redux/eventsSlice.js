import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Load events from storage
export const loadEvents = createAsyncThunk('events/loadEvents', async () => {
  const storedEvents = await AsyncStorage.getItem('events');
  return storedEvents ? JSON.parse(storedEvents) : {};
});

const eventSlice = createSlice({
  name: 'events',
  initialState: { events: {} },
  reducers: {
    addEvent: (state, action) => {
      const { date, name, startTime, endTime, repeat } = action.payload;
      state.events[date] = { name, startTime, endTime, repeat };
      AsyncStorage.setItem('events', JSON.stringify(state.events));
    },
    deleteEvent: (state, action) => {
      const { date } = action.payload;
      delete state.events[date];
      AsyncStorage.setItem('events', JSON.stringify(state.events));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
  }
});

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
