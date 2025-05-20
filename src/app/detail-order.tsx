import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailOrder() {
  const { product } = useLocalSearchParams();

  // Parse product string to object
  const productObj = product ? JSON.parse(product as string) : null;

  return (
    <View style={styles.container}>
      {productObj ? (
        <>
          <Image source={{ uri: productObj.image }} style={styles.image} />
          <Text style={styles.title}>{productObj.name}</Text>
          <Text style={styles.price}>${productObj.price}</Text>
        </>
      ) : (
        <Text>No product data found</Text>
      )}
    </View>
  );
}

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
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});
