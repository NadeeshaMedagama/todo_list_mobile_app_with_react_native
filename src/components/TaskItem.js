import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTaskStore } from '../services/zustandStore';
import { COLORS } from '../constants/colors';
import CustomModal from '../components/CustomModal';

export default function TaskItem({ task }) {
  const { deleteTask, toggleTask, toggleTaskCompletion } = useTaskStore();
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editData, setEditData] = useState({ title: task.title, about: task.about });

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  const handleModalAction = () => {
    if (modalType === 'delete') {
      deleteTask(task.id);
    } else if (modalType === 'edit') {
      toggleTask(task.id, editData.title, editData.about);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.taskItemWrapper}>
      <TouchableOpacity style={styles.taskItem} onPress={handlePress} activeOpacity={1}>
        <TouchableOpacity
          style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
          onPress={() => toggleTaskCompletion(task.id)}
          activeOpacity={0.7}
        >
          {task.completed && (
            <Image source={require('../assets/Check.png')} style={styles.chechmark}/>
          )}
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={[styles.taskTitle, task.completed && styles.taskTitleCompleted]}>
            {task.title}
          </Text>
          <Text style={[styles.taskAbout, task.completed && styles.taskAboutCompleted]}>
            {task.about}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            setModalType('delete');
            setModalVisible(true);
          }}
          activeOpacity={1}
        >
          <Image source={require('../assets/Union(1).png')} style={styles.deleteIcon} />
        </TouchableOpacity>
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalType('share');
              setModalVisible(true);
            }}
            activeOpacity={1}
          >
            <Image source={require('../assets/Share.png')} style={styles.shareImg} />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setEditData({ title: task.title, about: task.about });
              setModalType('edit');
              setModalVisible(true);
            }}
            activeOpacity={1}
          >
            <Image source={require('../assets/Vector(1).png')} style={styles.editImg} />
          </TouchableOpacity>
        </View>
      )}

      <CustomModal
        visible={modalVisible}
        type={modalType}
        onClose={() => setModalVisible(false)}
        onConfirm={handleModalAction}
        taskData={editData}
        setTaskData={setEditData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskItemWrapper: {
    width: 345,
  },
  taskItem: {
    width: 345,
    backgroundColor: COLORS.surface,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  checkboxCompleted: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chechmark: {
    width:13,
    height:16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 240, // Reduced to accommodate checkbox
  },
  taskTitle: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  taskAbout: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  taskAboutCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  deleteButton: {
   width: 32,
   height: 32,
   borderRadius: 5,
   borderWidth: 2,
   borderColor: COLORS.secondary,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: COLORS.background,
  },
  deleteIcon: {
    width: 10.97,
    height: 10.97,
    transform: [{ rotate: '45deg' }],
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 36,
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  shareImg: {
    width: 16,
    height: 16,
  },
  editImg: {
    width: 16,
    height: 16,
  },
  iLetter: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
});
