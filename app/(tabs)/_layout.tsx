import { Tabs } from 'expo-router';
import React from 'react';
//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './index';
import Explore from './explore';
import Plan from './plan';

const Stack = createStackNavigator();

export default function TabLayout()  {
  const colorScheme = useColorScheme();

  return ( //TODO Finish implementing stack navigation
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="index"
         component={HomeScreen}
         options={{
           title: 'Home',
         }}
        />
         <Stack.Screen
         name="explore"
         component={Explore}
         options={{
           title: 'Explore',
         }}
        />  
        <Stack.Screen
         name="plan"
         component={Plan}
         options={{
           title: 'Plan',
         }}
        />  
      </Stack.Navigator>
    {/* <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="plan" // Name of the new screen
        options={{
          title: 'Plan',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
    </Tabs>  */}
     </NavigationContainer>
   
  );
}
