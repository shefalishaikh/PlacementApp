import React from 'react';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashActivity from './src/components/Splash';
import UserDashboardActivity from './src/components/UserDashboard';
import AdminLoginActivity from './src/components/Users/User/Login';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="AdminLoginActivity" component={AdminLoginActivity} />
        <Stack.Screen options={{ headerShown: false }} name="SplashActivity" component={SplashActivity} />
        <Stack.Screen options={{ headerShown: false }} name="UserDashboardActivity" component={UserDashboardActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
