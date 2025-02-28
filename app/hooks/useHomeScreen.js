import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const useHomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const events = useSelector((state) => state.events.events);
  const existingEvent = events[selectedDate] || null;
  const navigation = useNavigation();

  const handleEventNavigation = () => {
    navigation.navigate('EventScreen', { selectedDate });
  };

  return {
    selectedDate,
    setSelectedDate,
    existingEvent,
    handleEventNavigation,
  };
};

export default useHomeScreen;
