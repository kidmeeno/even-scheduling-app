import React, { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, deleteEvent } from '../redux/eventsSlice';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventForm = ({ route }) => {
  const { selectedDate } = route.params;
  const dispatch = useDispatch();
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
      Alert.alert('Error', 'This event conflicts with another scheduled event.');
      return;
    }

    dispatch(
      addEvent({
        date: selectedDate,
        name: eventName,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      })
    );
  };

  const handleDelete = () => {
    Alert.alert('Delete Event', 'Are you sure you want to delete this event?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => dispatch(deleteEvent({ date: selectedDate })),
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

  return (
    <View style={styles.container}>
      <View style={styles.eventFormWrapper}>
        <View style={styles.formRow}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Event Name'
            value={eventName}
            onChangeText={setEventName}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Start Time</Text>
          <TouchableOpacity
            style={styles.timePicker}
            onPress={() => setShowStartTimePicker(true)}
          >
            <Text style={styles.timeText}>
              Start Time:{' '}
              {startTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
        </View>

        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode='time'
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeStartTime}
          />
        )}
        <View style={styles.formRow}>
          <Text>End Time</Text>
          <TouchableOpacity
            style={styles.timePicker}
            onPress={() => setShowEndTimePicker(true)}
          >
            <Text style={styles.timeText}>
              End Time:{' '}
              {endTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
        </View>

        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode='time'
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeEndTime}
          />
        )}

        <View style={styles.formRow}>
          <Text>Repeat</Text>
          <TouchableOpacity style={styles.picker}>
            <Picker
              selectedValue={repeat}
              onValueChange={(value) => setRepeat(value)}
            >
              <Picker.Item label='None' value='None' />
              <Picker.Item label='Weekly' value='Weekly' />
              <Picker.Item label='Bi-weekly' value='Bi-weekly' />
              <Picker.Item label='Monthly' value='Monthly' />
            </Picker>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.saveButton, isPastDate && styles.disabledButton]}
        onPress={handleSave}
        disabled={isPastDate}
      >
        <Text style={styles.btnText}>Save Event</Text>
      </TouchableOpacity>
      {existingEvent.name && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.btnText}>Delete Event</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  timePicker: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  timeText: { fontSize: 16, color: 'black' },
  picker: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: '#feca57',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    margin: 20,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 0.65,
  },
  eventFormWrapper: {
    flex: 1,
  },
  formRow: {
    marginBottom: 15,
  },
});

export default EventForm;
