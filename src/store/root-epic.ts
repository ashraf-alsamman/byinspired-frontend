import { combineEpics } from 'redux-observable';

import * as todosEpics from '../features/list/epics';

export default combineEpics(...Object.values(todosEpics));
