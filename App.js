/* eslint-disable react-hooks/exhaustive-deps */
import {View, DeviceEventEmitter} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from '@redux/actions/theme';
import {Value} from '@constants';
import MainNavigator from '@navigations/MainNavigator';
import {Loader} from '@components/Loader';
const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const handleColorSchemeChange = newColorScheme => {
    dispatch(setTheme(newColorScheme === 'dark'));
  };
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      'appearanceChanged',
      ({colorScheme: newColorScheme}) => {
        handleColorSchemeChange(newColorScheme);
      },
    );
    return () => {
      subscription.remove();
    };
  }, [dispatch]);
  App.addChangeListener = listener => {
    return DeviceEventEmitter.addListener('appearanceChanged', listener);
  };
  return (
    <View
      style={{flex: Value.CONSTANT_VALUE_1, backgroundColor: theme.background}}>
      <MainNavigator />
      <Loader />
    </View>
  );
};

export default App;
