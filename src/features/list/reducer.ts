import { Todo } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadAsync, add, remove } from './actions';

export const isLoadingTodos = createReducer(false as boolean)
  .handleAction([loadAsync.request], (state, action) => true)
  .handleAction(
    [loadAsync.success, loadAsync.failure],
    (state, action) => false
  );

export const cr = createReducer([

] as Todo[])
  .handleAction(loadAsync.success, (state, action) => action.payload)
  .handleAction(add, (state, action) => [...state, action.payload])
  .handleAction(remove, (state, action) =>
    state.filter(i => i.id !== action.payload)
  );

const Reducer = combineReducers({
  isLoadingTodos,
  cr,
});

export default Reducer;
export type TodosState = ReturnType<typeof Reducer>;
