import { View, FlatList, Text, Platform, Alert, Vibration } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@providers/cartProvider';
import CartListItem from '@components/CartListItem';
import Button from '@components/Button'; // pastikan ini benar
import React from 'react';
import { Audio } from 'expo-av';
import { useState } from 'react';
import CustomAlert from '@components/AlertNotFound'; 

const CartScreen = () => {
  const { items, total } = useCart();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) {
      Vibration.vibrate(500);
      const { sound } = await Audio.Sound.createAsync(
        require('@assets/sound/deddy-tolol.mp3')
      );
      await sound.playAsync();
      setAlertVisible(true);
    } else {
      console.log('Lanjut checkout...');
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ gap: 1 }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>
        Total: ${total.toFixed(2)}
      </Text>
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'} />
      <Button text="Checkout" onPress={handleCheckout} />
      <CustomAlert visible={alertVisible} onClose={() => setAlertVisible(false)} />
    </View>
  );
};


export default CartScreen;
