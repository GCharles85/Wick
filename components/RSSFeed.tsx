import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Linking } from 'react-native';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const RSSFeed = () => {
  const [loading, setLoading] = useState(true);
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
       const rssFeedUrl = 'https://crispy-capybara-vpr46wxq66qfw6gj-4000.app.github.dev/fetch-rss'; 
       // Fetch the RSS feed XML from the Node.js backend
       const response = await axios.get(rssFeedUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

        // Parse the XML response
        const parser = new XMLParser();
        const jsonData = parser.parse(response.data);

        // Extract the first 10 articles from the feed
        const items = jsonData.rss.channel.item.slice(0, 10);
        setFeedItems(items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading RSS Feed...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={feedItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.feedItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(item.link)}
          >
            Read More
          </Text>
        </View>
      )}
    />
  );
};

export default RSSFeed;

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
  link: {
    fontSize: 14,
    color: '#007bff',
  },
});
