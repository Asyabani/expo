import { View, Text ,Platform, FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { useCart } from '@providers/cartProvider'
import CartListItem from '@components/CartListItem'
import Button from '@components/Button'

const cartScreeen = () => {
  const {items,total} = useCart();
  return (
    <View style={{padding: 10}}>
      <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item} />}
      contentContainerStyle={{gap: 1}}
      />
      <Text style={{fontWeight: "bold",fontSize: 24,color: "white"}}>Total: ${total.toFixed(2)}</Text>
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'}/>
      <Button text="Checkout"/>
    </View>
  )
}

export default cartScreeen