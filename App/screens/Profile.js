// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://nationaltoday.com/wp-content/uploads/2022/07/National-Flower-Day.jpg', // Replace with your image URL
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Profile</Text>

      {/* Profile Picture */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

      {/* Name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* Additional user details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Age:</Text>
          <Text style={styles.detailValue}>30</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Location:</Text>
          <Text style={styles.detailValue}>City, Country</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => navigateToScreen('PersonalInfoScreen')}>
        <Ionicons name="person-circle" size={18} color="#888" style={styles.frontIcon} />
        <Text style={styles.editText}>Personal Information</Text>
        <Ionicons name="chevron-forward" size={18} color="#888" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.editButton} onPress={() => navigateToScreen('SettingsScreen')}>
        <Ionicons name="settings" size={18} color="#888" style={styles.frontIcon} />
        <Text style={styles.editText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={18} color="#888" style={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Logout button pressed!')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c7dede",
    width: 350,
    height: 56,
    marginBottom: 16,
    borderRadius: 16,
    position: 'absolute', bottom: 0
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: 350,
  },
  editText: {
    fontSize: 14,
    color: 'black',
    marginRight: 10,
    fontFamily: 'Poppins',
  },
  arrowIcon: {
    marginLeft: 'auto',
    padding: 5
  },
  frontIcon: {
    marginRight: 16
  }
});

export default ProfileScreen;
