import { Todo } from 'MyModels';
import cuid from 'cuid';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const add = createAction('ADD', (title: string) => ({
  id: cuid(),
  title,
}))<Todo>();

export const remove = createAction('REMOVE')<string>();

export const loadAsync = createAsyncAction(
  'LOAD_REQUEST',
  'LOAD_SUCCESS',
  'LOAD_FAILURE'
)<undefined, Todo[], string>();

export const saveAsync = createAsyncAction(
  'SAVE_REQUEST',
  'SAVE_SUCCESS',
  'SAVE_FAILURE'
)<undefined, undefined, string>();
