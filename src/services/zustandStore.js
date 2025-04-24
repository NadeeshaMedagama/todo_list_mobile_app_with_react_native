// zustandStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ 
        tasks: [...state.tasks, { ...task, completed: false }] 
      })),
      deleteTask: (id) => set((state) => ({ 
        tasks: state.tasks.filter((task) => task.id !== id) 
      })),
      toggleTask: (id, newTitle, newAbout) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id 
            ? { ...task, title: newTitle || task.title, about: newAbout || task.about } 
            : task
        ),
      })),
      toggleTaskCompletion: (id) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id 
            ? { ...task, completed: !task.completed } 
            : task
        ),
      })),
      setTasks: (tasks) => set({ tasks }),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);