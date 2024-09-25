import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props ={
    navigation: any; // Thay đổi theo loại chính xác nếu cần
    handleSubmit: () => void;
    disabled: boolean;
    isValid: boolean;
}

export default function LoginButton(props:Props) {
    console.log(props.handleSubmit)
  return (
    <Pressable
      onPress={props.handleSubmit}
      disabled={props.disabled}
      style={createButtonStyle(props.isValid)}>
      <View>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
});
const createButtonStyle = (isValid: boolean): ViewStyle => ({
    borderRadius: 5,
    height: 50,
    backgroundColor: isValid ? '#0C8EFF' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
  });