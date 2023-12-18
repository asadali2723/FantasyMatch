import {Alignment, LightTheme, Value} from '@constants';
import {StyleSheet} from 'react-native';
import {widthPixel} from './responsive';
export const globleStyle = StyleSheet.create({
  mainView: {
    flex: Value.CONSTANT_VALUE_1,
  },
  backGroundMain: {
    flex: Value.CONSTANT_VALUE_1,
    backgroundColor: LightTheme.LightBlue,
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_30),
  },
  spaceBetween: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
  },
});
