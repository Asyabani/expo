import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Image
            source={require('@assets/images/tolol.jpg')} // ganti dengan path gambar kamu
            style={styles.image}
          />
          <Text style={styles.title}>Keranjang Kosong</Text>
          <Text style={styles.message}>Tambahkan item terlebih dahulu sebelum checkout.</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertBox: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 12,
      alignItems: 'center',
      width: '80%',
    },
    image: {
      width: 80,
      height: 80,
      marginBottom: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#2196F3',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 6,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  

export default CustomAlert;
