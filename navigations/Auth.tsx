import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SignedInStack, SignedOutStack} from '../navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

export type Props = {
  token: string;
  error: Error;
};

const AuthNavigation=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);

  const hasTokenLoggedIn = (token: string | null) => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(null);
  };

  const retrievedToken = async () => {
    try {
      const result = await AsyncStorage.getItem('Instagram-AuthToken');
      hasTokenLoggedIn(result);
    } catch (error) {
      if (error instanceof Error) console.log('Error: ' + error.message);
    }
  };

  useEffect(() => {
    retrievedToken();
  }, []);

  return <NavigationContainer>
    {isLoggedIn ? <SignedInStack/> : <SignedOutStack/>}
  </NavigationContainer>;
};

export default AuthNavigation;
