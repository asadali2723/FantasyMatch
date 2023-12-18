import {Alignment, Fonts, LightTheme, Value} from '@constants';

import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';
const fontText = {
  fontFamily: Fonts.Inter_MEDIUM,
  fontSize: fontPixel(Value.CONSTANT_VALUE_13),
  color: LightTheme.white,
};
export const dashboardStyle = StyleSheet.create({
  title: {
    fontFamily: Fonts.IMPACT,
    fontSize: fontPixel(Value.CONSTANT_VALUE_35),
    color: LightTheme.white,
    alignSelf: Alignment.CENTER,
  },
  main: {paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_10)},
  Upcoming: {
    fontFamily: Fonts.IMPACT,
    fontSize: fontPixel(Value.CONSTANT_VALUE_22),
    color: LightTheme.white,
    alignSelf: Alignment.FLEX_START,
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_10),
  },
  upcomingEvent: {
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_10),
  },
  noMatch: {
    ...fontText,
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_20),
    alignSelf: Alignment.CENTER,
    color: LightTheme.black,
  },
  sectionHeader: {
    fontFamily: Fonts.Inter_BOLD,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
    color: LightTheme.white,
    marginTop: heightPixel(Value.CONSTANT_VALUE_10),
  },
  matchItem: {
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_10),
    flexDirection: Alignment.ROW,
    alignItems: 'center',
  },
  time: {
    ...fontText,
  },
  participants: {
    ...fontText,
  },
});
