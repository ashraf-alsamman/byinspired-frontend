import * as React from 'react';
import { connect } from 'react-redux';

import { add } from '../actions';

const dispatchProps = {
  addItem: add,
};

type Props = {
  addItem: (title: string) => void;
};

type State = {
  title: string;
};

class AddForm extends React.Component<Props, State> {
  readonly state = { title: '' };

  handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
    this.setState({ title: ev.currentTarget.value });
  };

  handleAddClick = () => {
    this.props.addItem(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form
        className="form-inline"
        onSubmit={ev => {
          ev.preventDefault();
        }}
      >

<div className="container">
  <div className="row">
    <div className="col-md-12">
      <form action="" accept-charset="UTF-8" method="get">
        <div className="input-group">
        <input
          className="form-control"
          // style={{ width: 450 }}
          type="text"
          placeholder="Enter new name"
          value={title}
          onChange={this.handleTitleChange}
        />          <span className="input-group-btn">
          <button className="btn btn-info "  type="submit" onClick={this.handleAddClick} disabled={!title}>
          Add
        </button>          </span>
        </div>
      </form>
    </div>
  </div>
</div>
      </form>
    );
  }
}

export default connect(
  null,
  dispatchProps
)(AddForm);
