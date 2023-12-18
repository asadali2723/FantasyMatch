import {Alignment, Fonts, LightTheme, Value} from '@constants';
import {fontPixel, heightPixel, width, widthPixel} from '@utils/responsive';

export default {
  centeredView: {
    flex: Value.CONSTANT_VALUE_1,
    justifyContent: Alignment.CENTER,
    alignItems: Alignment.CENTER,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    width: width - widthPixel(Value.CONSTANT_VALUE_40),
    backgroundColor: '#FCFCFD',
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_20),
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_20),
    borderRadius: Value.CONSTANT_VALUE_24,
  },
  img: {
    height: heightPixel(Value.CONSTANT_VALUE_120),
    width: widthPixel(Value.CONSTANT_VALUE_120),
    tintColor: LightTheme.COLOR_RED,
  },
  titleText: {
    marginLeft: widthPixel(Value.CONSTANT_VALUE_20),
    color: LightTheme.text,
  },
  title: {
    color: '#101828',
    fontSize: fontPixel(Value.CONSTANT_VALUE_24),
    fontFamily: Fonts.IMPACT,
    lineHeight: heightPixel(Value.CONSTANT_VALUE_30),
    textAlign: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_16),
    marginBottom: heightPixel(Value.CONSTANT_VALUE_8),
  },
  desc: {
    color: '#101828',
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    fontFamily: Fonts.Inter_MEDIUM,
    lineHeight: heightPixel(Value.CONSTANT_VALUE_20),
    textAlign: Alignment.CENTER,
    marginBottom: heightPixel(Value.CONSTANT_VALUE_16),
  },
  continue: {
    marginBottom: heightPixel(Value.CONSTANT_VALUE_12),
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    fontFamily: Fonts.Inter_BOLD,
    lineHeight: heightPixel(Value.CONSTANT_VALUE_30),
    marginTop: heightPixel(Value.CONSTANT_VALUE_16),
    textAlign: Alignment.CENTER,
  },
  icon: {
    margin: heightPixel(Value.CONSTANT_VALUE_10),
    height: heightPixel(Value.CONSTANT_VALUE_30),
    width: widthPixel(Value.CONSTANT_VALUE_30),
  },
  // ADD NEW Modal Styles
  container: {paddingVertical: heightPixel(Value.CONSTANT_VALUE_16)},
  dropdown: {
    height: heightPixel(Value.CONSTANT_VALUE_50),
    backgroundColor: LightTheme.white,
    borderRadius: widthPixel(Value.CONSTANT_VALUE_12),
    padding: heightPixel(Value.CONSTANT_VALUE_12),
    shadowColor: LightTheme.text,
    shadowOffset: {
      width: Value.CONSTANT_VALUE_0,
      height: Value.CONSTANT_VALUE_1,
    },
    shadowOpacity: Value.CONSTANT_VALUE_FRAC20,
    shadowRadius: Value.CONSTANT_VALUE_FRAC14,

    elevation: Value.CONSTANT_VALUE_2,
  },
  placeholderStyle: {
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    fontFamily: Fonts.Inter_REGULAR,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_10),
  },
  selectedTextStyle: {
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
  },
  iconStyle: {
    width: widthPixel(Value.CONSTANT_VALUE_20),
    height: heightPixel(Value.CONSTANT_VALUE_20),
  },
  inputSearchStyle: {
    height: heightPixel(Value.CONSTANT_VALUE_40),
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    fontFamily: Fonts.Inter_REGULAR,
  },

  item: {
    padding: heightPixel(Value.CONSTANT_VALUE_17),
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
    alignItems: Alignment.CENTER,
  },
  selectedStyle: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.CENTER,
    alignItems: Alignment.CENTER,
    borderRadius: widthPixel(Value.CONSTANT_VALUE_14),
    backgroundColor: LightTheme.white,
    shadowColor: LightTheme.text,
    marginTop: widthPixel(Value.CONSTANT_VALUE_8),
    marginRight: widthPixel(Value.CONSTANT_VALUE_12),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_8),
    shadowOffset: {
      width: Value.CONSTANT_VALUE_0,
      height: Value.CONSTANT_VALUE_1,
    },
    shadowOpacity: Value.CONSTANT_VALUE_FRAC20,
    shadowRadius: Value.CONSTANT_VALUE_FRAC14,

    elevation: Value.CONSTANT_VALUE_2,
  },
  textSelectedStyle: {
    marginRight: widthPixel(Value.CONSTANT_VALUE_5),
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    fontFamily: Fonts.Inter_MEDIUM,
  },
};
