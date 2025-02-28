import React from 'react';
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';

const CalendarComponent = ({ selectedDate, onDateSelect }) => {
  const events = useSelector((state) => state.events.events);

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { 
      selected: true, 
      customStyles: {
        container: {
          backgroundColor: '#ffeb99',
        },
        text: {
          color: '#feca57', 
          fontWeight: 'bold', 
        }
      }
    };
    return acc;
  }, {});

  markedDates[selectedDate] = { 
    selected: true, 
    customStyles: {
      container: {
        backgroundColor: '#feca57', 
      },
      text: {
        color: '#fff', 
        fontWeight: 'bold', 
      }
    }
  };

  return (
    <Calendar
      current={selectedDate}
      onDayPress={(day) => onDateSelect(day.dateString)}
      markedDates={markedDates}
      markingType="custom" 
      theme={{
        todayTextColor: '#000',
        arrowColor: '#feca57',
      }}
    />
  );
};

export default CalendarComponent;
