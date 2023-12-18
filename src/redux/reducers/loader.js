import * as Actions from '@redux/constants';

const initState = {
  loading: false,
  text: '',
  showToast: false,
  isErrToast: true,
  toastText: '',
};

export default (state = initState, {type = '', payload = null} = {}) => {
  switch (type) {
    case Actions.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case Actions.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case Actions.SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        isErrToast: payload.isErrToast,
        toastText: payload.text,
      };
    case Actions.HIDE_TOAST:
      return {
        ...state,
        showToast: false,
      };
    default:
      return state;
  }
};
