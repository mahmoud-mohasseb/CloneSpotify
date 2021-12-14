import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Homescreen';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from '../screens/AlbumScreen';
import Search from '../screens/Search';
// import {
// //   TabOneParamList,
// //   TabTwoParamList,
// //   TabThreeParamList,
// //   BottomTabParamList,
// // } from '../types';
import TabTwoScreen from '../screens/TabTwoScreen';
import Colors from '../Constants/Colors';
import useColorScheme from '../Hooks/useColorScheme';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='Home'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name='home'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name='search'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Your Library'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='library-outline'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Premium'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name='spotify'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='TabOneScreen'
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

      <TabOneStack.Screen
        name='AlbumScreen'
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='TabTwoScreen'
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
// Dedicated for Search stacks of Albums
const TabThreeStack = createStackNavigator();
function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name='TabThreeScreen'
        component={Search}
        options={{ headerTitle: 'Albums' }}
      />
      <TabThreeStack.Screen
        name='AlbumScreen'
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </TabThreeStack.Navigator>
  );
}
