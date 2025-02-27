import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CalendarComponent from '../components/CalendarComponent';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CalendarComponent selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      <Button title="Create Event" onPress={() => navigation.navigate('EventScreen', { selectedDate })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
