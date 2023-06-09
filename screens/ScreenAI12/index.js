import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSend = () => {
    console.log('Feedback:', feedback);
    setFeedback('');
  };

  return <View style={styles.container}>
      
      <TextInput style={styles.input} onChangeText={setFeedback} value={feedback} placeholder="Your feedback..." multiline />
      <Button title="Send" onPress={handleSend} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    width: '80%',
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  }
});
export default FeedbackScreen;