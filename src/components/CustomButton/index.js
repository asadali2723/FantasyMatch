import {Fonts, Value} from '@constants';
import {fontPixel, width} from '@utils/responsive';
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function CustomButton({title, onPress, extraStyle = null}) {
  const selectedAnim = useRef(new Animated.Value(1)).current;
  return (
    <View style={styles.container}>
      <Animated.View style={[{transform: [{scale: selectedAnim}]}]}>
        <TouchableOpacity
          onPress={() => {
            Animated.sequence([
              Animated.timing(selectedAnim, {
                toValue: Value.CONSTANT_VALUE_2,
                duration: Value.CONSTANT_VALUE_300,
                useNativeDriver: true,
              }),
              Animated.timing(selectedAnim, {
                toValue: Value.CONSTANT_VALUE_1,
                duration: Value.CONSTANT_VALUE_300,
                useNativeDriver: true,
              }),
            ]).start(prev => onPress());
          }}
          style={[styles.circle, extraStyle]}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </Animated.View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    padding: 10,
    borderRadius: 10,
    width: width - 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: fontPixel(Value.CONSTANT_VALUE_20),
    fontFamily: Fonts.Inter_BOLD,
  },
});
