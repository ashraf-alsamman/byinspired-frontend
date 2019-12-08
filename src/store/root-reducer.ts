import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import todosReducer from '../features/list/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducer,
});

export default rootReducer;
