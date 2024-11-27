import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import { DateRangeManager } from './DateRangeManager'; // Import the statistical component

export function DateSelectionModal({ onSave }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [daysUntil, setDaysUntil] = useState(null); // State for storing the calculated days until the next range

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Handle date selection
  const handleDayPress = (day) => {
    const date = day.dateString;

    if (!startDate || (startDate && endDate)) {
      // Reset the selection if both dates are already set
      setStartDate(date);
      setEndDate(null);
      setMarkedDates({
        [date]: { startingDay: true, color: 'blue', textColor: 'white' },
      });
    } else if (!endDate) {
      // Set the end date and mark the range
      setEndDate(date);
      markRange(startDate, date);
    }
  };

  // Mark the range from start to end date
  const markRange = (start, end) => {
    let dates = {};
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      dates[dateString] = {
        color: 'lightblue',
        textColor: 'white',
        startingDay: dateString === start,
        endingDay: dateString === end,
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setMarkedDates(dates);
  };

  const handleSave = () => {
    if (startDate && endDate) {
      const range = { start: startDate, end: endDate };
      console.log("Range" + [range]);
      const dateRangeManager = new DateRangeManager([range]); // Create an instance with the selected range
      const nextDaysUntil = dateRangeManager.calculateDaysUntilNextRange(); // Calculate days until the next range

      setDaysUntil(nextDaysUntil); // Store the result in state
      onSave({ ...range, daysUntil: nextDaysUntil }); // Pass the range and calculation to the parent
      toggleModal();
    } else {
      alert('Please select a start and end date.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Button to open the modal */}
      <Button title="Select Date Range" onPress={toggleModal} />

      {/* Display the calculated days until */}
      {daysUntil !== null && (
        <Text style={styles.resultText}>
          Days until the next range: {daysUntil}
        </Text>
      )}

      {/* Modal for date selection */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select Date Range</Text>

          {/* Calendar with selectable date range */}
          <Calendar
            onDayPress={handleDayPress}
            markedDates={markedDates}
            markingType="period"
            theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'red',
              arrowColor: 'blue',
            }}
          />

          {/* Save button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Range</Text>
          </TouchableOpacity>

          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
});