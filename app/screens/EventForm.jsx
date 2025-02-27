import React, { useState } from 'react';
import { View, TextInput, Button, Picker, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, deleteEvent } from '../redux/eventsSlice';

const EventForm = ({ selectedDate, onClose }) => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);
  const existingEvent = events[selectedDate] || {};
  
  const [eventName, setEventName] = useState(existingEvent.name || '');
  const [startTime, setStartTime] = useState(existingEvent.startTime || '03:00 PM');
  const [endTime, setEndTime] = useState(existingEvent.endTime || '03:00 PM');
  const [repeat, setRepeat] = useState(existingEvent.repeat || 'None');

  const handleSave = () => {
    if (!eventName) {
      Alert.alert("Error", "Event name cannot be empty");
      return;
    }
    dispatch(addEvent({ date: selectedDate, name: eventName, startTime, endTime, repeat }));
    onClose();
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Event",
      "Are you sure you want to delete this event?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => {
            dispatch(deleteEvent({ date: selectedDate }));
            onClose();
          }
        }
      ]
    );
  };

  return (
    <View>
      <TextInput placeholder="Event Name" value={eventName} onChangeText={setEventName} />
      
      <Picker selectedValue={repeat} onValueChange={(value) => setRepeat(value)}>
        <Picker.Item label="None" value="None" />
        <Picker.Item label="Weekly" value="Weekly" />
        <Picker.Item label="Bi-weekly" value="Bi-weekly" />
        <Picker.Item label="Monthly" value="Monthly" />
      </Picker>

      <Button title="Save Event" onPress={handleSave} />
      {existingEvent.name && <Button title="Delete Event" onPress={handleDelete} color="red" />}
    </View>
  );
};

export default EventForm;
