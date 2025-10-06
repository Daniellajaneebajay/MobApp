import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>

        <View style={styles.profileRow}>
          <Image
            source={require("../assets/cat.png")}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.profileName}>Kylie Bete</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Text style={styles.viewProfile}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.menuItems}>
          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Ionicons name="home-outline" size={20} color="#000" />
            <Text style={styles.menuLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => props.navigation.navigate("Schedule")}
          >
            <Ionicons name="location-outline" size={20} color="#000" />
            <Text style={styles.menuLabel}>Location</Text>
            <Feather name="chevron-right" size={18} color="#000" style={styles.arrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => props.navigation.navigate("Maintenance")}
          >
            <Ionicons name="settings-outline" size={20} color="#000" />
            <Text style={styles.menuLabel}>App settings</Text>
            <Feather name="chevron-right" size={18} color="#000" style={styles.arrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => props.navigation.navigate("Weather")}
          >
            <Ionicons name="star-outline" size={20} color="#000" />
            <Text style={styles.menuLabel}>Rate the app</Text>
            <Feather name="chevron-right" size={18} color="#000" style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <View style={styles.logoutSection}>
        <TouchableOpacity
          style={styles.menuRow}
          onPress={() => props.navigation.navigate("Splash")}
        >
          <Ionicons name="log-out-outline" size={22} color="#000" />
          <Text style={styles.menuLabel}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#A6DA8E" },
  profileRow: { flexDirection: "row", alignItems: "center", padding: 20 },
  profileImage: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: "#fff" },
  profileName: { fontSize: 16, fontWeight: "600", color: "#000" },
  viewProfile: { fontSize: 13, color: "#43671A", marginTop: 2 },
  divider: { height: 1, backgroundColor: "#8BC34A", marginHorizontal: 15, marginVertical: 10 },
  menuItems: { paddingHorizontal: 10, marginTop: 10 },
  menuRow: { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
  menuLabel: { fontSize: 15, fontWeight: "500", color: "#000", marginLeft: 15, flex: 1 },
  arrow: { marginLeft: "auto" },
  logoutSection: { padding: 20, borderTopWidth: 1, borderTopColor: "#8BC34A" },
});
