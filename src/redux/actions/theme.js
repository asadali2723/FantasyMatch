import * as Actions from '@redux/constants';

export const setTheme = isDark => ({
  type: Actions.SET_THEME,
  payload: {isDark},
});
