import {navigationRef} from '@navigations/MainNavigator';
import {CommonActions, StackActions} from '@react-navigation/native';

export const navigate = (name, params) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
};

export const goBack = () => {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

export const reset = (...args) => {
  navigationRef.current?.dispatch(CommonActions.reset(...args));
};

export const push = (...args) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
};

export const replace = (...args) => {
  navigationRef.current?.dispatch(StackActions.replace(...args));
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const popToBack = (...args) => {
  navigationRef.current?.dispatch(StackActions.pop(...args));
};
