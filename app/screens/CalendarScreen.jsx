import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import EventForm from './EventForm';
import { getRecurringEvents } from '../utils/eventUtils';

const CalendarScreen = () => {
  const events = useSelector(state => state.events.events);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const updatedMarkedDates = getRecurringEvents(events);
    setMarkedDates(updatedMarkedDates);
  }, [events]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
      />

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <EventForm selectedDate={selectedDate} onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default CalendarScreen;
