import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
const random = () => parseInt(Math.random() * 255);
const randomColor = () =>
  'rgb(' + random() + ',' + random() + ',' + random() + ')';

export const Loader = () => {
  const loaderState = useSelector(state => state.loader);

  if (loaderState.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={randomColor()} />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
