import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

export default function App() {
    return(
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Blog" component={IndexScreen}/>
            <Stack.Screen name="Show" component={ShowScreen}/>
            <Stack.Screen name="Create" component={CreateScreen}/>
            <Stack.Screen name="Edit" component={EditScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
