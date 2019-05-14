import * as actionsTypes from './constants';

export const toggleCollapsed = value => ({
  type: actionsTypes.TOGGLE_COLLAPSED,
  value: !value,
});

export const focusSearch = focus => ({
  type: actionsTypes.CHANGE_FOCUS,
  focus,
});
