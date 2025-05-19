import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import  products from '@/assets/data/products';

const product = products[0];
const defaultImage = 'https://saycheesekosher.com/wp-content/uploads/2023/11/italian.jpg';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={{uri :  defaultImage}}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{product.name}🍕</ThemedText>
      <ThemedText type="subtitle">${product.price}</ThemedText>
      </ThemedView>
      <ThemedText>
        Enjoy the best <ThemedText type="defaultSemiBold">Pepperoni Pizza</ThemedText> ordering experience through this app.
      </ThemedText>

      <Collapsible title="About Pepperoni Pizza">
        <ThemedText>
          Pepperoni Pizza is one of the most popular pizza varieties, topped with delicious slices of pepperoni, tomato sauce, and melted mozzarella cheese.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Menu and Ordering">
        <ThemedText>
          This app has two main screens: <ThemedText type="defaultSemiBold">app/(tabs)/menu.tsx</ThemedText> for browsing the menu and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/order.tsx</ThemedText> for placing your Pepperoni Pizza order.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Delivery, Dine-in, and Takeaway">
        <ThemedText>
          You can enjoy our Pepperoni Pizza through <ThemedText type="defaultSemiBold">delivery</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">dine-in</ThemedText>, or <ThemedText type="defaultSemiBold">takeaway</ThemedText>. To switch to dine-in mode, press{' '}
          <ThemedText type="defaultSemiBold">d</ThemedText> in the terminal running this app.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          For mouthwatering Pepperoni Pizza images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide visuals for different screen densities.
        </ThemedText>
        <Image source={require('@/assets/images/pizza.webp')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://pizza.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom Fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load custom fonts such as{' '}
          <ThemedText style={{ fontFamily: 'PizzaFont' }}>
            this one used for the Pepperoni Pizza menu.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.pizza.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and Dark Mode">
        <ThemedText>
          This app supports both light and dark themes. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook detects your preferred theme, allowing the Pepperoni Pizza interface to adjust accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.pizza.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText>
          This template includes animations such as a melting cheese effect on the Pepperoni Pizza. The{' '}
          <ThemedText type="defaultSemiBold">components/CheesyWave.tsx</ThemedText> uses the powerful{' '}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for showcasing our best Pepperoni Pizza.
            </ThemedText>
          ),
        })}
      </Collapsible>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 248,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    gap: 8,
  },
});
