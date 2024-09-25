import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, { ChangeEvent } from 'react';

type Props = {
    onChange: (text: string) => void;
    onBlur?: (e:any) => void;
    value: string;
  };

  const LoginUserName: React.FC<Props> = ({ onChange, onBlur, value }) => {
    return (
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Số điện thoại, người dùng, email"
          placeholderTextColor="black"
          autoCapitalize="none"
          keyboardType="email-address"
          autoFocus={true}
          textContentType="emailAddress"
          onChangeText={onChange}
          onBlur={onBlur}  // Ensure this is a function with no arguments
          value={value}
          style={styles.textDecoration}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 3,
      borderWidth: 0.15,
      backgroundColor: '#F5F5F5',
      marginTop: 14,
      padding: 3,
    },
    textDecoration: {
      fontSize: 17,
      fontFamily: 'Poppins-Regular',
      fontWeight: '300',
      color: 'black',
    },
  });
  
  export default LoginUserName;