import { View, Text ,StyleSheet } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'

const productDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: 'Details' }}/>
      <Text style={styles.title}>productDetailScreen {id}</Text>
    </View>
  )
}

export default productDetailScreen
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0a7ea4',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});