import React, { Component } from 'react';
import Boards from "./presentational/Boards";
import MainMenu from './presentational/MainMenu';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
        {
          name: 'board 1',
          id: 'first'
        },
        {
          name: 'board 2',
          id: 'second'
        }
      ]
    };
    this.onCreate = this.onCreate.bind(this);
  }

  onCreate = (obj) => {
    this.setState({
      boards: [...this.state.boards, obj]
    });
  };

  render() {
    return (
      <>
        <div className='container'>
          <MainMenu />
        </div>
        <div className='container'>
          <Boards boardsList={this.state.boards} onCreate={this.onCreate} />
        </div>
      </>
    );
  }
};