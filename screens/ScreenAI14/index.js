import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeleteAccountScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.successText}>Successfully removed/deleted</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default DeleteAccountScreen;