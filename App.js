import 'react-native-gesture-handler';
import * as React from 'react';
import { View, ActivityIndicator, StyleSheet, StatusaBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as usePoppins, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts as useInter, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/poppins';

import Splash from './screens/Splash';
import Ongoing1 from './screens/Ongoing1';
import Ongoing2 from './screens/Ongoing2';
import Ongoing3 from './screens/Ongoing3';
import Ongoing4 from './screens/Ongoing4';
import Home from './screens/Home';

import Profile from './screens/Profile';
import Notification from './screens/Notification';
import PlantDetails from './screens/PlantDetails';
import Maintenance from './screens/Maintenance';
import Schedule from './screens/Schedule';
import Weather from './screens/Weather';
import CustomDrawer from './screens/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeWithDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#A6DA8E",
        drawerActiveTintColor: "#43671A",
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        drawerStyle: { backgroundColor: "#A6DA8E", width: 300 },
      }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Location"
          component={Schedule}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="location-outline" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Rate the app"
          component={Weather}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="star-outline" size={20} color={color} />
          }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Ongoing1" component={Ongoing1} />
          <Stack.Screen name="Ongoing2" component={Ongoing2} />
          <Stack.Screen name="Ongoing3" component={Ongoing3} />
          <Stack.Screen name="Ongoing4" component={Ongoing4} />
          <Stack.Screen name="Home" component={HomeWithDrawer} />

          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="PlantDetails" component={PlantDetails} />
          <Stack.Screen name="Maintenance" component={Maintenance} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Weather" component={Weather} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
