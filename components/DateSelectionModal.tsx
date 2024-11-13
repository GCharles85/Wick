import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

export function DateSelectionModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Handle date selection
  const handleDayPress = (day) => {
    const date = day.dateString;

    // Toggle check/uncheck of selected dates
    setSelectedDates((prevDates) => {
      const updatedDates = { ...prevDates };
      if (updatedDates[date]) {
        delete updatedDates[date]; // Uncheck if already selected
      } else {
        updatedDates[date] = { selected: true, marked: true, selectedColor: 'blue' }; // Check the date
      }
      return updatedDates;
    });
  };

  return (
    <View style={styles.container}>
      {/* Button to open the modal */}
      <Button title="Select Dates" onPress={toggleModal} />

      {/* Modal for date selection */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select Dates</Text>

          {/* Calendar with selectable dates */}
          <Calendar
            onDayPress={handleDayPress}
            markedDates={selectedDates}
            theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'red',
              arrowColor: 'blue',
            }}
          />

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
  closeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
