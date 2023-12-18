import {Value} from '@constants';
import {Dimensions, PixelRatio} from 'react-native';
export const {width, height} = Dimensions.get('window');
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / Value.CONSTANT_VALUE_414;
const heightBaseScale = SCREEN_HEIGHT / Value.CONSTANT_VALUE_896;

export const normalizer = (size, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel = size => normalizer(size, 'width');

export const heightPixel = size => normalizer(size, 'height');

export const fontPixel = size => heightPixel(size);

export const LAYOUT = {
  horizontalMargin: normalizer(Value.CONSTANT_VALUE_24, 'width'),
};
