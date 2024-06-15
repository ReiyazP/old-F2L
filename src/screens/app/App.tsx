import * as React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {enableScreens} from 'react-native-screens';

import {store} from 'store';
import HomeScreen from 'screens/home';
import ProfileScreen from 'screens/profile';
import {useRedux} from 'hooks';

// enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  const auth = useRedux('auth');
  console.log('in app', auth.isLoggedIn, auth.username);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithRedux;
