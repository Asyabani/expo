import { ScrollView, StyleSheet, Pressable } from 'react-native';
import products from '@/assets/data/products';
import ProductList from '@/components/ProductList';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = (product) => {
    console.log('Product pressed:', product);
    // Navigate to detail-order and pass product as JSON string
    router.push(`/detail-order?product=${encodeURIComponent(JSON.stringify(product))}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <Pressable key={product.id} onPress={() => handlePress(product)}>
          <ProductList product={product} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
