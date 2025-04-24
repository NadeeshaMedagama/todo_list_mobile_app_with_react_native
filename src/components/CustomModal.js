import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CustomModal({ visible, type, onClose, onConfirm, taskData, setTaskData }) {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade">
          {type === 'delete' && (
            <>
              <View style={styles.deleteBackground}>
              <View style={styles.deletePopup}>
              <View style={styles.yellowLine}/>
              <View style={styles.content}>
              <Text style={styles.modalText}>Delete this task?</Text>
              <View style={styles.deleteButtonRow}>
                <TouchableOpacity style={styles.modalButton} onPress={onConfirm}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>
              </View>
              </View>
              </View>
            </>
          )}

          {type === 'edit' && (
            <>
              <View style={styles.editBackground}>
              <View style={styles.editPopup}>
              <TextInput
                style={[styles.input, { height: 32 }]}
                placeholder="Mini Input..."
                placeholderTextColor={COLORS.text}
                value={taskData?.title}
                onChangeText={(text) => setTaskData(prev => ({ ...prev, title: text }))}
              />
              <TextInput
                style={[styles.largeInput, { height: 343}]}
                placeholder="Max Input..."
                placeholderTextColor={COLORS.text}
                multiline
                value={taskData?.about}
                onChangeText={(text) => setTaskData(prev => ({ ...prev, about: text }))}
              />
              <View style={styles.editButtonRow}>
                <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={onConfirm}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
              </View>
              </View>
            </>
          )}

          {type === 'share' && (
            <View style={styles.shareBackground}>
            <View style={styles.shareRow}>
              <TouchableOpacity>
                <Image source={require('../assets/Content_copy.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/vk-svgrepo-com.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/telegram_icon.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/whatsapp_icon.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/facebook_icon.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
            </View>
          )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  deleteBackground: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'center',
    alignItems:'center',
  },
  deletePopup: {
    width: 281,
    height: 143,
    backgroundColor: COLORS.surface,
    borderRadius: 10,
  },
  yellowLine: {
    position: 'absolute',
    top: 0,
    height: 4.47,
    backgroundColor: COLORS.primary,
    width:'100%',
  },
  content: {
    alignItems: 'center',
  },
  modalText: {
    position:'absolute',
    fontSize: 18,
    fontWeight: '400',
    fontFamily:'Roboto',
    lineHeight: 18,
    color: COLORS.text,
    top:37.24,
    width:163.54,
    textAlign: 'center',
  },
  deleteButtonRow: {
    position:'absolute',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: 138,
    height:24,
    top:105.68,
    gap: 10,
  },
  modalButton: {
    width: 64,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.surface,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 10,
    fontWeight:'400',
    fontFamily:'Roboto',
    lineHeight: 18,
  },
  editBackground: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  editPopup: {
    height:451,
    width: 360,
    backgroundColor: COLORS.background,
    flexDirection:'column',
    alignItems:'center',
    gap:8,
    padding:16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  editButtonRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    gap: 12,
  },
  input: {
    width: 324,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical:7,
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    lineHeight: 18,
  },
  largeInput: {
    width: 324,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical:7,
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    lineHeight: 18,
    textAlignVertical: 'top',
  },
  shareBackground: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  shareRow: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
  },

});
