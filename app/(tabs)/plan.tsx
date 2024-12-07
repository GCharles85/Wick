import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DateSelectionModal } from '@/components/DateSelectionModal';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text } from 'react-native'; 



export default function PlanScreen({navigation}) {
  const handleDateRangeSave = (range) => {
    console.log('Date range saved:', range);
    // Save the range to your data structure here
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ThemedText type="default" style={styles.backButton}>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.container}>
      <Calendar/>
      <DateSelectionModal onSave={handleDateRangeSave} ></DateSelectionModal>
      </ThemedView>
    </ScrollView>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
  },
  backButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 1,
    alignSelf: 'flex-start',
  },
});
