import React, {Component} from 'react';
import BoardCreateClosed from './BoardCreateClosed';
import BoardCreateOpen from './BoardCreateOpen';

export default class BoardCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
      error: false
    };
  }

  onCloseOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  onAdd = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.onCloseOpen();
      this.props.onClick({name: this.state.value});
      this.setState({
        value: ''
      })
    } else {
      this.setState(prevState => ({error: true}))
    }
  }

  onType = (event) => {
    if(this.state.error) {
      this.setState({
        value: event.target.value,
        error: !this.state.error
      })
    } else {
      this.setState({
        value: event.target.value
      })
    }
  }

  render() {
    return this.state.open ? (
      <BoardCreateOpen
        onClose={this.onCloseOpen}
        onAdd={this.onAdd}
        onType={this.onType}
        value={this.state.value}
        error={this.state.error}
      />
    ) : (
      <BoardCreateClosed onOpen={this.onCloseOpen} />
    );
  };
}