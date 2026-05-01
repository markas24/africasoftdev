import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NotificationProvider } from './src/context/NotificationContext';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import AchievementsScreen from './src/screens/AchievementsScreen';
import ContactScreen from './src/screens/ContactScreen';
import LocationScreen from './src/screens/LocationScreen';
import ProjectDetailScreen from './src/screens/ProjectDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'construct' : 'construct-outline';
          } else if (route.name === 'Solutions') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Réalisations') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Localisation') {
            iconName = focused ? 'location' : 'location-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0A2B3E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Solutions" component={ProductsScreen} />
      <Tab.Screen name="Réalisations" component={AchievementsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Localisation" component={LocationScreen} />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NotificationProvider>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#0A2B3E" />
          <AppStack />
        </NavigationContainer>
      </NotificationProvider>
    </SafeAreaProvider>
  );
}