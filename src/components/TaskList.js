import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTaskStore } from '../services/zustandStore';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useTaskStore();

  return (
    <FlatList
      style={styles.taskList}
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TaskItem task={item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
}

const styles = StyleSheet.create({
  taskList: {
    marginTop: 20,
    Top: 126,
    margin:'auto',
  },
});
