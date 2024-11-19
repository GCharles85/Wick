import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import * as FileSystem from 'expo-file-system'; // Use for saving files locally in a React Native environment

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
        
        // Fetch images for each item title
        const itemsWithImages = await Promise.all(
          items.map(async (item) => {
            const imageUrl = await fetchImageForPrompt(item.title);
            const localImageUri = await saveImageLocally(imageUrl, item.title);
            return { ...item, image: localImageUri };
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

  // Function to fetch an image based on a prompt
  const fetchImageForPrompt = async (prompt) => {
    const formattedPrompt = prompt.replace(/\s+/g, '-');
    const apiUrl = `https://image.pollinations.ai/prompt/${formattedPrompt}`;
    return apiUrl; // Return the image URL directly since Pollinations serves the image
  };

  // Function to save the image locally
  const saveImageLocally = async (imageUrl, title) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();
  
      // Create a URL for the image blob
      const localUri = URL.createObjectURL(blob);
      return localUri; // Return the blob URL
    } catch (error) {
      console.error('Error saving image locally:', error);
      return null;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading RSS Feed...</Text>
      </View>
    );
  }
//TODO 1: Replace below with horizontal scrollview
  return (
    <FlatList
      data={feedItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.feedItem}>
          <Text style={styles.title}>{item.title}</Text>
          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        </View>
      )}
    />
  );
};

export default RSSFeed;

//TODO 2: Add CSS for images to blur them and get them to icon size
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 8,
  },
});
