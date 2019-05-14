import * as actionTypes from './constants';

const defaultState = {
  asideCollapsed: false,
  focusSearch: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.TOGGLE_COLLAPSED:
    return Object.assign({}, state, { asideCollapsed: action.value });
  case actionTypes.CHANGE_FOCUS:
    return Object.assign({}, state, { focusSearch: action.focus });
  default:
    return state;
  }
};
