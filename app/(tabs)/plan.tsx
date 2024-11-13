import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text } from 'react-native'; 


export default function PlanScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a title</ThemedText>
      <ThemedText type="subtitle">This is a subtitle</ThemedText>
      <ThemedText type="defaultSemiBold" lightColor="#333" darkColor="#CCC">
        This is default semi-bold text with custom colors for light and dark themes
      </ThemedText>
      <ThemedText type="link" onPress={() => console.log('Link clicked')}>
        This is a link
      </ThemedText>
      <Calendar/>
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
