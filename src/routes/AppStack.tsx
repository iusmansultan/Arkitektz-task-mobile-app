import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTES_NAME} from '../helpers/RoutesName';

import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';
import Feedback from '../screens/Feedback/Feedback';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES_NAME.SPLASH}>
      <Stack.Screen
        name={ROUTES_NAME.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES_NAME.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES_NAME.FEEDBACK} component={Feedback} />
    </Stack.Navigator>
  );
};

export default AppStack;
