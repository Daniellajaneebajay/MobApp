import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Polyline, Line } from 'react-native-svg';
import { Calendar } from 'react-native-calendars';

const COLORS = {
  primaryGreen: "#A6DA8E",
  darkerGreen: "#43671A",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#666",
  lightGray: "#E6E6E6",
  blue: "#00BFFF",
};

const wateringDays = [
  { day: "Sun", num: 3, size: "small" },
  { day: "Mon", num: 4, size: "big" },
  { day: "Tue", num: 5, size: "small" },
  { day: "Wed", num: 6, size: "big" },
  { day: "Thu", num: 7, size: "small" },
  { day: "Fri", num: 8, size: "big" },
  { day: "Sat", num: 9, size: "small" },
];

const progressItems = [
  { days: "30 Days", label: "Harvest and Use", done: false },
  { days: "21 Days", label: "Pruning and Maintenance", done: false },
  { days: "17 Days", label: "Pest and Disease Control", done: true },
  { days: "07 Days", label: "Pruning and Maintenance", done: true },
  { days: "01 Days", label: "Start Planting", done: true },
];

function GrowthChart({ width = 280, height = 160 }) {
  const points = [5, 10, 15, 18];
  const max = 20;
  const stepX = width / (points.length - 1);

  const coords = points
    .map((p, i) => `${i * stepX},${height - (p / max) * height}`)
    .join(" ");

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>

      <View style={{ justifyContent: "space-between", height: height }}>
        {[20, 15, 10, 5, 0].map((val) => (
          <Text key={val} style={{ fontSize: 12, color: COLORS.gray }}>
            {val}
          </Text>
        ))}
      </View>

      <View>
        <Svg width={width} height={height}>
          {[0, 5, 10, 15, 20].map((val) => {
            const y = height - (val / max) * height;
            return (
              <Line
                key={val}
                x1="0"
                y1={y}
                x2={width}
                y2={y}
                stroke={COLORS.lightGray}
                strokeWidth={0.6}
              />
            );
          })}
          <Polyline
            points={coords}
            fill="none"
            stroke={COLORS.darkerGreen}
            strokeWidth={3}
          />
        </Svg>

        {points.map((p, i) => {
          const x = i * stepX;
          const y = height - (p / max) * height;
          return (
            <Icon
              key={i}
              name="sprout"
              size={20}
              color={COLORS.darkerGreen}
              style={{ position: "absolute", left: x + 4, top: y - 10 }}
            />
          );
        })}

        <View style={styles.xLabels}>
          <Text style={styles.xLabel}>Week 1</Text>
          <Text style={styles.xLabel}>Week 2</Text>
          <Text style={styles.xLabel}>Week 3</Text>
          <Text style={styles.xLabel}>Week 4</Text>
        </View>
      </View>
    </View>
  );
}

export default function Schedule({ navigation }) {
  const [mode, setMode] = useState("week"); 

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Schedule</Text>
          <TouchableOpacity onPress={() => setMode(mode === "week" ? "month" : "week")}>
            <Ionicons
              name={mode === "week" ? "calendar" : "list"}
              size={24}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>

        {mode === "week" ? (
          <ScrollView contentContainerStyle={styles.scrollContent}>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Watering</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.dropdownText}>Week</Text>
                  <Ionicons name="chevron-down" size={14} color={COLORS.gray} />
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.waterRow}>
                  {wateringDays.map((d) => (
                    <View key={d.day} style={styles.waterDay}>
                      <Text style={styles.dayLabel}>{d.day}</Text>
                      <View style={styles.dropContainer}>
                        <Icon
                          name="water"
                          size={d.size === "big" ? 32 : 20}
                          color={COLORS.blue}
                          style={{ marginBottom: 6 }}
                        />
                        <Text style={styles.waterNum}>{d.num}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Average Growth</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.dropdownText}>Month</Text>
                  <Ionicons name="chevron-down" size={14} color={COLORS.gray} />
                </View>
              </View>
              <View style={styles.card}>
                <GrowthChart />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { marginBottom: 12, textAlign: "left" }]}>
                Progress Plants
              </Text>
              <View style={styles.timeline}>
                {progressItems.map((item, i) => {
                  const isDone = item.done;
                  return (
                    <View key={i} style={styles.timelineRow}>

                      <View style={styles.timelineLeft}>
                        <Text style={styles.daysText}>{item.days}</Text>
                      </View>

                      <View style={styles.timelineMiddle}>
                        <View
                          style={[
                            styles.timelineCircle,
                            isDone && { backgroundColor: COLORS.darkerGreen },
                          ]}
                        >
                          {isDone && <Icon name="check" size={12} color={COLORS.white} />}
                        </View>
                        {i < progressItems.length - 1 && (
                          <View style={styles.timelineConnector} />
                        )}
                      </View>

                      <View style={styles.timelineRight}>
                        <Text style={styles.progressLabel}>{item.label}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        ) : (

          <View style={styles.calendarContainer}>
            <Calendar
              current={"2025-06-01"}
              hideExtraDays={false}
              markedDates={{
                "2025-06-22": { selected: true, selectedColor: COLORS.primaryGreen },
              }}
              theme={{
                todayTextColor: COLORS.darkerGreen,
                selectedDayBackgroundColor: COLORS.primaryGreen,
                arrowColor: COLORS.darkerGreen,
                textMonthFontWeight: "bold",
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 40, paddingHorizontal: 20, marginBottom: 10 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: "#43671A" },
  scrollContent: { padding: 20, paddingBottom: 40 },
  section: { marginBottom: 20 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  sectionTitle: { fontSize: 16, color: COLORS.darkerGreen, fontWeight: "600" },
  dropdownText: { color: COLORS.gray, fontSize: 14, marginRight: 4 },
  card: { backgroundColor: COLORS.primaryGreen, paddingVertical: 16, paddingHorizontal: 8, borderRadius: 16 },
  waterRow: { flexDirection: "row", justifyContent: "space-between" },
  waterDay: { flex: 1, alignItems: "center" },
  dayLabel: { fontSize: 12, color: COLORS.white, marginBottom: 6 },
  dropContainer: { alignItems: "center" },
  waterNum: { fontSize: 16, fontWeight: "bold", color: COLORS.black },
  xLabels: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  xLabel: { fontSize: 12, color: COLORS.gray },
  timeline: { alignItems: "center" },
  timelineRow: { flexDirection: "row", minHeight: 50, alignItems: "center" },
  timelineLeft: { width: 80, alignItems: "flex-end", paddingRight: 8 },
  daysText: { fontSize: 13, color: COLORS.gray, fontWeight: "600" },
  timelineMiddle: { width: 30, alignItems: "center" },
  timelineCircle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: COLORS.darkerGreen, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" },
  timelineConnector: { width: 2, height: 38, backgroundColor: COLORS.darkerGreen },
  timelineRight: { flex: 1, paddingLeft: 10 },
  progressLabel: { fontSize: 14, color: COLORS.black },
  calendarContainer: { flex: 1, padding: 20 },
});
