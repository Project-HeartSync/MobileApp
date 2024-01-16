// screens/PersonalInfoScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const PersonalInfoScreen = () => {
  const [profilePic, setProfilePic] = useState('https://nationaltoday.com/wp-content/uploads/2022/07/National-Flower-Day.jpg');
  const [name, setName] = useState('John Doe');
  const [birthdate, setBirthdate] = useState('01/01/1990');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('john.doe@example.com');
  const [healthcareProvider, setHealthcareProvider] = useState('Healthcare Provider ABC');

  const handleSave = () => {
    console.log('Save button pressed!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => console.log('Change profile picture pressed!')}>
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        </TouchableOpacity>

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Birthdate:</Text>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={(text) => setBirthdate(text)}
        />

        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={(text) => setGender(text)}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Healthcare Provider:</Text>
        <TextInput
          style={styles.input}
          value={healthcareProvider}
          onChangeText={(text) => setHealthcareProvider(text)}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalInfoScreen;
