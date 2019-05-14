import { combineReducers } from 'redux';

import { reducer as homeReducer } from '../view/pages/home/store';
import { reducer as headerReducer } from '../view/layout/header/store';

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
});

export default reducer;
