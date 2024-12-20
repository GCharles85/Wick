import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { DateSelectionModal } from '@/components/DateSelectionModal';

export default function DashboardPage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => (navigation.goBack())}>
          <ThemedText type="default">Go Back</ThemedText>
      </TouchableOpacity>
      {/* User Profile Card */}
      <View style={styles.profileCard}>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.profileImage} />
        <ThemedText type="title">No account</ThemedText>
        <TouchableOpacity>
          <ThemedText type="link" style={styles.editInfo}>Edit info</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.upgradeButton}>
          <ThemedText type="default" style={styles.upgradeButtonText}>Upgrade to premium</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Goal Selection */}
      <View style={styles.goalSection}>
        <ThemedText type="subtitle">My goal:</ThemedText>
        <View style={styles.goalOptions}>
          <TouchableOpacity style={[styles.goalButton, styles.goalButtonInactive]}>
            <ThemedText>Track cycle</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.goalButton, styles.goalButtonActive]}>
            <ThemedText style={styles.goalButtonActiveText}>Get pregnant</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.goalButton, styles.goalButtonInactive]}>
            <ThemedText>Track pregnancy</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuOptions}>      
        <Collapsible title="Graphs & Reports">
          {/* Content for Graphs & Reports */}
          <ThemedText>View your health graphs and reports here.</ThemedText>
        </Collapsible>
        <Collapsible title="Cycle and Ovulation">
          {/* Content for Cycle and Ovulation */}
          <ThemedText>Manage your cycle and ovulation settings.</ThemedText>
        </Collapsible>
        <Collapsible title="Settings">
          {/* Content for Settings */}
          <ThemedText>Adjust your app preferences and settings.</ThemedText>
        </Collapsible>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  editInfo: {
    color: '#555',
    fontSize: 14,
    marginVertical: 5,
  },
  upgradeButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-start'
  },
  upgradeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  goalSection: {
    marginVertical: 20,
  },
  goalOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  goalButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  goalButtonActive: {
    backgroundColor: '#ff5a5f',
  },
  goalButtonActiveText: {
    color: 'white',
  },
  goalButtonInactive: {
    backgroundColor: '#f2f2f2',
  },
  menuOptions: {
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#f5f5f5', // Light gray background
    paddingVertical: 20,        // Increased padding for a bigger bar
    paddingHorizontal: 16,      // Horizontal padding for space inside the item
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius: 8,            // Optional: rounded corners for a smoother look
    marginVertical: 5,       
  },
});
