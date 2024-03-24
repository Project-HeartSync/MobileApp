import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* Add other screens here */}
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default AppStack;
