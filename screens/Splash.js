import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Ongoing1'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ONGOING LOGO.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#A6DA8E', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 2000, maxWidth: '100%', height: undefined, aspectRatio: 1 },
});
