import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarComponent from '../components/CalendarComponent';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const events = useSelector((state) => state.events.events);
  const existingEvent = events[selectedDate] || null;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.calenderWrapper}>
        <CalendarComponent
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('EventScreen', { selectedDate })}
        >
          <Text style={styles.btnText}>
            {existingEvent ? 'View Event' : 'Create Event'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  calenderWrapper: {
    flex: 2,
  },
  saveButton: {
    backgroundColor: '#feca57',
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
});

export default HomeScreen;
