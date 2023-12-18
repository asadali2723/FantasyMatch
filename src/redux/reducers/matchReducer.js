import {
  ADD_MATCH_SUCCESS,
  ADD_MATCH_FAIL,
  DELETE_MATCH_SUCCESS,
  DELETE_MATCH_FAIL,
  EDIT_MATCH_FAIL,
  ADD_MATCH,
  DELETE_MATCH,
} from '@redux/constants';

const initialState = {
  matchSchedule: [],
  addMatch: {
    error: null,
    loading: false,
    success: false,
  },
  deleteMatch: {
    error: null,
    loading: false,
    success: false,
  },
};

const matchReducer = (state = initialState, action) => {
  console.log(action.payload, 'action.payload');
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        addMatch: {
          ...state.addMatch,
          error: null,
          loading: true,
          success: false,
        },
      };
    case ADD_MATCH_SUCCESS:
      return {
        ...state,
        addMatch: {
          error: null,
          loading: false,
          success: true,
        },
        matchSchedule: [...state.matchSchedule, action.payload],
      };
    case ADD_MATCH_FAIL:
      return {
        ...state,
        addMatch: {
          ...state.addMatch,
          error: action.error,
          loading: false,
          success: false,
        },
      };
    case DELETE_MATCH:
      return {
        ...state,
        deleteMatch: {
          ...state.deleteMatch,
          error: null,
          loading: true,
          success: false,
        },
      };
    case DELETE_MATCH_SUCCESS:
      return {
        ...state,
        deleteMatch: {
          error: null,
          loading: false,
          success: true,
        },
        matchSchedule: state.matchSchedule.filter(
          match => match.id !== action.payload.id,
        ),
      };
    case DELETE_MATCH_FAIL:
      return {
        ...state,
        deleteMatch: {
          ...state.deleteMatch,
          error: action.error,
          loading: false,
          success: false,
        },
      };
    case EDIT_MATCH_FAIL:
      return {
        ...state,
        editMatch: {
          ...state.editMatch,
          error: action.error,
          loading: false,
          success: false,
        },
      };

    default:
      return state;
  }
};

export default matchReducer;
