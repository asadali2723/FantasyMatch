// MainNavigator
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@constants';
import OnBoard from '@screens/onBoard';
import Dashboard from '@screens/Dashboard';
import ScheduleMatch from '@screens/ScheduleMatch';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();
const MainNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}
          initialRouteName={Routes.OnBoard}>
          <Stack.Screen name={Routes.OnBoard} component={OnBoard} />
          <Stack.Screen name={Routes.Dashboard} component={Dashboard} />
          <Stack.Screen name={Routes.ScheduleMatch} component={ScheduleMatch} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
