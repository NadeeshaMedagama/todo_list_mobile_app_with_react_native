import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import AddTaskInput from '../components/AddTaskInput';
import TaskList from '../components/TaskList';
import { useTaskStore } from '../services/zustandStore';
import { loadTasksFromStorage } from '../services/storage';
import { COLORS } from '../constants/colors';

export default function HomeScreen() {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    loadTasksFromStorage(setTasks);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <AddTaskInput />
      {tasks.length === 0 ? (
        <View style={styles.noTaskContainer}>
          <View style={styles.underline} />
          <Text style={styles.noTaskText}>No tasks</Text>
          <View style={styles.underline} />
        </View>
      ) : (
        <TaskList />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  noTaskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width:100,
    height:53,
    top:165,
    left:145,
    gap: 12,
  },
  noTaskText: {
    color: COLORS.white,
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight:'400',
    width:100,
    height:29,
    paragraphSpacing:12,
  },
  underline: {
    width: 64,
    height: 3,
    borderRadius:3,
    backgroundColor: COLORS.primary,
  },
});
