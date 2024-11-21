import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import * as FileSystem from 'expo-file-system'; // Use for saving files locally in a React Native environment
import { Ionicons } from '@expo/vector-icons';

const RSSFeed = () => {
  const [loading, setLoading] = useState(true);
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {

        /*
        const rssFeedUrl = 'https://organic-space-zebra-6v569wj49wj25vr6-4000.app.github.dev/fetch-rss';

        // Fetch the RSS feed XML from the Node.js backend
        const response = await axios.get(rssFeedUrl, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        // Parse the XML response
        const parser = new XMLParser();
        const jsonData = parser.parse(response.data);

        // Extract the first 10 articles from the feed
        const items = jsonData.rss.channel.item.slice(0, 10);
        */
       
        const mockFeedItems = [
          { title: "A futuristic city with flying cars under a sunset sky", link: "https://example.com/article1" },
          { title: "A cozy cabin in a snowy forest at night", link: "https://example.com/article2" },
          { title: "A vibrant coral reef teeming with sea life", link: "https://example.com/article3" },
          { title: "A majestic castle on top of a mountain during sunrise", link: "https://example.com/article4" },
          { title: "A cyberpunk city with neon lights and rain-soaked streets", link: "https://example.com/article5" }
        ];
        const items = mockFeedItems;
        
        const itemsWithImages = await Promise.all(
          items.map(async (item) => {
            const imageUrl = await fetchImageForPrompt(item.title);
            return { ...item, image: imageUrl };
          })
        );

        setFeedItems(itemsWithImages);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  const fetchImageForPrompt = async (prompt) => {
    const formattedPrompt = prompt.replace(/\s+/g, '-');
    const apiUrl = `https://image.pollinations.ai/prompt/${formattedPrompt}`;
    return apiUrl;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading RSS Feed...</Text>
      </View>
    );
  }

  return (
    <ScrollView horizontal contentContainerStyle={styles.horizontalScrollView}>
      {feedItems.map((item, index) => (
        <View key={index} style={styles.feedItem}>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.iconImage} />
          ) : (
            <Ionicons name="image-outline" size={30} color="#ccc" />
          )}
          <Text style={styles.iconText}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default RSSFeed;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  feedItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconImage: {
    width: 50, // Icon size
    height: 50, // Icon size
    borderRadius: 25,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
