import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: "1",
    icon: "time-outline",
    title: "Reminder!",
    message: "Need to check your plants to avoid insect and any damage to your hydroponic plants.",
    time: "20 min",
    action: "Mark as done",
    iconColor: "#007AFF", 
    actionColor: "#007AFF",
  },
  {
    id: "2",
    icon: "alert-circle-outline",
    title: "Alert!",
    message: "The temperature is higher you need to cooling the greenhouse. ASAP!",
    time: "1 min",
    action: "View",
    iconColor: "#FF3B30",
    actionColor: "#007AFF", 
  },
  {
    id: "3",
    icon: "water-outline",
    title: "It's time to watering your plants",
    message: "Track your water level and helps your plants to grow more up.",
    time: "1 wk",
    action: "Update",
    iconColor: "#34C759", 
    actionColor: "#007AFF", 
  },
  {
    id: "4",
    icon: "alert-circle-outline",
    title: "Alert!",
    message: "The temperature is higher you need to cooling the greenhouse. ASAP!",
    time: "1 wk",
    action: "View",
    iconColor: "#FF3B30", 
    actionColor: "#007AFF",
  },
  {
    id: "5",
    icon: "time-outline",
    title: "It's time to harvest your lettuce",
    message: "Can you already harvest your lettuce, Harvest time! Enjoy harvest!",
    time: "3 wk",
    action: "Mark as done",
    iconColor: "#34C759", 
    actionColor: "#007AFF", 
  },
];

export default function Notification({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name={item.icon} size={18} color={item.iconColor} style={{ marginRight: 6 }} />
        <Text style={[styles.cardTitle]}>{item.title}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>

      <Text style={styles.message}>{item.message}</Text>

      <TouchableOpacity>
        <Text style={[styles.action, { color: item.actionColor }]}>{item.action}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: "#43671A" },
  card: { backgroundColor: "#E6F5E6", padding: 12, marginBottom: 5, elevation: 1 },
  cardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardTitle: { fontFamily: "Poppins_700Bold", fontSize: 15, fontWeight: "600", flex: 1, color: "#43671A", marginTop: 5 },
  timeText: { fontFamily: "Inter", fontSize: 13, color: "#343232ff" },
  message: { fontFamily: "Inter", fontSize: 13, color: "#343232ff", marginTop: 5, marginBottom: 6 },
  action: { fontFamily: "Inter_600SemiBold", fontSize: 15, fontWeight: "600", marginTop: 5 },
});
