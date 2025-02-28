import React from 'react';
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import useEventForm from '../hooks/useEventForm';
import styles from '../styles/EventFormStyles';

const EventForm = ({ route }) => {
  const { selectedDate } = route.params;
  const {
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
  } = useEventForm(selectedDate);

  return (
    <View style={styles.container}>
      <View style={styles.eventFormWrapper}>
        <View style={styles.formRow}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Event Name"
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
              {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
        </View>

        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
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
              {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
        </View>

        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeEndTime}
          />
        )}

        <View style={styles.formRow}>
          <Text>Repeat</Text>
          <TouchableOpacity style={styles.picker}>
            <Picker selectedValue={repeat} onValueChange={setRepeat}>
              <Picker.Item label="None" value="None" />
              <Picker.Item label="Weekly" value="Weekly" />
              <Picker.Item label="Bi-weekly" value="Bi-weekly" />
              <Picker.Item label="Monthly" value="Monthly" />
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

export default EventForm;
