// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
      <Text style={styles.title}>My Profile</Text>

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

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('PersonalInfoScreen')}
      >
        <Text style={styles.buttonText}>Personal Info</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('SettingsScreen')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
