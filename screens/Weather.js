import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weather</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <Text style={styles.location}>Cugman, Cagayan de Oro City</Text>
      <Text style={styles.subtitle}>Today, 10:00</Text>

      <View style={styles.mainWeather}>
        <View style={styles.tempConatiner}>
          <Text style={styles.temperature}>20°</Text>
          <Text style={styles.condition}>Cloudy</Text>
        </View>  
        <View style={styles.iconContainer}>
          <Image source={require('../assets/weather-cloudy.png')} style={styles.weatherIcon} />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.forecast}>
        {[
          { day: 'Friday', temp: '20 / 8', icon: require('../assets/sunny.png') },
          { day: 'Saturday', temp: '16 / 7', icon: require('../assets/rain.png') },
          { day: 'Sunday', temp: '18 / 5', icon: require('../assets/cloudy.png') },
          { day: 'Monday', temp: '18 / 3', icon: require('../assets/cloudy.png') },
          { day: 'Tuesday', temp: '20 / 6', icon: require('../assets/sunny.png') },
        ].map((item, index) => (
          <View style={styles.forecastRow} key={index}>
            <Text style={styles.forecastDay}>{item.day}</Text>
            <Image source={item.icon} style={styles.forecastIcon} />
            <Text style={styles.forecastTemp}>{item.temp}</Text>
          </View>
        ))}
      </View>

      <View style={styles.separator} />      

      <View style={styles.sunInfo}>
        <View style={styles.sunItem}>
          <Image source={require('../assets/sunrise.png')} style={styles.sunIcon} />
          <Text style={styles.sunText}>5:55{'\n'}Sunrise</Text>
        </View>
        <View style={styles.sunItem}>
          <Image source={require('../assets/midday.png')} style={styles.sunIcon} />
          <Text style={styles.sunText}>12:12{'\n'}Midday</Text>
        </View>
        <View style={styles.sunItem}>
          <Image source={require('../assets/sunrise.png')} style={styles.sunIcon} />
          <Text style={styles.sunText}>19:53{'\n'}Sunset</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: 'bold', color: '#43671A' },
  location: { fontSize: 20, fontWeight: 'bold', color: '#43671A' },
  subtitle: { fontSize: 15, color: '#43671A', marginBottom: 20 },
  mainWeather: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20},
  tempContainer: { flexDirection: 'column', alignItems: 'flex-start' },
  temperature: { fontSize: 100, fontWeight: 'bold', color: '#43671A' },
  condition: { fontSize: 30, color: '#43671A', marginTop: 8 },
  iconContainer: { justifyContent: 'center', alignItems: 'center', paddingRight: 20, },
  weatherIcon: { width: 150, height: 150 },
  separator: { height: 1, backgroundColor: '#ccc', marginVertical: 20 },
  forecast: { backgroundColor: '#A6DA8E', borderRadius: 20, padding: 12, marginBottom: 20 },
  forecastRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6},
  forecastDay: { fontSize: 14, fontWeight: '500', color: '#333' },
  forecastIcon: { width: 22, height: 22, resizeMode: 'contain' },
  forecastTemp: { fontSize: 14, fontWeight: '500', color: '#333' },
  sunInfo: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  sunItem: { alignItems: 'center' },
  sunIcon: { width: 36, height: 36, resizeMode: 'contain' },
  sunText: { fontSize: 12, color: '#333', textAlign: 'center', marginTop: 6 },
});
