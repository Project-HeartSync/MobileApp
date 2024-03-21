/**
 * @format
 */

/*import {AppRegistry} from 'react-native';
import App from './App';
import Login from './App/Login';
import Home from './App/Home';
import {name as appName} from './app.json';
import NotificationsScreen from './App/Notifications';

//AppRegistry.registerComponent(appName, () => App);

// open login screen
 AppRegistry.registerComponent(appName, () => App);*/

 import { AppRegistry } from 'react-native';
import AppWrapper from './App/AppWrapper';
import { name as appName } from './app.json';
import { SYNC_CONFIG } from './sync.config';

const RootComponent = () => {
  const { enabled, appId } = SYNC_CONFIG;
  print(appId);

  if (enabled) {
    // Render the synced version of the app
    return <AppWrapper appId={appId} />;
  } else {
    // Render the non-synced version of the app
    return <AppWrapper />;
  }
};

AppRegistry.registerComponent(appName, () => RootComponent);

