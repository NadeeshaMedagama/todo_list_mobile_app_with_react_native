import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useTaskStore } from '../services/zustandStore';
import { COLORS } from '../constants/colors';


export default function AddTaskInput() {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const { addTask } = useTaskStore();

  const handleAddTask = () => {
    if (title.trim() === '') {return;}
    addTask({ id: Date.now(), title, about, completed: false });
    setTitle('');
    setAbout('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textinputcontainer}>
      <TextInput
        style={styles.input}
        placeholder="Title..."
        placeholderTextColor={COLORS.text}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="About..."
        placeholderTextColor={COLORS.text}
        value={about}
        onChangeText={setAbout}
      />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask} activeOpacity={1}>
      <Image
        source={require('../assets/Union(1).png')}
        style={styles.addButtonImage}
  />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    margin:'auto',
    marginBottom: 20,
    alignItems: 'center',
    width:345,
    height: 70,
    top:23,
    gap:8,
  },
  textinputcontainer: {
    flexDirection:'column',
    width: 267,
    height: 70,
    gap: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,

    paddingTop:7,
    paddingLeft:14,
    paddingBottom:7,
    borderRadius: 4,
    color: COLORS.text,
    fontFamily:'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight:18,
  },
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: 24,
    height: 24,
  },
});
