/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './App/Login';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

// open login screen
 AppRegistry.registerComponent(appName, () => Login);
