import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import colors from '../styles/colors';
//import { shadows } from '../styles/shadows';
//import { buttonStyles } from '../styles/button';
import { AuthOperationName, useAuth, useEmailPasswordAuth } from '@realm/react';

export const LoginScreen = () => {
  const { result, logInWithEmailPassword } = useAuth();
  const { register } = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (result.success && result.operation === AuthOperationName.Register) {
      logInWithEmailPassword({ email, password });
    }
  }, [result, logInWithEmailPassword, email, password]);

  const handleLogin = () => {
    logInWithEmailPassword({ email, password });
  };

  const handleRegister = () => {
    register({ email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HeartSync</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          placeholder="Email..."
          placeholderTextColor="black"
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          placeholder="Password..."
          placeholderTextColor="black"
          secureTextEntry
        />
      </View>
      {result?.error?.operation === AuthOperationName.LogInWithEmailPassword && (
        <Text style={styles.error}>There was an error logging in, please try again</Text>
      )}
      {result?.error?.operation === AuthOperationName.Register && (
        <Text style={styles.error}>There was an error registering, please try again</Text>
      )}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={result.pending}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister} disabled={result.pending}>
        <Text style={styles.signupText}>New to HeartSync? Click here to register.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#007aff',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupText: {
    color: 'black',
  },
  error: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: colors.white,
  },
  registerBtn: {
    //backgroundColor: '#8a2be2',
  },
});
export default LoginScreen;