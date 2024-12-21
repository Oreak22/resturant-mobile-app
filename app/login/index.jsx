import {
  View,
  Text,
  ScrollView,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import ForgetPassword from '../../components/ForgetPassword';
import Validate from '../../components/Validate';
import NewPasswordPage from '../../components/NewPasswordPage';
import SecondaryNavbar from '../../components/SecondaryNavbar';

const index = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [vaidateCode, setVaidateCode] = useState(false);
  const [newPasswordSet, setNewPasswordSet] = useState(false);
  const [requestReset, setRequestReset] = useState(true);
  return (
    <>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <SafeAreaView style={[styles.container]}>
        <SecondaryNavbar />
        <View
          style={{
            backgroundColor: 'transparent',
            width: '85%',
            marginHorizontal: 'auto',
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 35,
              color: 'black',
              marginBottom: 20,
              lineHeight: 60,
            }}>
            Login to {'\n'} your account
          </Text>
          <KeyboardAvoidingView
            behavior='padding'
            style={{ width: '100%', marginTop: 20 }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginBottom: 20,
                fontSize: 30,
              }}>
              <TextInput
                style={styles.input}
                placeholder='Enter your email address'
                keyboardType='email-address'
                autoComplete='email'
                autoCapitalize='none'
                autoCorrect={true}
                autoFocus={false}
                autoSize={true}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginBottom: 20,
                fontSize: 30,
              }}>
              <TextInput
                style={styles.input}
                placeholder='Enter your password'
                keyboardType='password'
                autoComplete='current-password'
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginVertical: 20,
              }}>
              <TouchableOpacity onPress={() => setResetPassword(true)}>
                <Text style={{ color: 'black', fontWeight: 'light' }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => router.push('/home')}
                style={{
                  backgroundColor: '#2D201C',
                  paddingVertical: 20,
                  borderRadius: 30,
                  width: '100%',
                  alignItems: 'center',
                  marginVertical: 30,
                  width: 200,
                  marginHorizontal: 'auto',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'light',
              }}>
              or login with
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 30,
                marginTop: 25,
                lineHeight: 20,
                marginVertical: 25,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icon/google.png')}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icon/apple.png')}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icon/facebook.png')}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25 }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link href='/register'>
                  <Text style={{ color: '#2D201C', fontWeight: 'bold' }}>
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Modal
        visible={resetPassword}
        transparent={false}
        animationType='slide'
        onRequestClose={() => {
          setResetPassword(false);
        }}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <TouchableOpacity
          style={styles.backToggle}
          onPress={() => setResetPassword(false)}>
          <MaterialIcons
            name='arrow-back-ios'
            size={24}
            color='black'
            style={{ marginHorizontal: 'auto' }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          {requestReset ? (
            <ForgetPassword
              setRequestReset={setRequestReset}
              setVaidateCode={setVaidateCode}
            />
          ) : vaidateCode ? (
            <Validate
              setVaidateCode={setVaidateCode}
              setNewPasswordSet={setNewPasswordSet}
            />
          ) : newPasswordSet ? (
            <NewPasswordPage />
          ) : (
            setRequestReset(true)
          )}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
  },
  input: {
    fontSize: 25,
  },
  backToggle: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: '100%',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImage: {
    width: '100%',
    marginHorizontal: 'auto',
    // height: '100%',
  },
});

export default index;
