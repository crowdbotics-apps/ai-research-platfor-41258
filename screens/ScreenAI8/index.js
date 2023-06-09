import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
const data = [{
  id: '1',
  category: 'Metal',
  keyword: 'Gold',
  reports: 5,
  news: 10
}, {
  id: '2',
  category: 'Metal',
  keyword: 'Silver',
  reports: 3,
  news: 8
}, {
  id: '3',
  category: 'Economic Policy',
  keyword: 'Inflation',
  reports: 7,
  news: 12
}, {
  id: '4',
  category: 'Economic Policy',
  keyword: 'Interest Rates',
  reports: 4,
  news: 9
}];

const GeneratedContentScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.keyword}>{item.keyword}</Text>
        <Text style={styles.details}>
          Reports: {item.reports} | News: {item.news}
        </Text>
      </View>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.itemImage} />
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.title}>Generated Content</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    elevation: 3
  },
  itemContent: {
    flex: 1
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  keyword: {
    fontSize: 16,
    color: '#777',
    marginTop: 5
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginTop: 10
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
export default GeneratedContentScreen;