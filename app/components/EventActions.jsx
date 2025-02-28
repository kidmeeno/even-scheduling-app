import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/EventFormStyles';

const EventActions = ({ isPastDate, handleSave, existingEvent, handleDelete }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.saveButton, isPastDate && styles.disabledButton]}
        onPress={handleSave}
        disabled={isPastDate}
      >
        <Text style={styles.btnText}>Save Event</Text>
      </TouchableOpacity>

      {existingEvent?.name && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.btnText}>Delete Event</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EventActions;
