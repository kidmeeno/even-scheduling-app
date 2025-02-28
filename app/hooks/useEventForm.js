import { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, deleteEvent } from '../redux/eventsSlice';
import { useNavigation } from '@react-navigation/native';

const useEventForm = (selectedDate) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const events = useSelector((state) => state.events.events);
  const existingEvent = events[selectedDate] || {};

  const [eventName, setEventName] = useState(existingEvent.name || '');
  const [startTime, setStartTime] = useState(
    new Date(existingEvent.startTime || selectedDate)
  );
  const [endTime, setEndTime] = useState(
    new Date(existingEvent.endTime || selectedDate)
  );
  const [repeat, setRepeat] = useState(existingEvent.repeat || 'None');

  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  // Prevent past date events
  const isPastDate = new Date(selectedDate) < new Date().setHours(0, 0, 0, 0);

  // Function to check for overlapping events
  const hasOverlap = () => {
    return Object.keys(events[selectedDate] || {}).some((eventKey) => {
      const event = events[selectedDate][eventKey];
      const eventStart = new Date(event.startTime);
      const eventEnd = new Date(event.endTime);
      return (
        (startTime >= eventStart && startTime < eventEnd) ||
        (endTime > eventStart && endTime <= eventEnd) ||
        (startTime <= eventStart && endTime >= eventEnd)
      );
    });
  };

  const handleSave = () => {
    if (!eventName) {
      Alert.alert('Error', 'Event name cannot be empty');
      return;
    }

    if (isPastDate) {
      Alert.alert('Error', 'You cannot create events in the past.');
      return;
    }

    if (endTime <= startTime) {
      Alert.alert('Error', 'End time must be after start time.');
      return;
    }

    if (hasOverlap()) {
      Alert.alert(
        'Error',
        'This event conflicts with another scheduled event.'
      );
      return;
    }

    dispatch(
      addEvent({
        date: selectedDate,
        name: eventName,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        repeat,
      })
    );
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  const handleDelete = () => {
    Alert.alert('Delete Event', 'Are you sure you want to delete this event?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {dispatch(deleteEvent({ date: selectedDate })); navigation.goBack();},
      },
    ]);
  };

  const onChangeStartTime = (event, selectedTime) => {
    if (selectedTime) {
      if (selectedTime < new Date()) {
        Alert.alert('Error', 'You cannot select a past time.');
      } else {
        setStartTime(selectedTime);
      }
    }
    setShowStartTimePicker(false);
  };

  const onChangeEndTime = (event, selectedTime) => {
    if (selectedTime) {
      if (selectedTime <= startTime) {
        Alert.alert('Error', 'End time must be after start time.');
      } else {
        setEndTime(selectedTime);
      }
    }
    setShowEndTimePicker(false);
  };

  return {
    eventName,
    setEventName,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    repeat,
    setRepeat,
    showStartTimePicker,
    setShowStartTimePicker,
    showEndTimePicker,
    setShowEndTimePicker,
    handleSave,
    handleDelete,
    onChangeStartTime,
    onChangeEndTime,
    isPastDate,
    existingEvent,
  };
};

export default useEventForm;
