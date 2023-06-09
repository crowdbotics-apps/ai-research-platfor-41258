import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReportScreen = () => {
  const dummyData = {
    averageRate: 4.5,
    totalRegularUsers: 100,
    report: {
      title: 'Sample Report',
      content: 'This is a sample report content.',
      date: '2022-01-01',
      category: 'Technology'
    }
  };
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.averageRate}>Average Rate: {dummyData.averageRate}</Text>
      <Text style={styles.totalUsers}>Total Regular Users: {dummyData.totalRegularUsers}</Text>
      <View style={styles.reportContainer}>
        <Text style={styles.reportTitle}>{dummyData.report.title}</Text>
        <Text style={styles.reportContent}>{dummyData.report.content}</Text>
        <Text style={styles.reportDate}>{dummyData.report.date}</Text>
        <Text style={styles.reportCategory}>{dummyData.report.category}</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  backButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  averageRate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  totalUsers: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  reportContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  reportTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  reportContent: {
    fontSize: 16,
    marginTop: 10
  },
  reportDate: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20
  },
  reportCategory: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5
  }
});
export default ReportScreen;