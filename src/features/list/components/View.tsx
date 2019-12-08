import * as React from 'react';
import List from './List';
import AddTodoForm from './AddForm';

export default class View extends React.Component {

  componentDidMount() {
    localStorage.removeItem('last');
  }

  render() {
    return (
      <section className="col-md-5 my-auto">
      <AddTodoForm />
      <List />
    </section>
    );
  }
}
