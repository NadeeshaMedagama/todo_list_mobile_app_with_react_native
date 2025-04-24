import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasksToStorage = async (tasks) => {
  try {
    // Ensure all tasks have the completed property
    const updatedTasks = tasks.map(task => ({
      ...task,
      completed: task.completed !== undefined ? task.completed : false
    }));
    
    await AsyncStorage.setItem('TASKS', JSON.stringify(updatedTasks));
  } catch (e) {
    console.error('Saving error', e);
  }
};

export const loadTasksFromStorage = async (setTasks) => {
  try {
    const tasks = await AsyncStorage.getItem('TASKS');
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      
      // Ensure all tasks have the completed property
      const updatedTasks = parsedTasks.map(task => ({
        ...task,
        completed: task.completed !== undefined ? task.completed : false
      }));
      
      setTasks(updatedTasks);
    }
  } catch (e) {
    console.error('Loading error', e);
  }
};