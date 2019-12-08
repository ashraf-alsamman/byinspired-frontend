import { RootState } from 'typesafe-actions';
import * as React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

import ListItem from './ListItem';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.todos.isLoadingTodos,
  todos: selectors.getTodos(state.todos),
});
const dispatchProps = {
  removeTodo: actions.remove,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
const Pickandler = (todos: any ) => {
  if (todos.length === 0) { alert('you need to add some names'); return; }
  if (todos.length === 1) { alert('You need to put more than one name out to be chosen randomly'); return; }
  if (localStorage.getItem('last') === null) {
          const random = todos[Math.floor(Math.random() * todos.length)];
          localStorage.setItem('last', JSON.stringify(random))  ;
          alert( random.title );

  } else {
          const last = JSON.parse(localStorage.getItem('last') || '');
          const tososFilter =  todos.filter(i => i.id !== last.id);
          const random = tososFilter[Math.floor(Math.random() * tososFilter.length)];
          localStorage.setItem('last', JSON.stringify(random) );
          alert( random.title );
  }
};

function List({ isLoading, todos = [], removeTodo }: Props) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
    <div>
    <hr />

    <button className="btn btn-info  btn-block" type="button" onClick={() => { Pickandler(todos);  }}  >Pick</button>
    </div>
    <hr />
    <ul   className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          <ListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default connect(
  mapStateToProps,
  dispatchProps
)(List);
