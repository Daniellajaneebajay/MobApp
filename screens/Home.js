import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
  const recommendations = [
    { id: 1, name: 'Basil', img: require('../assets/BASIL.jpg') },
    { id: 2, name: 'Petchay', img: require('../assets/PETCHAY.jpg') },
    { id: 3, name: 'Coriander', img: require('../assets/CORIANDER.jpg') },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
            <View style={styles.leftGroup}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color="#43671A" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/cat.png')} style={styles.profile} />
            </TouchableOpacity>
            <Text style={styles.greeting}>Hi, Kylie</Text>
            </View>

            <TouchableOpacity style={styles.bellWrapper} onPress={() => navigation.navigate('Notification')}>
                <Ionicons name="notifications-outline" size={22} color="#43671A" />
                <View style={styles.redDot} />
            </TouchableOpacity>
            </View>
    
        <Text style={styles.title}>Select your plants{"\n"}for Hydroponics!</Text>

        <View style={styles.topCard}>
          <View style={styles.daysPill}>
            <Text style={styles.daysText}>14{"\n"}Days</Text>
          </View>
          <View>
            <Text style={styles.topCardTitle}>Check your lettuce plants!</Text>
            <Text style={styles.topCardSub}>Today you water, 2 weeks for harvest</Text>
          </View>
        </View>

        <ImageBackground
          source={require('../assets/LETTUCE.jpg')}
          style={styles.plantCard}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.plantOverlay}>
            <Text style={styles.plantTitle}>Lettuce</Text>
          </View>
          <TouchableOpacity style={styles.seeBtn} onPress={() => navigation.navigate('PlantDetails')}>
            <Text style={styles.seeBtnText}>See Details</Text>
            <Feather name="chevrons-right" size={16} color="#2d6a2a" />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Recommendation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
          {recommendations.map(item => (
            <View key={item.id} style={styles.recoCard}>
              <Image source={item.img} style={styles.recoImg} />
              <Text style={styles.recoLabel}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Maintenance Tips</Text>
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/home.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Maintenance')}>
            <Image source={require('../assets/time-management.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Schedule')}>
            <Image source={require('../assets/thermometer.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Weather')}>
            <Image source={require('../assets/cloudy-day.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingHorizontal: 18, paddingTop: 18, paddingBottom: 120 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 40 },
  leftGroup: { flexDirection: 'row', alignContent: 'center' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  profile: { width: 28, height: 28, borderRadius: 14, borderWidth: 1.5, borderColor: '#A6DA8E', marginLeft: 12, marginRight: 6 },
  greeting: { fontFamily: 'Inter_600SemiBold', fontSize: 16, color: '#43671A', marginLeft: 6, textAlignVertical: 'center' },
  bellWrapper: { position: 'relative' },
  redDot: { position: 'absolute', top: 2, right: 2, width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF4949' },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 26, color: '#43671A', marginVertical: 14, lineHeight: 32 },
  topCard: { flexDirection: 'row', backgroundColor: '#EAF7E7', borderRadius: 12, padding: 12, alignItems: 'center', marginBottom: 16, marginTop: 10 },
  daysPill: { width: 68, height: 56, backgroundColor: '#69A050', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  daysText: { color: '#fff', fontFamily: 'Inter_600SemiBold', fontSize: 12, textAlign: 'center' },
  topCardTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 14, color: '#2d6a2a' },
  topCardSub: { fontFamily: 'Inter_400Regular', fontSize: 12, color: '#6b6b6b' },
  plantCard: { width: '100%', height: 180, marginBottom: 14, borderRadius: 12, overflow: 'hidden', marginTop: 20 },
  plantOverlay: { flex: 1, justifyContent: 'space-between', padding: 14 },
  plantTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 20, color: '#fff', textShadowColor: 'rgba(0,0,0,0.4)' },
  seeBtn: { alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 18, marginBottom: 12, marginRight: 12 },
  seeBtnText: { fontFamily: 'Inter_600SemiBold', fontSize: 12, color: '#2d6a2a', marginRight: 6 },
  sectionTitle: { fontFamily: 'Poppins_700Bold', fontSize: 20, color: '#2d6a2a', marginTop: 20 },
  recoCard: { width: 110, marginRight: 12, borderRadius: 12, backgroundColor: '#fff', overflow: 'hidden', marginTop:20 },
  recoImg: { width: '100%', height: 95 },
  recoLabel: { padding: 8, fontFamily: 'Inter_400Regular', fontSize: 15, color: '#2d6a2a' },
  bottomNavWrapper: { position: 'absolute', left: 18, right: 18, bottom: 22, alignItems: 'center', zIndex: 50 },
  bottomNav: { position: 'absolute', bottom: 40, left: 20, right: 20, backgroundColor: '#69A050', borderRadius: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 12, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6 },
  navIcon: { width: 30, height: 30, resizeMode: 'contain' },
  navBtn: { width: 46, height: 46, borderRadius: 12, backgroundColor: '#69A050', justifyContent: 'center', alignItems: 'center' },
});