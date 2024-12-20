import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ForgetPassword = ({ setRequestReset, setVaidateCode }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80 }}>
        <Text style={styles.title}>Forget password?</Text>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'light' }}>
          Enter email associated with your account and we will send an emaill
          with instructions to reset your password
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.inputContainer1}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name='email-outline'
            size={24}
            color='black'
            style={{ marginRight: 10 }}
          />
          <TextInput style={styles.input} placeholder='enter your email here' />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRequestReset(false);
            setVaidateCode(true);
          }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
            Send
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
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
    marginTop: 10,
    marginVertical: 10,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ForgetPassword;
