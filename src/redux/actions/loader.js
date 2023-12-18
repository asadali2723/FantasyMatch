import * as Actions from '@redux/constants';

export const showAppLoader = () => ({
  type: Actions.SHOW_LOADER,
});

export const hideAppLoader = () => ({
  type: Actions.HIDE_LOADER,
});

export const showAppToast = (isErrToast, text = '') => ({
  type: Actions.SHOW_TOAST,
  payload: {isErrToast, text},
});

export const hideAppToast = () => ({
  type: Actions.HIDE_TOAST,
});
