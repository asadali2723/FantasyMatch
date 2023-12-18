import {View, StatusBar} from 'react-native';
import React from 'react';
import {LightTheme} from '@constants';

const CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={LightTheme.LightBlue}
      />
    </View>
  );
};

export default CustomStatusBar;
