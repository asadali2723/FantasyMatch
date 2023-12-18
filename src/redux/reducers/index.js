import {combineReducers} from 'redux';
import loader from './loader';

import theme from './theme';
import matchReducer from './matchReducer';

const allReducers = combineReducers({
  loader,
  matchReducer,
  theme,
});

export default allReducers;
