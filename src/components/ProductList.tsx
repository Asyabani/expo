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
      backgroundColor: "#121212",
      padding: 10,
      borderRadius: 20,
      flex:1,
      // margin:10
      maxWidth: "50%"
    },
    banner: {
        width: '100%',
        aspectRatio:1,
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