import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';

const CalendarComponent = ({ selectedDate, onDateSelect }) => {
  const events = useSelector((state) => state.events.events);

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true, dotColor: 'orange' };
    return acc;
  }, {});

  markedDates[selectedDate] = { selected: true, selectedColor: '#feca57' };

  return (
    <Calendar
      current={selectedDate}
      onDayPress={(day) => onDateSelect(day.dateString)}
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: '#feca57',
        todayTextColor: '#000',
        arrowColor: '#feca57',
      }}
    />
  );
};

export default CalendarComponent;
