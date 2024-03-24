import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AuthOperationName, useAuth, useEmailPasswordAuth } from '@realm/react';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { result, logInWithEmailPassword } = useAuth();
  const { register } = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    if (result.error) {
      setErrorMessage(result.error.message);
    }
  }, [result]);

  const handleLogin = async () => {
    try {
      await logInWithEmailPassword({ email, password });
    } catch (error) {
      console.log(error);
      if (error.message.includes('401')) {
        setErrorMessage('Invalid username or password.'); 
      } else {
        console.log('Error logging in:', error); 
      }
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register'); 
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
  
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={result.pending}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegister} disabled={result.pending}>
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
    color: 'red',
  },
  registerBtn: {
    //backgroundColor: '#8a2be2',
  },
});
export default LoginScreen;