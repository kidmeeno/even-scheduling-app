import { StyleSheet } from 'react-native';

const EventFormStyles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  timePicker: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  timeText: { fontSize: 16, color: 'black' },
  picker: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: '#feca57',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: 'red',
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
  eventFormWrapper: {
    flex: 1,
  },
  formRow: {
    marginBottom: 15,
  },
});

export default EventFormStyles;
