import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screen/HomeScreen';
import { DetailScreen } from './src/screen/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor:"#ffffff",
          headerStyle: {
            backgroundColor: "#333399",
          }
        }}
        headerMode="float"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail" component={DetailScreen}
          options={{
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}