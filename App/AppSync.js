import React, { useEffect, useState } from 'react';
import { useApp, useAuth, useQuery, useRealm, useUser } from '@realm/react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Task } from './models/Task';
import { TaskManager } from './components/TaskManager';
import { buttonStyles } from './styles/button';
import { shadows } from './styles/shadows';
import colors from './styles/colors';
import { OfflineModeButton } from './components/OfflineModeButton';
import HomeScreen from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import MedicalRecordsScreen from './screens/MedicalRecords';
import ProfileScreen from './screens/Profile';
import PersonalInfoScreen from './screens/PersonalInfo';
import SettingsScreen from './screens/Settings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false, headerTitle: ""}}/>
      <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{headerTitle: ""}}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerTitle: ""}}/>
    </Stack.Navigator>
  );
};

const AppSync = () => {
  const realm = useRealm();
  const user = useUser();
  const app = useApp();
  const { logOut } = useAuth();
  const [showDone, setShowDone] = useState(false);
  const tasks = useQuery(
    Task,
    collection =>
      showDone
        ? collection.sorted('createdAt')
        : collection.filtered('isComplete == false').sorted('createdAt'),
    [showDone],
  );

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(tasks);
    });
  }, [realm, tasks]);

  return (
    <>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Medical Records') {
              iconName = 'folder';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          "tabBarActiveTintColor": "blue",
          "tabBarInactiveTintColor": "gray",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Medical Records" component={MedicalRecordsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
      <Pressable style={styles.authButton} onPress={logOut}>
        <Text style={styles.authButtonText}>{`Logout ${user?.profile.email}`}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  idText: {
    color: '#999',
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});

export default AppSync;
