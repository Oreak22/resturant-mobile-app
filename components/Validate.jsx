import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');

const Validate = ({ setVaidateCode, setNewPasswordSet }) => {
  const [code, setCode] = useState(['', '', '', '']);
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 60 }}>
        <Text style={styles.title}>Forget password?</Text>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'light' }}>
          Please enter the verification code we sent to your email address
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            maxLength={1}
            aria-disabled={code[0] === '' ? false : true}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            maxLength={1}
            aria-disabled={code[1] === '' ? false : true}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            maxLength={1}
            aria-disabled={code[2] === '' ? false : true}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType='numeric'
            aria-disabled={code[3] === '' ? false : true}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={{ marginVertical: 20, width: '100%' }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'light' }}>
          Didn't receive the code?{' '}
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'light' }}>
            Resend in {'00:30'}
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVaidateCode(false);
          setNewPasswordSet(true);
        }}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
          Send
        </Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 0.2 * width,
    height: 0.2 * width,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 0.2 * width,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 10,
    marginVertical: 10,
    width: 0.8 * Dimensions.get('window').width,
  },
  //   inputContainer: {
  //     width: '100%',
  //     marginVertical: 10,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },
});

export default Validate;
