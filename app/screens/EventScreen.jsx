import React from 'react';
import { View } from 'react-native';
import useEventForm from '../hooks/useEventForm';
import styles from '../styles/EventFormStyles';
import EventInput from '../components/EventInput';
import TimePickerField from '../components/TimePickerField';
import RepeatPicker from '../components/RepeatPicker';
import EventActions from '../components/EventActions';

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
        <EventInput label="Event Name" value={eventName} onChangeText={setEventName} />
        <TimePickerField 
          label="Start Time" 
          time={startTime} 
          showPicker={showStartTimePicker} 
          setShowPicker={setShowStartTimePicker} 
          onChangeTime={onChangeStartTime} 
        />
        <TimePickerField 
          label="End Time" 
          time={endTime} 
          showPicker={showEndTimePicker} 
          setShowPicker={setShowEndTimePicker} 
          onChangeTime={onChangeEndTime} 
        />
        <RepeatPicker repeat={repeat} setRepeat={setRepeat} />
      </View>

      <EventActions 
        isPastDate={isPastDate} 
        handleSave={handleSave} 
        existingEvent={existingEvent} 
        handleDelete={handleDelete} 
      />
    </View>
  );
};

export default EventForm;
