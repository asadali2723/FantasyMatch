import {Alignment, Fonts, LightTheme, Value} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {flexDirection: Alignment.ROW, alignItems: Alignment.CENTER},
  innerCalenderView: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
    padding: widthPixel(Value.CONSTANT_VALUE_10),
  },
  main: {paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_30)},
  TapOnDate: {
    padding: widthPixel(Value.CONSTANT_VALUE_10),
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
    borderRadius: widthPixel(Value.CONSTANT_VALUE_10),
  },
  add: {
    height: heightPixel(Value.CONSTANT_VALUE_30),
    width: widthPixel(Value.CONSTANT_VALUE_30),
  },
  bottom: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_20),
    marginBottom: heightPixel(Value.CONSTANT_VALUE_20),
  },
  date: {
    fontFamily: Fonts.Inter_MEDIUM,
    fontSize: fontPixel(Value.CONSTANT_VALUE_13),
    color: LightTheme.white,
  },
  imgClock: {
    height: heightPixel(Value.CONSTANT_VALUE_30),
    width: widthPixel(Value.CONSTANT_VALUE_30),
    alignItems: Alignment.CENTER,
  },
  dateText: {
    fontFamily: Fonts.IMPACT,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
    color: LightTheme.white,
  },
});
