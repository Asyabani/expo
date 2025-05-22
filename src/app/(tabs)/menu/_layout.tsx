import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { IconSymbol } from '@components/ui/IconSymbol';



export default function MenuStack() {
  return (
    <Stack
    screenOptions={{
      headerRight: () => 
      <Link href="/cart" asChild>
      <Pressable>
        {({pressed}) => (
           <IconSymbol size={28} name="shoppingcart" color={pressed ? 'white' : 'grey'} />
        )}
      </Pressable>
      </Link>
    }}
    >
    <Stack.Screen
      name="index"
      options={{
        title: 'Menu',
      }}
    />
  </Stack>
  );
}
