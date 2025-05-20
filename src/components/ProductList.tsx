import { View, Image, Text, StyleSheet } from 'react-native';
import Product from '../types';

type ProductListProps = {
  product: Product
}
const defaultImage = 'https://saycheesekosher.com/wp-content/uploads/2023/11/italian.jpg';
const ProductList = ({product}: ProductListProps) => {
    return(
      <View style ={styles.container}>
        <Image
          source={{uri : product.image || defaultImage}}
          style={styles.banner}
        />
        <Text style={styles.title}>{product.name }</Text>
        <Text style={styles.price}>${product.price }</Text>
      </View>
    )
}
export default ProductList

const styles = StyleSheet.create({
    container:{
      padding: 16,
      borderRadius: 8,
    },
    banner: {
        width: '100%',
        height: 200, // tinggi tetap
        resizeMode: 'contain',
        backgroundColor: '#f0f0f0', // untuk mengisi ruang kosong jika gambar terlalu kecil
        borderRadius: 8,
      },
      
    title:{
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 16,
      textAlign: 'center',
      color: '#fff',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
      textAlign: 'center',
      color: '#fff',
  }
  })