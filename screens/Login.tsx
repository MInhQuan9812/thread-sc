import React from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThreadLogo from './../assets/Logo/threads-seeklogo.svg';
import {Formik} from 'formik';
import LoginUserName from './components/LoginComponent/LoginUserName';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LoginButton from './components/LoginButton';
import LoginPassword from './components/LoginComponent/LoginPassword';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const width_height_Logo = 80;

function Login({navigation}) {
  const LoginFormSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email(),
    password: Yup.string().required(),
  });

  const postLogin = async (name:string, password:string) => {
    console.log(name);
    console.log(password);
    try {
      const res = await axios.post(
        'https://www.pgonevn.com/api/account/Login',
        {
          username: `${name}`,
          password: `${password}`,
        },
      );
      const token = await res.data.result.token;
      await AsyncStorage.setItem('Instagram-AuthToken', token);
      navigation.navigate('BottomTab');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(
          'Sai tài khoản, mật khẩu',
          error.message + '\n\n... What would you like to do next??',
          [
            {
              text: 'Đăng ký',
              onPress: () => navigation.navigate('Sign Up'),
            },
            {
              text: 'Thử lại',
              onPress: () => console.log('Ok'),
              style: 'cancel',
            },
          ],
        );
      }
    }
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <ThreadLogo width={width_height_Logo} height={width_height_Logo} />
        </View>

        <View style={styles.loginForm}>
          <Formik
            initialValues={{name: '', password: ''}}
            onSubmit={values => {
              postLogin(values.name, values.password);
            }}
            validationSchema={LoginFormSchema}
            validateOnMount={true}>
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
              <>
                <View>
                  <LoginUserName
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <LoginPassword
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {/* <ResetPassword /> */}
                 <LoginButton
                  navigation={navigation}
                  handleSubmit={handleSubmit}
                  disabled={!isValid}
                  isValid={isValid}
                />
                {/* <LinkToSignUp navigation={navigation} />  */}
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    );
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: WIDTH / 2 - width_height_Logo / 2,
    alignItems: 'center',
  },
  loginForm: {marginTop: 20, marginLeft: 20, marginRight: 20},
});
export default Login;
