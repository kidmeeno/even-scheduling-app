import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/EventFormStyles';

const TimePickerField = ({ label, time, showPicker, setShowPicker, onChangeTime }) => {
  return (
    <View style={styles.formRow}>
      <Text>{label}</Text>
      <TouchableOpacity
        style={styles.timePicker}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.timeText}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeTime}
        />
      )}
    </View>
  );
};

export default TimePickerField;
