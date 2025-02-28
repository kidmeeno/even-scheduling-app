import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/EventFormStyles';

const EventInput = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.formRow}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default EventInput;
