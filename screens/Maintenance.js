import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Svg, { Rect, Line } from 'react-native-svg';

export default function Maintenance({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Maintenance</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.plantCard}>
        <Image
          source={require("../assets/MAINTENANCE IMAGE.jpg")}
          style={styles.plantImage}
          resizeMode="contain"
        />

        <Svg height="250" width="100%" style={StyleSheet.absoluteFill}>
          <Line x1="160" y1="80" x2="250" y2="50" stroke="#43671A" strokeWidth="2" />
          <Line x1="180" y1="160" x2="250" y2="200" stroke="#43671A" strokeWidth="2" />
        </Svg>

        <View style={[styles.infoBox, { top: 25, right: 20 }]}>
          <Ionicons name="water-outline" size={14} color="#43671A" style={{ marginRight: 4 }} />
          <Text style={styles.infoText}>5.5 - 6.5</Text>
        </View>
        <View style={[styles.infoBox, { bottom: 35, right: 20 }]}>
          <Ionicons name="sunny-outline" size={14} color="#43671A" style={{ marginRight: 4 }} />
          <Text style={styles.infoText}>14 - 16 hrs</Text>
        </View>

        <Text style={styles.plantLabel}>LETTUCE</Text>
      </View>

      <View style={styles.tempCard}>
        <Text style={styles.sectionTitle}>Temperature</Text>

        <View style={styles.tempRow}>

          <View style={styles.tempScale}>
            {[30, 25, 20, 15, 10, 0].map((val) => (
              <Text key={val} style={styles.scaleText}>{val}</Text>
            ))}
          </View>

          <View style={{ alignItems: "center", flex: 1 }}>
            <Svg height="180" width="100%">

              <Rect x="0" y="0" width="100%" height="160" rx="8" fill="#A6DA8E" />

              <Line x1="0" y1="32" x2="100%" y2="32" stroke="#43671A" strokeWidth="1" />
              <Line x1="0" y1="64" x2="100%" y2="64" stroke="#43671A" strokeWidth="1" />
              <Line x1="0" y1="96" x2="100%" y2="96" stroke="#43671A" strokeWidth="1" />
              <Line x1="0" y1="128" x2="100%" y2="128" stroke="#43671A" strokeWidth="1" />
              <Line x1="0" y1="160" x2="100%" y2="160" stroke="#43671A" strokeWidth="1" />

              <Rect x="15%" y="45" width="20%" height="75" fill="red" rx="4" />

              <Rect x="40%" y="75" width="20%" height="45" fill="blue" rx="4" />

              <Rect x="65%" y="100" width="20%" height="20" fill="yellow" rx="4" />
            </Svg>
          </View>
        </View>

        <View style={styles.labelsContainer}>
          <View style={styles.labelItem}>
            <Ionicons name="sunny" size={16} color="red" />
            <Text style={styles.labelText}>Daytime Temp</Text>
          </View>
          <View style={styles.labelItem}>
            <Ionicons name="moon" size={16} color="blue" />
            <Text style={styles.labelText}>Night Temp</Text>
          </View>
          <View style={styles.labelItem}>
            <Ionicons name="water" size={16} color="yellow" />
            <Text style={styles.labelText}>Nutrient Solution</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Information Details</Text>

        <View style={styles.infoRow}>
          <Image source={require("../assets/fan.png")} style={styles.icon} />
          <Text style={styles.infoText}>Air Circulation</Text>
        </View>

        <View style={styles.infoRow}>
          <Image source={require("../assets/sun.png")} style={styles.icon} />
          <Text style={styles.infoText}>LED Grow Lights</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: "#43671A" },
  plantCard: { marginHorizontal: 16, marginBottom: 16, borderRadius: 12, backgroundColor: "#F8F8F8", alignItems: "center", padding: 12, position: "relative", elevation: 3 },
  plantImage: { width: "85%", height: 230 },
  infoBox: { position: "absolute", flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2, elevation: 3 },
  infoText: { fontFamily: "Inter", fontSize: 12, color: "#000000" },
  plantLabel: { position: "absolute", bottom: 10, left: 15, fontFamily: "Poppins_700Bold", fontSize: 16, fontWeight: "600", color: "#000000" },
  tempCard: { marginHorizontal: 8,  backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 16, elevation: 2 },
  sectionTitle: { fontFamily: "Poppins_700Bold", fontSize: 25, fontWeight: "600", color: "#43671A", marginBottom: 12, marginTop: 10 },
  tempRow: { flexDirection: "row", alignItems: "flex-start" },
  tempScale: { marginRight: 8 },
  scaleText: { fontSize: 12, fontFamily: "Inter", color: "#000000", marginBottom: 10 },
  labelsContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 20, alignItems: "center" },
  labelItem: { flexDirection: "row", alignItems: "center" },
  labelText: { fontFamily: "Inter", fontSize: 12, fontWeight: "500", marginLeft: 4, color: "#000000" },
  infoSection: { marginHorizontal: 16, marginBottom: 16 },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  icon: { width: 28, height: 28, marginRight: 8 },
  infoText: { fontFamily: "Inter_600SemiBold", fontSize: 18, color: "#000000" },
});