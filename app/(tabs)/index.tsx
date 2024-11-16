import { Image, StyleSheet, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import RSSFeed from '@/components/RSSFeed'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
    <RSSFeed/>
    {/* Ovulation Status Circle */}
    <View style={styles.ovulationStatus}>
      <ThemedText type="defaultSemiBold" style={styles.ovulationText}>Ovulation in</ThemedText>
      <ThemedText type="default" style={styles.daysText}>6 days</ThemedText>
      <ThemedText type="default" style={styles.chanceText}>Low chance of getting pregnant</ThemedText>
      <TouchableOpacity style={styles.logButton}>
        <ThemedText type="default" style={styles.logButtonText}>Log period</ThemedText>
      </TouchableOpacity>
    </View>

    {/* My Daily Insights Section */}
    <View style={styles.insightsSection}>
      <ThemedText type="subtitle" style={styles.insightsTitle}>My daily insights</ThemedText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.insightsScroll}>
        <View style={styles.insightCard}>
          <Ionicons name="heart-outline" size={24} color="#ff5a5f" />
        </View>
        <View style={[styles.insightCard, styles.reportCard]}>
          <ThemedText type="defaultSemiBold" style={styles.cardText}>Your Period Report</ThemedText>
        </View>
        <View style={[styles.insightCard, styles.cycleDayCard]}>
          <ThemedText type="title" style={styles.cardText}>6</ThemedText>
          <ThemedText type="default" style={styles.cardSubtitle}>Today's cycle day</ThemedText>
        </View>

        <View style={styles.insightCard}>
          <Ionicons name="heart-outline" size={24} color="#ff5a5f" />
        </View>
        <View style={[styles.insightCard, styles.reportCard]}>
          <ThemedText type="defaultSemiBold" style={styles.cardText}>Your Period Report</ThemedText>
        </View>
        <View style={[styles.insightCard, styles.cycleDayCard]}>
          <ThemedText type="title" style={styles.cardText}>6</ThemedText>
          <ThemedText type="default" style={styles.cardSubtitle}>Today's cycle day</ThemedText>
        </View>
      </ScrollView>
  
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEFF4', // Light pink background color
    padding: 16,
  },
  ovulationStatus: {
    backgroundColor: 'white',
    borderRadius: 150,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  ovulationText: {
    fontSize: 16,
    color: '#333',
  },
  daysText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  chanceText: {
    fontSize: 14,
    color: '#999',
    marginVertical: 10,
  },
  logButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  logButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  insightsSection: {
    marginTop: 20,
  },
  insightsTitle: {
    marginBottom: 10,
  },
  insightsScroll: {
    flexDirection: 'row',
  },
  insightCard: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  reportCard: {
    backgroundColor: '#FDEFF4',
    padding: 10,
    alignItems: 'center',
  },
  cycleDayCard: {
    backgroundColor: '#EEE4F4',
    paddingVertical: 10,
    alignItems: 'center',
  }, 
  cardText: {
    color: '#333', // Increase contrast for better readability
    fontSize: 16,
    textAlign: 'center',
  },
  cardSubtitle: {
    color: '#555',
    fontSize: 12,
    textAlign: 'center',
  },
});
