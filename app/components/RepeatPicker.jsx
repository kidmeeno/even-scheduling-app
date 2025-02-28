import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/EventFormStyles';

const RepeatPicker = ({ repeat, setRepeat }) => {
  return (
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
  );
};

export default RepeatPicker;
