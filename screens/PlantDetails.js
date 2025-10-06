import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lettuceTypes = [
  { id: "1", name: "Olmetie", image: require("../assets/olmetie.jpg") },
  { id: "2", name: "Romaine", image: require("../assets/romaine.jpg") },
  { id: "3", name: "Redleaf", image: require("../assets/redleaf.jpg") },
  { id: "4", name: "Oakleaf", image: require("../assets/oakleaf.jpg") },
  { id: "5", name: "Butterhead", image: require("../assets/butterhead.jpg") },
  { id: "6", name: "Escarole", image: require("../assets/escarole.jpg") },
];

export default function PlantDetails({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lettuce</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <Text style={styles.subTitle}>Types of lettuce</Text>

      <FlatList
        data={lettuceTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
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
  headerTitle: { fontSize: 30, fontWeight: "bold", color:"#43671A" },
  subTitle: { fontFamily: "Inter_600SemiBold", fontSize: 18, fontWeight: "500", color: "#43671A", marginLeft: 16, marginBottom: 12 },
  card: { flex: 1, backgroundColor: "#F8F8F8", borderRadius: 12, marginBottom: 16, alignItems: "center", justifyContent: "center", padding: 8, marginHorizontal: 10, elevation: 2 },
  image: { width: "100%", height: 180, borderRadius: 8 },
  cardText: { fontFamily: "Inter_400Regular", fontSize: 15, marginTop: 6, color: "#43671A", textAlign: "center" },
});
