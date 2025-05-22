import { View, Text ,StyleSheet,Image,Pressable } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { use } from 'react'
import products from '@assets/data/products';
import { defaultImage } from '@components/ProductList';
import { useState } from 'react';
import Button from '@components/Button';
import { useCart } from '@providers/cartProvider';
import { PizzaSize } from '@/src/types';


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
const productDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const {addItem} = useCart();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const product = products.find(product => product.id.toString() == id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product,selectedSize);
    router.push('/cart');
    console.log('Added to cart',selectedSize);
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }}/>
      <Image source={{uri : product?.image || defaultImage}} style={styles.image}/>

      <Text style={styles.title}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable onPress={() => setSelectedSize(size)} 
          key={size} 
          style={[styles.size, {backgroundColor: selectedSize === size ? '#121212' : 'black' }]}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? 'white' : 'gray' }]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to Cart"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 'auto',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: '#121212',
    width: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default productDetailScreen