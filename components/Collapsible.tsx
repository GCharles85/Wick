import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#f5f5f5', // Light gray background for the collapsible header
    paddingVertical: 20,        // Increased padding for a larger header
    paddingHorizontal: 16,      // Horizontal padding for the header
    borderRadius: 8,            // Rounded corners for the header
    marginVertical: 5,          // Adds spacing between collapsible items
  },
  content: {
    padding: 16,                // Increased padding for the content area
    backgroundColor: '#fafafa', // Slightly lighter background for the content
    borderBottomLeftRadius: 8,  // Matching rounded corners on the content
    borderBottomRightRadius: 8,
    marginTop: 6,
  },
});

