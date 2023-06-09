import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('+1 (123) 456-7890');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return <View style={styles.container}>
      <Image style={styles.userImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      {isEditing ? <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" /> : <Text style={styles.text}>{name}</Text>}
      {isEditing ? <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Phone Number" keyboardType="phone-pad" /> : <Text style={styles.text}>{phoneNumber}</Text>}
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    width: '80%',
    textAlign: 'center'
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  }
});
export default UserProfileScreen;