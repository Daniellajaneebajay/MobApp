import React from 'react';
import { View, Image, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Ongoing1({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('../assets/ONGOING SCREEN (1).jpg')}
        style={styles.bg}
        imageStyle={styles.bgImage}
      >
        <View style={styles.bgGradient} />

        <BlurView intensity={60} tint="light" style={styles.logoGlow} />

        <Image
          source={require('../assets/LOGO.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Pressable style={styles.tapButton} onPress={() => navigation.navigate('Ongoing2')}>
          <Text style={styles.tapText}>Tap to start</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bgImage: { resizeMode: 'cover' },
  bgGradient: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '46%', backgroundColor: 'rgba(0,0,0,0.28)', zIndex: 1 },
  logoGlow: { position: 'absolute', width: 250, height: 250, borderRadius: 130, backgroundColor: 'rgba(255,255,255,0.9)', top: '50%', left: '50%', transform: [{ translateX: -130 }, { translateY: -130 }], filter: 'blur(50px)',  zIndex: 2, overflow: 'hidden' },
  logo: { position: 'absolute', width: 300, height: 300, top: '50%', left: '50%', transform: [{ translateX: -150 }, { translateY: -150 }], zIndex: 3 },
  tapButton: { position: 'absolute', top: '85%', left: '50%', transform: [{ translateX: -27 }], paddingVertical: 10, paddingHorizontal: 18, borderRadius: 14, backgroundColor: 'rgba(246, 243, 243, 0)', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 18, elevation: 6, zIndex: 4 },
  tapText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});
