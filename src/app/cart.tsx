import { View, Text ,Platform, FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { useCart } from '@providers/cartProvider'
import CartListItem from '@components/CartListItem'

const cartScreeen = () => {
  const {items} = useCart();
  return (
    <View>
      <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item} />}
      contentContainerStyle={{gap: 10,padding:10}}
      />
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'}/>
    </View>
  )
}

export default cartScreeen