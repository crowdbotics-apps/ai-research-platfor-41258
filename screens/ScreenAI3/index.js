import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
const currentReports = [{
  title: 'Current Report 1',
  description: 'This is a short summary of the current report 1.'
}, {
  title: 'Current Report 2',
  description: 'This is a short summary of the current report 2.'
}];
const pastReports = [{
  title: 'Past Report 1',
  description: 'This is a short summary of the past report 1.',
  date: '2021-09-01'
}, {
  title: 'Past Report 2',
  description: 'This is a short summary of the past report 2.',
  date: '2021-08-15'
}];

const ReportScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Reports</Text>
        {currentReports.map((report, index) => <View key={index} style={styles.reportCard}>
            
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>{report.title}</Text>
              <Text style={styles.reportDescription}>{report.description}</Text>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>)}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Published Reports</Text>
        {pastReports.map((report, index) => <View key={index} style={styles.reportCard}>
            
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>{report.title}</Text>
              <Text style={styles.reportDescription}>{report.description}</Text>
              <Text style={styles.reportDate}>{report.date}</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.buttonText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>)}
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  section: {
    margin: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reportCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  reportContent: {
    marginLeft: 10,
    flex: 1
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  reportDescription: {
    fontSize: 14,
    color: '#777'
  },
  reportDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginTop: 10,
    padding: 5
  },
  readMoreButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginTop: 10,
    padding: 5
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
});
export default ReportScreen;