import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MetalScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Generated Content Overview</Text>
      
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Metal Reports</Text>
        <View style={styles.reportContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.reportImage} />
          <Text style={styles.reportSummary}>Summary of metal reports</Text>
        </View>
      </View>
      
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Economic Policy Reports</Text>
        <View style={styles.reportContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.reportImage} />
          <Text style={styles.reportSummary}>Summary of economic policy reports</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.selectButton} onPress={() => {
      navigation.navigate("ScreenAI16");
    }}>
        <Text style={styles.selectButtonText}>Select</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  categoryContainer: {
    marginBottom: 24
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  reportContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reportImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8
  },
  reportSummary: {
    flex: 1,
    fontSize: 16
  },
  selectButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center'
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default MetalScreen;