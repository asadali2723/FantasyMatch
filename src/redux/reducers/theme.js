import {DarkTheme, LightTheme} from '@constants';
import {SET_THEME} from '@redux/constants';

const initialState = {
  theme: LightTheme,
  role: '',
  isDark: false,
};

const theme = (state = initialState, action = {}) => {
  if (action.type === SET_THEME) {
    return {
      ...state,
      theme: action.payload?.isDark ? DarkTheme : LightTheme,
      role: action.payload,
    };
  }

  return state;
};

export default theme;
