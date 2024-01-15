/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './App/Login';
import Home from './App/Home';
import {name as appName} from './app.json';
import NotificationsScreen from './App/Notifications';

//AppRegistry.registerComponent(appName, () => App);

// open login screen
 AppRegistry.registerComponent(appName, () => App);
