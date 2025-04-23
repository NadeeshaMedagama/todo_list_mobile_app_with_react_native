// src/components/EditModel.tsx

import React, {useState} from 'react';

import {
    Modal,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

import {Task, useTaskStore} from '../store/TaskStore';

interface Props {
    task: Task;
    onClose: () => void;
}

export default function EditModal({task, onClose}: Props) {
    const [title, setTitle] = useState(task.title);
    const [body, setBody] = useState(task.body);
    const updateTask = useTaskStore(state => state.updateTask);

    const onSave = () => {
        updateTask(task.id, title, body);
        onClose();
    };

    return (
        <Modal transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    {/*<Text style={styles.label}>Mini Input</Text>*/}
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Mini Input..."
                        placeholderTextColor="#fff"
                    />

                    {/*<Text style={styles.label}>Max Input</Text>*/}
                    <TextInput
                        style={styles.textArea}
                        value={body}
                        onChangeText={setBody}
                        placeholder="Max Input..."
                        placeholderTextColor="#fff"
                        multiline
                    />

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSave} style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modal: {
        width: '90%',
        minHeight: 320,
        backgroundColor: '#111',
        borderRadius: 12,
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    label: {
        color: '#fff',
        marginBottom: 6,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFA500',
        borderRadius: 8,
        padding: 10,
        color: '#fff',
        marginBottom: 16,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#FFA500',
        borderRadius: 8,
        padding: 10,
        color: '#fff',
        height: 240,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        minWidth: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

