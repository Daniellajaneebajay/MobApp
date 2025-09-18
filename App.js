import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import Ongoing1 from './screens/Ongoing1';
import Ongoing2 from './screens/Ongoing2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Ongoing1" component={Ongoing1} />
        <Stack.Screen name="Ongoing2" component={Ongoing2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
