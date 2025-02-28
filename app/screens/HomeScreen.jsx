import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarComponent from '../components/CalendarComponent';
import useHomeScreen from '../hooks/useHomeScreen';
import styles from '../styles/HomeScreenStyle';


const HomeScreen = () => {
  const { selectedDate, setSelectedDate, existingEvent, handleEventNavigation } = useHomeScreen();

  return (
    <View style={styles.container}>
      <View style={styles.calenderWrapper}>
        <CalendarComponent selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      </View>
      <View>
        <TouchableOpacity style={styles.saveButton} onPress={handleEventNavigation}>
          <Text style={styles.btnText}>
            {existingEvent ? 'View Event' : 'Create Event'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
