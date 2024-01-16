import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Text, ActivityIndicator, KeyboardAvoidingView, ScrollView } from "react-native";
import { IconButton } from 'react-native-paper'; // or the library you are using for IconButton
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
//import {useRouter} from 'expo-router';

export default function SettingsScreen() {
  //const route = useRoute();
  const navigation = useNavigation();
  //const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleReturn = () => {
    navigation.goBack();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handlePasswordUpdate = async () => {
    setErrMsg("");

    if (password === "") {
      setErrMsg("Password cannot be empty");
      return;
    } else if (!isPasswordValid(password)) {
      setErrMsg('Password must be at least 8 characters long' + '\n' + 'and contain at least one uppercase letter,' + '\n' + 'one lowercase letter, and one digit.' + '\n' + 'Please make sure that there is no special' + '\n' + 'characters in your password.');
      return;
    }

    setLoading(true);
    //const { error } = await supabase.auth.updateUser({
     // password: password,
    //});
    setLoading(false);

    if (error) {
      setErrMsg(error.message);
      return;
    }

    //navigation.navigate("passwordUpdateSuccess");
  };

  // password complexity
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
    const minLength = 8;

    return password.length >= minLength && passwordRegex.test(password);
  };

  const goBack = () => {
    navigation.navigate('settings');
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
      color: "black",
      marginTop: 20,
      //justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      alignSelf: 'flex-start',
      marginLeft: 16,
      marginBottom: 15,
      fontFamily: 'PoppinsBold',
  },
    button: {
      borderColor: "black",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#c7dede",
      width: 310,
      height: 56,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 16,
        
    },
    text1: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    passwordInput: {
      borderColor: "white",
      borderWidth: 1,
      borderBottomColor: "grey",
      backgroundColor: "white",
      width: '75%',
      height: 36,
    },
  
    error: {
        color: "red",
        marginTop: 4,
        marginBottom: 5,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30, 
        backgroundColor: 'white',
    },
    passwordIcon: {
      position: 'absolute',
      right: 10,
      top: '30%',
      transform: [{ translateY: -12 }],
    },
    backButton: {
      position: 'absolute',
      top: 60,
      left: 20,
      zIndex: 1,
  },
    error: {
      color: "red",
      fontFamily: 'Poppins',
      //marginTop: 10,
  },
  titleInput: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    //marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'column',
    width: 350,
  },
  innerInput: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: 'row',
    width: 350,
  },
  });


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
    <TouchableOpacity onPress={goBack} style={styles.backButton}>
      {/*<Ionicons name="arrow-back" size={24} color="black" />*/}
    </TouchableOpacity>
    <View style= {styles.innerContainer}>
    <Text style= {styles.title}> Reset password </Text>

      <View style={styles.titleInput}>            
          <View style={styles.innerInput}>
            <TextInput
                    secureTextEntry={!passwordVisible}
                    placeholder="Password"
                    placeholderTextColor={"#dfd8dc"}
                    style={styles.passwordInput}
                    autoCapitalize='none'
                    textContentType='password'
                    value={password}
                    onChangeText={setPassword}
              />
                <TouchableOpacity
                    style={styles.passwordIcon}
                    onPress={togglePasswordVisibility}
                >
                <IconButton
                    icon={passwordVisible ? "eye-off" : "eye"}
                    color="#000"
                    size={20}
                />
                </TouchableOpacity>
          </View>
        </View>
            {errMsg !== "" && <Text style = {styles.error}>{errMsg}</Text>}

            <TouchableOpacity style = {styles.button} onPress={handlePasswordUpdate}>
                <Text style={styles.text1}> Update password </Text>
            </TouchableOpacity>
      {loading && <ActivityIndicator />}
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}