import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthOperationName, useEmailPasswordAuth, useAuth } from '@realm/react';

const RegisterScreen = ({ navigation }) => {
  const { result, logInWithEmailPassword } = useAuth();
  const { register } = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (result.success && result.operation === AuthOperationName.Register) {
      logInWithEmailPassword({ email, password });
    }
  }, [result, logInWithEmailPassword, email, password]);

  const handleRegister = () => {
    console.log('Register Button Pressed'); 
    register({ email, password });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Register</Text>
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
      {result?.error?.operation === AuthOperationName.Register && (
        <Text style={styles.error}>There was an error registering, please try again</Text>
      )}
      <TouchableOpacity style={styles.registerBtn} onPress={handleRegister} disabled={result.pending}>
        <Text style={styles.registerText}>REGISTER</Text>
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
    fontSize: 30,
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
  registerBtn: {
    width: '80%',
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  registerText: {
    color: 'white',
  },
  error: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: 'red',
  },
});

export default RegisterScreen;
