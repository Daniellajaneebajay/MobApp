import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function Ongoing4({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/ONGOING SCREEN (4).jpg')} 
        style={styles.topSection}
        imageStyle={styles.topImage}
      />

      <View style={styles.bottomSection}>
        <View style={styles.handle} />

        <Text style={styles.welcome}>Automated. Efficient.{"\n"}Green.</Text>

        <Text style={styles.subtitle}>
          Automation at its best-Hydroverde{"\n"}handles the rest.
        </Text>

        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.nextText}>Next</Text>
        </Pressable>

        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, backgroundColor: '#fff' },
  topSection: { flex: 0.60, justifyContent: 'flex-end' },
  topImage: { resizeMode: 'cover' },
  bottomSection: { flex: 0.4, backgroundColor: '#A6DA8E', borderTopLeftRadius: 36, borderTopRightRadius: 36, paddingHorizontal: 28, paddingTop: 22, alignItems: 'center', marginTop: -30 },
  handle: { width: 46, height: 6, borderRadius: 6, backgroundColor: '#222222', marginBottom: 12, opacity: 0.9 },
  welcome: { fontFamily: 'Poppins_700Bold', fontSize: 24, color: '#000000', textAlign: 'center', marginBottom: 8, marginTop: 30 },
  subtitle: { fontFamily: 'Inter_600SemiBold', fontSize: 15, color: '#000000', textAlign: 'center', lineHeight: 30, marginTop: 30, marginBottom: 36, paddingHorizontal: 12 },
  nextButton: { backgroundColor: '#24009C', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 30, elevation: 4, shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 6, shadowOffset: { width: 0, height: 3 }, marginBottom: 10 },
  nextText: { color: '#FFFFFF', fontFamily: 'Inter_600SemiBold', fontSize: 16 },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#222222', opacity: 0.3, marginHorizontal: 6 },
  activeDot: { opacity: 1, backgroundColor: '#222222' },
});
