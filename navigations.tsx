import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import Post from './screens/Post';
import Profile from './screens/Profile';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Notifi from './screens/Notifi';

type Props = {
  name:string | null
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 50},
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'create' : 'create-outline';
          } else if (route.name === 'Notify') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'people'
              : 'people-outline';
          }
          return <Icon name={iconName!} size={28} color="#000000" />;
        },
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Notify" component={Notifi} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export const SignedInStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTab" component={BottomTab} />
  </Stack.Navigator>
);

export const SignedOutStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sign Up" component={SignUp} />
  </Stack.Navigator>
);
