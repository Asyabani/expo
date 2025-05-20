import { ScrollView,View, FlatList, StyleSheet, Pressable } from 'react-native';
import products from '@assets/data/products';
import ProductList from '@components/ProductList';
import { useRouter } from 'expo-router';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = (product) => {
    console.log('Product pressed:', product);
    router.push(`/detail-order?product=${encodeURIComponent(JSON.stringify(product))}`);
  };

  return (
      <FlatList
      data={products}
      renderItem={({ item }) => (
        // <Pressable onPress={() => handlePress(item)}>
          <ProductList product={item} />
        // </Pressable>
      )
    }
    numColumns={2}
    contentContainerStyle={{gap: 10,padding:10}}
    columnWrapperStyle={{gap: 10}}
      />
  );
}

