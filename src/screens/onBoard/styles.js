import {Alignment, Fonts, LightTheme, Value} from '@constants';

import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';

export default {
  img: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_50),
    alignSelf: Alignment.FLEX_END,
  },
  title: {
    fontFamily: Fonts.IMPACT,
    fontSize: fontPixel(Value.CONSTANT_VALUE_35),
    color: LightTheme.white,
    alignSelf: Alignment.CENTER,
    width: widthPixel(Value.CONSTANT_VALUE_380),
  },
  description: {
    fontFamily: Fonts.IMPACT,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
    color: LightTheme.white,
    alignSelf: Alignment.CENTER,
    width: widthPixel(Value.CONSTANT_VALUE_380),
  },
  btn: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_17),
    backgroundColor: LightTheme.white,
    borderWidth: Value.CONSTANT_VALUE_0,
  },
};
