import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
type Props = {
    onChange: (text: string) => void;
    onBlur?: (e:any) => void;
    value: string;
  };
export default function LoginPassword(props:Props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Mật khẩu"
        placeholderTextColor="#444"
        autoCapitalize="none"
        autoFocus={true}
        textContentType="password"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        style={styles.textDecoration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    borderWidth: 0.15,
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    padding: 3,
  },
  textDecoration: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
    color:'black'
  },
});