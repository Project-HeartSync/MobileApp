// screens/MedicalRecordsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalRecordsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Medical Records Screen</Text>
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
});

export default MedicalRecordsScreen;
