// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My Home Screen!</Text>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('NotificationsScreen')}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
});

export default HomeScreen;
