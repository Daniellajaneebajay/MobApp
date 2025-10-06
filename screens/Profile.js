import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Profile({ navigation }) {
  const [name, setName] = useState("Kylie Bete");
  const [email, setEmail] = useState("kylie123@gmail.com");
  const [phone, setPhone] = useState("09345938373");
  const [birthDate, setBirthDate] = useState("09/08/2003");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-GB"); 
      setBirthDate(formattedDate);
    }
  };

  const handleSave = () => {
    Alert.alert("Profile Updated", "Your changes have been saved.");
  };

  const handleCancel = () => {
    Alert.alert("Cancelled", "No changes were saved.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/cat.png")} 
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Birth of date</Text>
        <View style={styles.dateInput}>
          <TextInput
            style={{ flex: 1, fontSize: 14 }}
            value={birthDate}
            editable={false} 
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Ionicons name="calendar" size={20} color="#43671A" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: "#43671A" },
  profileImageContainer: { alignItems: "center", marginBottom: 20, position: "relative", marginTop: 30 },
  profileImage: { width: 120, height: 120, borderRadius: 60 },
  cameraIcon: { position: "absolute", bottom: 5, right: "35%", backgroundColor: "#007AFF", borderRadius: 20, padding: 6, borderWidth: 2, borderColor: "#fff"},
  form: { marginBottom: 30 },
  label: { fontSize: 18, fontWeight: "500", color: "#43671A", marginBottom: 4, marginTop: 12, fontFamily: "Inter_600SemiBold" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: "#fff", marginTop: 12 },
  dateInput: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, backgroundColor: "#fff", marginTop: 12 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  cancelButton: { flex: 1, marginRight: 10, backgroundColor: "#A6DA8E", borderWidth: 1.5, borderColor: "#A6DA8E", borderRadius: 15, paddingVertical: 12, alignItems: "center" },
  saveButton: { flex: 1, marginLeft: 10, backgroundColor: "#A6DA8E", borderWidth: 1.5, borderColor: "#A6DA8E", borderRadius: 15, paddingVertical: 12, alignItems: "center" },
  cancelText: { color: "#43671A", fontWeight: "600" },
  saveText: { color: "#43671A", fontWeight: "600" },
});
