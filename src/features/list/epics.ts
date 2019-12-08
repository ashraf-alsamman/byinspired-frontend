import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadAsync, saveAsync } from './actions';
import { getTodos } from './selectors';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadAsync.request)),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadAsync.success),
        catchError((message: string) => of(loadAsync.failure(message)))
      )
    )
  );

export const saveTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(saveAsync.request)),
    switchMap(() =>
      from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
        map(saveAsync.success),
        catchError((message: string) => of(saveAsync.failure(message)))
      )
    )
  );
