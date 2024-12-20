import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

const NewPasswordPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 80 }}>
          <Text style={styles.title}>Forget password?</Text>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'light' }}>
            Your new password must be different from previously used passwords
          </Text>
        </View>
        <KeyboardAvoidingView style={{ width: '100%' }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              marginBottom: 20,
              fontSize: 30,
            }}>
            <TextInput
              style={styles.input}
              placeholder='Enter New password'
              keyboardType='password'
              autoComplete='password-new'
              secureTextEntry={true}
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
              placeholder='Confirm password'
              keyboardType='password'
              autoComplete='password-new'
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => {
          router.replace('/home');
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            alignContent: 'flex-end',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              router.replace('/home');
            }}
            style={{
              backgroundColor: 'transparent',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'column',
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
              height: '40%',
            }}>
            <View
              style={{
                width: '30%',
                padding: 5,
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 10,
              }}></View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
              paddingVertical: 100,
              borderTopLeftRadius: 60,
              borderTopRightRadius: 60,
            }}>
            <View
              style={{ width: '100%', alignItems: 'center', lineHeight: 20 }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#979797',
                  height: 150,
                  width: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  marginBottom: 30,
                }}>
                <Image
                  source={require('../assets/icon/Success icon.png')}
                  style={{ width: 70, height: 90 }}
                />
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Your password has been changed
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: 'light', marginTop: 15 }}>
                Welcome back! Discover now!
              </Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  { paddingVertical: 20, width: '50%', borderRadius: 30 },
                ]}
                onPress={() => {
                  router.replace('/home');
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Browse Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '85%',
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 30,
    marginVertical: 10,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NewPasswordPage;
