import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const PostScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [content, setContent] = useState('Content');
  const [date, setDate] = useState('Date');
  const [category, setCategory] = useState('Category');

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return <View style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.displayPost}>Display Post</Text>
      {isEditing ? <TextInput style={styles.input} value={title} onChangeText={setTitle} /> : <Text style={styles.title}>{title}</Text>}
      {isEditing ? <TextInput style={styles.input} value={description} onChangeText={setDescription} /> : <Text style={styles.description}>{description}</Text>}
      {isEditing ? <TextInput style={styles.input} value={content} onChangeText={setContent} /> : <Text style={styles.content}>{content}</Text>}
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.category}>{category}</Text>
      <TouchableOpacity onPress={toggleEdit} style={styles.editButton}>
        <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  displayPost: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 10
  },
  content: {
    fontSize: 16,
    marginBottom: 10
  },
  date: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 10
  },
  category: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 20
  },
  editButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center'
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10
  }
});
export default PostScreen;