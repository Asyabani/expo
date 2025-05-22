import { ScrollView,View, FlatList, StyleSheet, Pressable } from 'react-native';
import products from '@assets/data/products';
import ProductList from '@components/ProductList';

export default function MenuScreen() {

  return (
      <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductList product={item} />
      )
    }
    numColumns={2}
    contentContainerStyle={{gap: 10,padding:10}}
    columnWrapperStyle={{gap: 10}}
      />
  );
}

