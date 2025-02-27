export const getRecurringEvents = (events) => {
    const today = new Date();
    const markedDates = {};
  
    Object.keys(events).forEach(date => {
      const event = events[date];
      markedDates[date] = { marked: true, dotColor: 'yellow' };
  
      if (event.repeat === 'Weekly') {
        let newDate = new Date(date);
        while (newDate < today.setMonth(today.getMonth() + 3)) { // Limit to 3 months ahead
          newDate.setDate(newDate.getDate() + 7);
          markedDates[newDate.toISOString().split('T')[0]] = { marked: true, dotColor: 'yellow' };
        }
      }
  
      if (event.repeat === 'Bi-weekly') {
        let newDate = new Date(date);
        while (newDate < today.setMonth(today.getMonth() + 3)) {
          newDate.setDate(newDate.getDate() + 14);
          markedDates[newDate.toISOString().split('T')[0]] = { marked: true, dotColor: 'yellow' };
        }
      }
  
      if (event.repeat === 'Monthly') {
        let newDate = new Date(date);
        while (newDate < today.setMonth(today.getMonth() + 3)) {
          newDate.setMonth(newDate.getMonth() + 1);
          markedDates[newDate.toISOString().split('T')[0]] = { marked: true, dotColor: 'yellow' };
        }
      }
    });
  
    return markedDates;
  };
  