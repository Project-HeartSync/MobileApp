// screens/PersonalInfoScreen.js

import { Ionicons } from '@expo/vector-icons';
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

        <View style={styles.titleInput}>            
          <Text style={styles.titleText}>Name</Text>

          <View style={styles.innerInput}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            <Ionicons name="pencil" size={18} color="#888" style={styles.icon} />
          </View>
        </View>

        <View style={styles.titleInput}>            
          <Text style={styles.titleText}>Birthdate</Text>

          <View style={styles.innerInput}>
            <TextInput
                style={styles.input}
                value={birthdate}
                onChangeText={(text) => setBirthdate(text)}
              />
            <Ionicons name="pencil" size={18} color="#888" style={styles.icon} />
          </View>
        </View>

        <View style={styles.titleInput}>            
          <Text style={styles.titleText}>Gender</Text>

          <View style={styles.innerInput}>
            <TextInput
                style={styles.input}
                value={gender}
                onChangeText={(text) => setGender(text)}
              />
            <Ionicons name="pencil" size={18} color="#888" style={styles.icon} />
          </View>
        </View>

        <View style={styles.titleInput}>            
          <Text style={styles.titleText}>Email</Text>

          <View style={styles.innerInput}>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            <Ionicons name="pencil" size={18} color="#888" style={styles.icon} />
          </View>
        </View>

        <View style={styles.titleInput}>            
          <Text style={styles.titleText}>Healthcare Provider</Text>

          <View style={styles.innerInput}>
            <TextInput
                style={styles.input}
                value={healthcareProvider}
                onChangeText={(text) => setHealthcareProvider(text)}
              />
            <Ionicons name="pencil" size={18} color="#888" style={styles.icon} />
          </View>
        </View>

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
    //paddingHorizontal: 10,
    //marginBottom: 16,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    position: 'relative',
    top: 0,
    right: 0,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1, // Only the bottom border
    borderBottomColor: '#007AFF', // Border color
    paddingHorizontal: 10,
    //marginBottom: 16,
    paddingLeft: 0, // Remove left padding to align with the label
    paddingRight: 30, // Make space for the edit icon
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
  titleText: {
    fontSize: 14,
    color: 'black',
    marginRight: 10,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 'auto',
    padding: 5
  },
});

export default PersonalInfoScreen;
