import {ADD_MATCH, DELETE_MATCH, EDIT_MATCH} from '@redux/constants';

export const addMatch = match => {
  return {
    type: ADD_MATCH,
    payload: match,
  };
};

export const deleteMatch = matchId => {
  return {
    type: DELETE_MATCH,
    payload: matchId,
  };
};

export const editMatch = (matchId, editedMatch) => {
  return {
    type: EDIT_MATCH,
    payload: {
      id: matchId,
      editedMatch,
    },
  };
};
