import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DateSelectionModal } from '@/components/DateSelectionModal';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text } from 'react-native'; 



export default function PlanScreen() {
  const handleDateRangeSave = (range) => {
    console.log('Date range saved:', range);
    // Save the range to your data structure here
  };

  return (
    <ThemedView style={styles.container}>
      <Calendar />
      <DateSelectionModal onSave={handleDateRangeSave} ></DateSelectionModal>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
